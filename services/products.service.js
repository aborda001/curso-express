const faker = require('faker');

class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
  }

  async generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.imageUrl(),
      });
    }
  }

  async create(data) {
    const { name, price, image } = data;
    const newProduct = {
      id: faker.datatype.uuid(),
      name,
      price,
      image,
    };

    this.products.push(newProduct);
    return newProduct;
  }

  async find() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.products);
      }, 5000);
    });
  }

  async findOne(id) {
    return this.products.find((product) => product.id === id);
  }

  async update(id, chnages) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index === -1) {
      throw new Error('Product not found');
    }

    const product = this.products[index];

    this.products[index] = {
      ...product,
      ...chnages,
    };
    return this.products[index];
  }

  async delete(id) {
    const index = this.products.findIndex((product) => product.id === id);

    if (index === -1) {
      throw new Error('Product not found');
    }

    this.products.splice(index, 1);

    return {
      id,
    };
  }
}

module.exports = ProductsService;
