const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Servimos los archivos estáticos de la carpeta dist de React
app.use(express.static(path.join(__dirname, 'frontend', 'dist')));

// Capturamos cualquier ruta y devolvemos el index.html de React
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'dist', 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});