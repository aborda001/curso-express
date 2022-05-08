const express = require('express');

const ProductsService = require('../services/products.service');

const router = express.Router();
const service = new ProductsService();

router.get('/', (req, res) => {
  const products = service.find();
  res.json(products);
});

router.get('/filter', (req, res) => {
  res.send('Filter products');
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const product = service.findOne(id);

  if (!product) {
    res.status(404).json({ message: 'Product not found' });
  }

  res.json(product);
});

router.post('/', (req, res) => {
  const body = req.body;

  const product = service.create(body);

  res.status(201).json({
    message: 'Product created',
    product,
  });
});

router.patch('/:id', (req, res) => {
  const { id } = req.params;
  const body = req.body;

  const product = service.update(id, body);

  res.json({
    message: 'Product updated',
    product,
  });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  const deleted = service.delete(id);
  res.json({
    message: 'Product deleted',
    deleted,
  });

});

module.exports = router;
