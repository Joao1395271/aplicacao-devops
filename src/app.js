const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;

// Requisito 5: Endpoint principal servindo o HTML
app.get('/', (req, res) => {
    // Como o app.js está em /src e o index em /src/views, usamos path.join
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

// Requisito 6: Endpoint de integrantes (JSON)
const data = {
    'integrantes': [
        { 'nome': 'João' },
        { 'nome': 'Lorenzo' },
        { 'nome': 'Itallo' }
    ]
};

app.get('/integrantes', (req, res) => {
    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Servidor a rodar em http://localhost:${PORT}`);
});
