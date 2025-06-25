import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
  active?: boolean;
  description?: string; // Add description as it exists in some combo products
}

interface UseProductsResult {
  products: Product[];
  loading: boolean;
  error: boolean;
  refreshProducts: () => void;
}

const useProducts = (): UseProductsResult => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const location = useLocation();

  const fetchProducts = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(`http://localhost:3001/productos?_=${new Date().getTime()}`);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data: Product[] = await response.json();
      // Ensure 'active' property is initialized to true if it doesn't exist
      setProducts(data.map(p => ({ ...p, active: p.active !== undefined ? p.active : true })));
    } catch (e) {
      console.error("Error fetching products:", e);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [location.pathname]); // Re-fetch when the path changes, to ensure data is fresh

  return {
    products,
    loading,
    error,
    refreshProducts: fetchProducts, // Allow components to manually refresh data
  };
};

export default useProducts; 