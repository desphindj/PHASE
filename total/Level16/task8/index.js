const express = require('express');
const app = express();
const port = 3000;


app.use(express.json());


let products = [
  { id: 1, name: 'Laptop', price: 999, description: 'High performance laptop' },
  { id: 2, name: 'Phone', price: 499, description: 'Latest smartphone' }
];


app.get('/products', (req, res) => {
  res.status(200).json(products);
});


app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) 
    return res.status(404).json({ message: 'Product not found' });
  res.status(200).json(product);
});


app.post('/products', (req, res) => {
  const { name, price, description } = req.body;
  const newProduct = {
    id: products.length + 1,
    name,
    price,
    description
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});


app.put('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (!product) return res.status(404).json({ message: 'Product not found' });

  const { name, price, description } = req.body;
  product.name = name || product.name;
  product.price = price || product.price;
  product.description = description || product.description;

  res.status(200).json(product);
});

app.delete('/products/:id', (req, res) => {
  const index = products.findIndex(p => p.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ message: 'Product not found' });

  products.splice(index, 1);
  res.status(204).send();
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
