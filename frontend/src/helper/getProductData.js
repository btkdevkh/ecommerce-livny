import productsArr from '../data/products'

export function getProductData(id) {
  let productData = productsArr.find(product => product.id === id);

  if (productData == undefined) {
      console.log("Product data does not exist for ID: " + id);
      return undefined;
  }

  return productData;
}
