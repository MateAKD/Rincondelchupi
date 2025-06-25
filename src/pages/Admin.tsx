import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { useToast } from "@/hooks/use-toast";
import { categories as storeCategories } from "../components/Store/StoreContent";
import { Eye, EyeOff, Edit, Check, X, Filter } from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogFooter } from "@/components/ui/dialog";

const Admin = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [category, setCategory] = useState("Todos");
  const [filterStatus, setFilterStatus] = useState("active");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editPrice, setEditPrice] = useState("");
  const { toast } = useToast();
  const [loading, setLoading] = useState(true);
  const [showConfirm, setShowConfirm] = useState(false);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3001/productos')
      .then(res => res.json())
      .then(data => {
        // Inicializa el estado 'active' en true si no existe
        setProducts(data.map((p: any) => ({ ...p, active: p.active !== undefined ? p.active : true })));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Resumen
  const total = products.length;
  const activos = products.filter(p => p.active).length;
  const inactivos = products.filter(p => !p.active).length;
  const sinFoto = products.filter(p => !p.image).length;

  // Filtros
  const filtered = products.filter(p => {
    const byCategory = category === "Todos" || p.category === category;
    const byStatus = filterStatus === "active" ? p.active : !p.active;
    return byCategory && byStatus;
  });

  // Acciones
  const handleToggleActive = (id: string) => {
    setProducts(prev => prev.map(p => p.id === id ? { ...p, active: !p.active } : p));
    const prod = products.find(p => p.id === id);
    toast({
      title: prod?.active ? "Producto suspendido" : "Producto reactivado",
      description: prod?.name,
    });
  };

  const handleEditPrice = (id: string, price: number) => {
    setEditingId(id);
    setEditPrice(price.toString());
  };

  const handleSavePrice = (id: string) => {
    const newPrice = parseInt(editPrice);
    if (isNaN(newPrice) || newPrice < 100) {
      toast({ title: "Precio inválido", description: "El precio debe ser mayor a 100", variant: "destructive" });
      return;
    }
    setProducts(prev => prev.map(p => p.id === id ? { ...p, price: newPrice } : p));
    setEditingId(null);
    toast({ title: "Precio actualizado", description: `Nuevo precio: $${newPrice}` });
  };

  const handleSaveAll = () => {
    setShowConfirm(true);
  };

  const confirmSave = async () => {
    setSaving(true);
    try {
      await fetch('http://localhost:3001/productos', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(products)
      });
      toast({ title: 'Cambios guardados', description: 'Los productos se actualizaron correctamente.' });
    } catch (e) {
      toast({ title: 'Error al guardar', description: 'No se pudieron guardar los cambios.', variant: 'destructive' });
    }
    setSaving(false);
    setShowConfirm(false);
  };

  // Render
  return (
    <div className="min-h-screen bg-black/95 text-white p-2 md:p-8 relative">
      {/* Botón guardar cambios (mobile flotante, desktop arriba) */}
      <div className="fixed bottom-4 right-4 z-50 md:static md:mb-4 md:flex md:justify-end">
        <Button
          onClick={handleSaveAll}
          className="bg-golden text-black font-bold shadow-lg hover:bg-golden/90 px-6 py-2"
          disabled={saving}
        >
          {saving ? 'Guardando...' : 'Guardar cambios'}
        </Button>
      </div>

      {/* Pop-up de confirmación */}
      <Dialog open={showConfirm} onOpenChange={setShowConfirm}>
        <DialogContent className="bg-black/90 border-golden/30">
          <DialogHeader>¿Confirmar guardado?</DialogHeader>
          <p className="text-golden/80 mb-4">¿Estás seguro de guardar todos los cambios realizados en los productos? Esto impactará en la tienda online.</p>
          <DialogFooter>
            <Button onClick={() => setShowConfirm(false)} variant="outline" className="border-golden/50 text-golden hover:bg-golden/10">Cancelar</Button>
            <Button onClick={confirmSave} className="bg-golden text-black" disabled={saving}>{saving ? 'Guardando...' : 'Confirmar'}</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Resumen cabecera */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <Card className="flex-1 bg-black/40 border-golden/20">
          <CardContent className="flex flex-col items-center justify-center p-4">
            <span className="text-golden text-2xl font-bold">{activos}</span>
            <span className="text-sm text-golden/80">Activos</span>
          </CardContent>
        </Card>
        <Card className="flex-1 bg-black/40 border-golden/20">
          <CardContent className="flex flex-col items-center justify-center p-4">
            <span className="text-golden text-2xl font-bold">{inactivos}</span>
            <span className="text-sm text-golden/80">Inactivos</span>
          </CardContent>
        </Card>
        <Card className="flex-1 bg-black/40 border-golden/20">
          <CardContent className="flex flex-col items-center justify-center p-4">
            <span className="text-golden text-2xl font-bold">{sinFoto}</span>
            <span className="text-sm text-golden/80">Sin foto</span>
          </CardContent>
        </Card>
        <Card className="flex-1 bg-black/40 border-golden/20">
          <CardContent className="flex flex-col items-center justify-center p-4">
            <span className="text-golden text-2xl font-bold">{total}</span>
            <span className="text-sm text-golden/80">Total</span>
          </CardContent>
        </Card>
      </div>

      {/* Filtros */}
      <div className="flex flex-col md:flex-row gap-4 mb-6 items-center">
        <Tabs defaultValue={category} className="w-full md:w-auto">
          <div className="overflow-x-auto pb-2 mb-2">
            <TabsList className="bg-black/20 border border-golden/20 justify-start">
              {storeCategories.map((cat) => (
                <TabsTrigger
                  key={cat}
                  value={cat}
                  onClick={() => setCategory(cat)}
                  className="whitespace-nowrap data-[state=active]:bg-golden data-[state=active]:text-black text-golden/80 hover:text-golden transition-colors duration-200 px-4 py-2"
                >
                  {cat}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>
        </Tabs>
        <Tabs defaultValue="active" className="w-full md:w-auto">
          <TabsList className="bg-black/20 border border-golden/20 justify-start">
            <TabsTrigger
              value="active"
              onClick={() => setFilterStatus("active")}
              className="whitespace-nowrap data-[state=active]:bg-golden data-[state=active]:text-black text-golden/80 hover:text-golden transition-colors duration-200 px-4 py-2"
            >
              Activos
            </TabsTrigger>
            <TabsTrigger
              value="inactive"
              onClick={() => setFilterStatus("inactive")}
              className="whitespace-nowrap data-[state=active]:bg-golden data-[state=active]:text-black text-golden/80 hover:text-golden transition-colors duration-200 px-4 py-2"
            >
              Inactivos
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      {/* Tabla de productos */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm bg-black/40 border border-golden/20 rounded-xl">
          <thead>
            <tr className="text-golden/80 text-center">
              <th className="p-2 text-center">Imagen</th>
              <th className="p-2 text-center">Nombre</th>
              <th className="p-2 text-center">Categoría</th>
              <th className="p-2 text-center">Precio</th>
              <th className="p-2 text-center">Estado</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr><td colSpan={5} className="text-center text-gray-400 py-8">Cargando productos...</td></tr>
            ) : filtered.map((p) => (
              <tr key={p.id} className="border-t border-golden/10 hover:bg-golden/5 transition-colors text-center">
                <td className="p-2 align-middle">
                  <img src={p.image || "/lovable-uploads/not-found.png"} alt={p.name} className="w-16 h-16 object-contain rounded bg-neutral-100/5 mx-auto" />
                </td>
                <td className="p-2 text-golden font-semibold max-w-[120px] truncate align-middle">{p.name}</td>
                <td className="p-2 text-white/80 align-middle">{p.category}</td>
                <td className="p-2 align-middle">
                  {editingId === p.id ? (
                    <div className="flex items-center gap-2 justify-center">
                      <Input
                        type="number"
                        value={editPrice}
                        onChange={e => setEditPrice(e.target.value)}
                        className="w-24 bg-black/20 border-golden/30 text-white"
                        min={100}
                      />
                      <Button size="icon" variant="outline" onClick={() => handleSavePrice(p.id)} className="bg-golden text-black hover:bg-golden/90">
                        <Check className="w-4 h-4" />
                      </Button>
                      <Button size="icon" variant="outline" onClick={() => setEditingId(null)} className="border-golden/50 text-golden hover:bg-golden/10">
                        <X className="w-4 h-4" />
                      </Button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 justify-center">
                      <span>${p.price.toLocaleString("es-AR")}</span>
                      <Button size="icon" variant="ghost" onClick={() => handleEditPrice(p.id, p.price)}>
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  )}
                </td>
                <td className="p-2 align-middle">
                  <div className="flex items-center justify-center gap-2">
                    <Switch checked={p.active} onCheckedChange={() => handleToggleActive(p.id)} />
                    <span className={`ml-2 text-xs font-bold ${p.active ? "text-green-400" : "text-red-400"}`}>{p.active ? "Activo" : "Inactivo"}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {!loading && filtered.length === 0 && <div className="text-center text-gray-400 py-8">No hay productos para mostrar.</div>}
      </div>
    </div>
  );
};

export default Admin; 