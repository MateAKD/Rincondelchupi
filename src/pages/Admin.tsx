import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Product, getProducts, saveProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Admin = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const authorized = localStorage.getItem('admin-authorized');
    if (authorized !== 'true') {
      const pass = prompt('Ingrese la contraseña de administrador');
      if (pass === 'admin') {
        localStorage.setItem('admin-authorized', 'true');
      } else {
        navigate('/');
        return;
      }
    }
    setProducts(getProducts());
  }, [navigate]);

  const handleChange = (index: number, field: keyof Product, value: string) => {
    setProducts(prev => {
      const updated = [...prev];
      if (field === 'price') {
        updated[index][field] = parseFloat(value) || 0;
      } else {
        (updated[index] as any)[field] = value;
      }
      return updated;
    });
  };

  const handleSave = () => {
    saveProducts(products);
    alert('Productos guardados');
  };

  return (
    <div className="min-h-screen bg-black/95 text-white flex flex-col">
      <Navbar isMenuOpen={false} setIsMenuOpen={() => {}} scrollToSection={() => {}} handleWhatsAppClick={() => {}} />
      <div className="container-custom pt-20 flex-1">
        <h1 className="text-3xl font-bold text-golden mb-4">Administrar Productos</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead>
              <tr>
                <th className="p-2 border-b">Nombre</th>
                <th className="p-2 border-b">Precio</th>
                <th className="p-2 border-b">Imagen</th>
                <th className="p-2 border-b">Categoría</th>
              </tr>
            </thead>
            <tbody>
              {products.map((p, idx) => (
                <tr key={p.id}>
                  <td className="p-2 border-b">
                    <input
                      className="w-full bg-transparent border border-golden/30 p-1"
                      value={p.name}
                      onChange={(e) => handleChange(idx, 'name', e.target.value)}
                    />
                  </td>
                  <td className="p-2 border-b">
                    <input
                      type="number"
                      className="w-full bg-transparent border border-golden/30 p-1"
                      value={p.price}
                      onChange={(e) => handleChange(idx, 'price', e.target.value)}
                    />
                  </td>
                  <td className="p-2 border-b">
                    <input
                      className="w-full bg-transparent border border-golden/30 p-1"
                      value={p.image || ''}
                      onChange={(e) => handleChange(idx, 'image', e.target.value)}
                    />
                  </td>
                  <td className="p-2 border-b">
                    <input
                      className="w-full bg-transparent border border-golden/30 p-1"
                      value={p.category}
                      onChange={(e) => handleChange(idx, 'category', e.target.value)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Button onClick={handleSave} className="mt-4 bg-golden text-black hover:bg-golden/90">
          Guardar Cambios
        </Button>
      </div>
      <Footer />
    </div>
  );
};

export default Admin;
