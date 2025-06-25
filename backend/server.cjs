const express = require('express');
const fs = require('fs');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001; // <--- Cambiado acá

app.use(cors());
app.use(express.json());

// Ruta para obtener productos
app.get('/productos', (req, res) => {
  try {
    const data = fs.readFileSync('backend/productos.json', 'utf8');
    res.json(JSON.parse(data));
  } catch (err) {
    res.status(500).json({ error: 'No se pudo leer productos.json' });
  }
});

// Ruta para guardar productos
app.post('/productos', (req, res) => {
  try {
    fs.writeFileSync('backend/productos.json', JSON.stringify(req.body, null, 2));
    res.json({ ok: true });
  } catch (err) {
    res.status(500).json({ error: 'No se pudo guardar productos.json' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor backend escuchando en http://localhost:${PORT}`);
});
