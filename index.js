class ProductManager {
    constructor() {
      this.products = [];
      this.lastProductId = 0;
    }
  
    addProduct(product) {

      const {title, description, price, thumbnail, code, stock} = product;

      if (!title || !description || !price || !thumbnail || !code || !stock) {
        throw new Error("All fields are required")
      }
  
      const existingProduct = this.products.find(product => product.code === code);
      if (existingProduct) {
        throw new Error('A product with the same code already exists');
      }
  
      const newProduct = {
        id: ++this.lastProductId,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);

      return {
        msg: "Product created",
        product: newProduct
      };
    }

    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
      const product = this.products.find(product => product.id === id);
      if (product) {
        return {
          msg: "Product found",
          product
        };
      } else {
        throw new Error('Not found');
      }
    }
  }  

  export default ProductManager;