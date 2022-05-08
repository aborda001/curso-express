const express = require('express');
const faker = require('faker');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/products', (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = size || 10;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price(), 10),
      image: faker.image.imageUrl(),
    });
  }
  res.json(products);
});

app.get('/products/filter', (req, res) => {
  res.send('Filter products');
});


app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Product 1',
    price: '$1.99',
  });
});


app.get('/users', (req, res) => {
  const { limit, offset } = req.query;
  if (limit && offset) {
    res.json({
      limit,
      offset,
    });
  } else {
    res.send('No hay parametros');
  }
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
    name: 'Product 1',
    price: '$1.99',
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
