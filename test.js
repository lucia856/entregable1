import ProductManager from './index.js';

const productManager = new ProductManager();

console.log('Products added', productManager.getProducts());

productManager.addProduct('MacBook Pro', 'Powerful laptop for professionals', 1999.99, 'macbook.jpg', 'MBP001', 10);

console.log('Products added:', productManager.getProducts());

productManager.addProduct('MacBook Pro', 'Powerful laptop for professionals', 1999.99, 'macbook.jpg', 'MBP001', 10);

const product1 = productManager.getProductById(1);
console.log('Product found by ID 1:', product1);

const product2 = productManager.getProductById(2);
console.log('Product found by ID 2:', product2);