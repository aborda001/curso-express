const productsRouter = require('./products.routes');
const usersRouter = require('./users.routes');
const categoriesRouter = require('./categories.routes');

function routerApi (app) {
  app.use('/products', productsRouter);
  app.use('/users', usersRouter);
  app.use('/categories', categoriesRouter);
}

module.exports = routerApi;
