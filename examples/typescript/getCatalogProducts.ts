// Usage: npm run start ./getCatalogProducts.js
// Requires: Set environment variables in a .env file (see README)
// Tip: Use a package like 'dotenv' to automatically load environment variables.
// Example: PRINTFUL_API_TOKEN
// Docs: https://spencerlepine.github.io/printful-sdk-js-v2/classes/CatalogV2Service.html#getProducts

import { PrintfulClient } from 'printful-sdk-js-v2';

// Replace with your API token or use dotenv
const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>', // Use your API token or dotenv
});

/**
 * Lists Printful catalog products with names and IDs.
 *
 * Usage:
 *   1. Replace the TOKEN above with your actual Printful API token.
 *   2. Run: tsc && node getCatalogProducts.js
 */
(async () => {
  try {
    const response = await printful.catalogV2.getProducts();
    // Optionally, print the full response for debugging
    // console.log('Full catalog products response:', JSON.stringify(response, null, 2));
    if (!response?.data?.length) {
      console.log('No catalog products found.');
      return;
    }
    response.data.forEach((product: { name: string; id: number }) => {
      console.log(`${product.name} (ID: ${product.id})`);
    });
  } catch (err) {
    console.error('Error fetching catalog products:', err);
  }
})();

//Example Output:
// Enhanced Matte Paper Poster (in) (ID: 1)
// Enhanced Matte Paper Framed Poster (in) (ID: 2)
// Canvas (in) (ID: 3)
// Unisex Basic Softstyle T-Shirt | Gildan 64000 (ID: 12)
// White Glossy Mug (ID: 19)
// Unisex Lightweight T-Shirt | Gildan 980 (ID: 37)
// Men's Long Sleeve Shirt | Gildan 2400 (ID: 57)
// Unisex Staple T-Shirt | Bella + Canvas 3001 (ID: 71)
// Snapback | Otto Cap 125-978 (ID: 77)
// Knit Beanie | Otto Cap 82-480 (ID: 81)
// All-Over Print Basic Pillow (ID: 83)
// All-Over Print Tote Bag (ID: 84)
// All-Over Print Basic Pillow Case (ID: 89)
// Flat Bill Cap | Yupoong 6007 (ID: 91)
// 5 Panel Cap | Yupoong 7005 (ID: 92)
// Pom-Pom Knit Cap | Sportsman SP15 (ID: 93)
// Classic Snapback | Yupoong 6089M (ID: 99)
// 5 Panel Trucker Cap | Yupoong 6006 (ID: 100)
// Men's Fitted T-Shirt | Next Level 3600 (ID: 108)
// Men's Fitted Long Sleeve Shirt | Next Level 3601 (ID: 116)

// Full catalog products response (truncated for brevity):
// {
//   "data": [
//     {
//       "id": 1,
//       "type": "POSTER",
//       "main_category_id": 55,
//       "name": "Enhanced Matte Paper Poster (in)",
//       "brand": null,
//       "model": "",
//       "image": "[https://files.cdn.printful.com/products/1/product_1613463122.jpg",](https://files.cdn.printful.com/products/1/product_1613463122.jpg",)
//       "variant_count": 16,
//       "is_discontinued": false,
//       "description": "Museum-quality posters made on thick matte paper...",
//       "sizes": [
//         "18″×24″",
//         "24″×36″",
//         "12″×16″",
//         "44″×44″",
//         "12″×18″",
//         // ...truncated for brevity...
//         "A0 (33.1″×46.8″)",
//         "27″×40″"
//       ],
//       "colors": [
//         { "name": "Black", "value": "#0b0b0b" },
//         { "name": "Heavy Metal", "value": "#454641" },
//         { "name": "White", "value": "#ffffff" }
//       ],
//       "techniques": [
//         { "key": "dtg", "display_name": "DTG printing", "is_default": true },
//         { "key": "embroidery", "display_name": "Embroidery", "is_default": false }
//       ],
//       "placements": [
//         {
//           "placement": "embroidery_chest_left",
//           "technique": "embroidery",
//           "layers": [
//             { "type": "file", "layer_options": [] }
//           ],
//           "placement_options": [],
//           "conflicting_placements": []
//         },
//         // ...truncated for brevity...
//         {
//           "placement": "mockup",
//           "technique": "dtg",
//           "layers": [
//             { "type": "file", "layer_options": [] }
//           ],
//           "placement_options": [],
//           "conflicting_placements": []
//         }
//       ],
//       "product_options": [
//         {
//           "name": "lifelike",
//           "techniques": ["dtg"],
//           "type": "bool",
//           "values": [true, false]
//         },
//         {
//           "name": "notes",
//           "techniques": ["dtg", "embroidery", "sublimation", "cut-sew", "fabric"],
//           "type": "string",
//           "values": ["A simple note"]
//         }
//         // ...truncated for brevity...
//       ],
//       "_links": {
//         "self": { "href": "[https://api.printful.com/v2/catalog-products/1"](https://api.printful.com/v2/catalog-products/1") },
//         "variants": { "href": "[https://api.printful.com/v2/catalog-products/1/catalog-variants"](https://api.printful.com/v2/catalog-products/1/catalog-variants") },
//         "categories": { "href": "[https://api.printful.com/v2/catalog-products/1/catalog-categories"](https://api.printful.com/v2/catalog-products/1/catalog-categories") },
//         "product_prices": { "href": "[https://api.printful.com/v2/catalog-products/1/prices"](https://api.printful.com/v2/catalog-products/1/prices") },
//         "product_sizes": { "href": "[https://api.printful.com/v2/catalog-products/1/sizes"](https://api.printful.com/v2/catalog-products/1/sizes") },
//         "product_images": { "href": "[https://api.printful.com/v2/catalog-products/1/images"](https://api.printful.com/v2/catalog-products/1/images") },
//         "product_availability": { "href": "[https://api.printful.com/v2/catalog-products/1/availability"](https://api.printful.com/v2/catalog-products/1/availability") }
//       }
//     },
//     {
//       "id": 2,
//       "type": "POSTER",
//       "main_category_id": 55,
//       "name": "Enhanced Matte Paper Framed Poster (in)",
//       // ...truncated for brevity...
//     }
//     // ...more products...
//   ],
//   "paging": { "total": 363, "limit": 20, "offset": 0 },
//   "_links": {
//     "self": { "href": "[https://api.printful.com/v2/catalog-products?limit=20..."](https://api.printful.com/v2/catalog-products?limit=20...") },
//     "next": { "href": "[https://api.printful.com/v2/catalog-products?limit=20...&offset=20"](https://api.printful.com/v2/catalog-products?limit=20...&offset=20") },
//     "first": { "href": "[https://api.printful.com/v2/catalog-products?limit=20..."](https://api.printful.com/v2/catalog-products?limit=20...") },
//     "last": { "href": "[https://api.printful.com/v2/catalog-products?limit=20...&offset=360"](https://api.printful.com/v2/catalog-products?limit=20...&offset=360") }
//   }
// }
