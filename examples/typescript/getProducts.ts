// tsc && node getProducts.js

import { PrintfulClient, Product } from 'printful-sdk-js-v2';

const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>',
});

(async () => {
  const response = await printful.catalogV2.getProducts();
  const products: Product[] = response.data;
  console.log(products);
  // Expected response:
  // [
  //   {
  //     id: 83,
  //     type: 'CUT-SEW',
  //     name: 'All-Over Print Basic Pillow',
  //     brand: null,
  //     model: null,
  //     image: 'https://files.cdn.printful.com/o/products/83/product_1573737219.jpg',
  //     variant_count: 3,
  //     is_discontinued: false,
  //     description: "A strategically placed accent can bring the whole room to life, and this pillow is just what you need to do that. What's more, the soft, machine-washable case with the shape-retaining insert is a joy to have long afternoon naps on.\n"
  //     sizes: [ '18″×18″', '20″×12″', '22″×22″' ],
  //     colors: [],
  //     techniques: [ [Object] ],
  //     placements: [ [Object], [Object], [Object] ],
  //     product_options: [ [Object], [Object] ]
  //   },
  //   ...
  // ]
})();
