import ProductManager from './index.js';

const productManager = new ProductManager();

console.log('Products added', productManager.getProducts());

const newProduct1 = {
    title: "MacBook Pro",
    description: "Powerful laptop for professionals",
    price: 1999.99,
    thumbnail: "macbook.jpg",
    code: "MBP001",
    stock: 10
}

const newProduct2 = {
    title: "MacBook Pro",
    description: "Powerful laptop for professionals",
    price: 1999.99,
    thumbnail: "macbook.jpg",
    code: "MBP002",
    stock: 10
}

console.log(productManager.addProduct(newProduct1));

//Acá testeamos que salte el error de code repetido
// console.log(productManager.addProduct(newProduct1));

console.log(productManager.addProduct(newProduct2));

console.log("Prodducts added:", productManager.getProducts());

const product1 = productManager.getProductById(1);
console.log('Product found by ID 1:', product1);