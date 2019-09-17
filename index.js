const express = require('express');
const app = express(); // creo una aplicacion Express

app.get('/', (req, res) => {
    res.send({ hola: 'vo'});
});

const PORT = process.env.PORT || 5000;
app.listen(PORT);