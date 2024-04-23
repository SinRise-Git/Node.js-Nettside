const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Velkommen til min hjemmeside');
});

app.get('/ja', (req, res) => {
    res.send('Dette er ja siden');
});

app.get('/nei', (req, res) => {
    res.send('Dette er nei siden');
})

app.listen(3000, () => {
    console.log('Serveren kører på http://localhost:3000');
});