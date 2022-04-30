const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/products', (req, res) => {
  res.json([
    {
      name: 'Product 1',
      price: '$1.99'
    },
    {
      name: 'Product 2',
      price: '$2.99'
    }
  ]);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id ,
    name: 'Product 1',
    price: '$1.99'
  });
});

app.get('/categories/:categoryId/products/:productId', (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
    name: 'Product 1',
    price: '$1.99'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
