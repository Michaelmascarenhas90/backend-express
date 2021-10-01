const express = require('express');
const app = express();

const recipes = [
    { id: 1, name: 'lasanha', price: 40.0, waitTime: 30 },
    { id: 2, name: 'Macarrão a Bolonhesa', price: 35.00, waitTime: 25 },
    { id: 3, name: 'Macarrão com Molho Branco', price: 35.0, waitTime: 25 },
];

app.get('/recipes', function (req, res) {
    res.json(recipes)
});

app.listen(3009, () => {
  console.log('Aplicação ouvindo na porta 3009');
});
