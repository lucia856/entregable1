class ProductManager {
    constructor() {
      this.products = [];
      this.lastProductId = 0;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log('All fields are required');
        return;
      }
  
      const existingProduct = this.products.find(product => product.code === code);
      if (existingProduct) {
        console.log('A product with the same code already exists');
        return;
      }
  
      const product = {
        id: ++this.lastProductId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(product);
      console.log('Product added', product);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (product) {
        return product;
      } else {
        console.log('Not found');
      }
    }
  }  

  export default ProductManager;