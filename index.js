const express = require("express");
const app = express();

const cors = require("cors");

app.use(cors());

const recipes = [
  { id: 1, name: "lasanha", price: 40.0, waitTime: 30 },
  { id: 2, name: "Macarrão a Bolonhesa", price: 35.0, waitTime: 25 },
  { id: 3, name: "Macarrão com Molho Branco", price: 35.0, waitTime: 25 },
];

const sortRecipes = recipes.sort((a, b) => {
    const x = a.name.toUpperCase();
    const y = b.name.toUpperCase();

    return x == y ? 0 : x > y ? 1 : -1;
});

const drinks = [
  { id: 1, name: "Refrigerante Lata", price: 5.0 },
  { id: 2, name: "Refrigerante 600ml", price: 8.0 },
  { id: 3, name: "Suco 300ml", price: 4.0 },
  { id: 4, name: "Suco 1l", price: 10.0 },
  { id: 5, name: "Cerveja Lata", price: 4.5 },
  { id: 6, name: "Agua Mineral 500 ml", price: 5.0 },
];

const sortDrinks = drinks.sort((a, b) => {
    const x = a.name.toUpperCase();
    const y = b.name.toUpperCase();

    return x == y ? 0 : x > y ? 1 : -1;
})

app.get('/recipes/:id', (req, res) => {
    const { id } = req.params;
    const recipe = recipes.find((r) => r.id === parseInt(id));
    
    if (!recipe) 
        return res.status(404).json({ message: 'receita não encontrada!' });

    res.status(200).json(recipe);
})

app.get("/recipes/sort", function (req, res) {
    res.json(sortRecipes);
})

app.get("/recipes", function (req, res) {
  res.send(recipes);
});

app.get("/drinks/:id", (req, res) => {
    const { id } = req.params;
    const drink = drinks.find((d) => d.id === parseInt(id));

    if(!drink) return res.status(404).json({ message: 'drink não encontrado!' });

    res.status(200).json(drink);
})

app.get("/drinks/sort", (req, res) => {
    res.json(sortDrinks);
})

app.get("/drinks", function (req, res) {
    res.json(drinks)
})

app.listen(3009, () => {
  console.log("Aplicação ouvindo na porta 3009");
});
