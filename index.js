const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/products', (req, res) => {
  res.json({
    name: 'Product 1',
    price: '$10'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
