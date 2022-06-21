const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || 'localhost';

const app = express();

const publicPath = path.resolve(__dirname, './public');
app.use( express.static(publicPath));

app.listen(PORT, () => {
    console.log('Servidor corriendo en el puerto 4000');
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/home.html'));
});