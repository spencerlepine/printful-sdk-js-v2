// tsc && node getCatalogVariants.ts
// Example: List variants for a given Printful catalog product
// Requires: Set environment variables in a .env file (see README)
// Tip: Use a package like 'dotenv' to automatically load environment variables.
// Example: PRINTFUL_API_TOKEN, CATALOG_PRODUCT_ID
// Docs: https://spencerlepine.github.io/printful-sdk-js-v2/classes/CatalogV2Service.html#getProductVariantsById
// Usage: npm run start ./getCatalogVariants.js

import { PrintfulClient } from 'printful-sdk-js-v2';

const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>', // Use your API token or dotenv
});

const CATALOG_PRODUCT_ID = 358; // Replace with your product ID (e.g., Kiss-Cut Sticker)

/**
 * List all variants for a given Printful catalog product.
 *
 * Usage: npm run start ./getCatalogVariants.js
 */
(async () => {
  try {
    // Fetch the variants for the product
    const response = await printful.catalogV2.getProductVariantsById(CATALOG_PRODUCT_ID);
    // Optionally, print the full response for debugging
    // console.log('Full catalog variants response:', JSON.stringify(response, null, 2));
    if (!response?.data?.length) {
      console.log('No variants found for this product.');
      return;
    }
    response.data.forEach((variant: { id: number; name: string; size?: string; color?: string }) => {
      // Show variant id, name, size, color if available
      const details = [variant.name, variant.size ? `Size: ${variant.size}` : '', variant.color ? `Color: ${variant.color}` : ''].filter(Boolean).join(' | ');
      console.log(`Variant ID: ${variant.id}${details ? ' | ' + details : ''}`);
    });
  } catch (err) {
    console.error('Error fetching catalog variants:', err);
  }
})();

// Example Output:

// Variant ID: 10163 | Kiss Cut Stickers (3″×3″in) | Size: 3″×3″ | Color: White
// Variant ID: 10164 | Kiss Cut Stickers (4″×4″in) | Size: 4″×4″ | Color: White
// Variant ID: 10165 | Kiss Cut Stickers (5.5″×5.5″in) | Size: 5.5″×5.5″ | Color: White
// Variant ID: 16362 | Kiss Cut Stickers (White / 15″×3.75″) | Size: 15″×3.75″ | Color: White

// Full catalog variants response: {
//   "data": [
//     {
//       "id": 10163,
//       "catalog_product_id": 358,
//       "name": "Kiss Cut Stickers (3″×3″in)",
//       "size": "3″×3″",
//       "color": "White",
//       "color_code": "#ffffff",
//       "color_code2": null,
//       "image": "https://files.cdn.printful.com/products/358/10163_1553083889.jpg",
//       "_links": {
//         "self": {
//           "href": "https://api.printful.com/v2/catalog-variants/10163"
//         },
//         "product_details": {
//           "href": "https://api.printful.com/v2/catalog-products/358"
//         },
//         "product_variants": {
//           "href": "https://api.printful.com/v2/catalog-products/358/catalog-variants"
//         },
//         "variant_prices": {
//           "href": "https://api.printful.com/v2/catalog-variants/10163/prices"
//         },
//         "variant_images": {
//           "href": "https://api.printful.com/v2/catalog-variants/10163/images"
//         },
//         "variant_availability": {
//           "href": "https://api.printful.com/v2/catalog-variants/10163/availability"
//         }
//       }
//     },
//     {
//       "id": 10164,
//       "catalog_product_id": 358,
//       "name": "Kiss Cut Stickers (4″×4″in)",
//       "size": "4″×4″",
//       "color": "White",
//       "color_code": "#ffffff",
//       "color_code2": null,
//       "image": "https://files.cdn.printful.com/products/358/10164_1553083894.jpg",
//       "_links": {
//         "self": {
//           "href": "https://api.printful.com/v2/catalog-variants/10164"
//         },
//         "product_details": {
//           "href": "https://api.printful.com/v2/catalog-products/358"
//         },
//         "product_variants": {
//           "href": "https://api.printful.com/v2/catalog-products/358/catalog-variants"
//         },
//         "variant_prices": {
//           "href": "https://api.printful.com/v2/catalog-variants/10164/prices"
//         },
//         "variant_images": {
//           "href": "https://api.printful.com/v2/catalog-variants/10164/images"
//         },
//         "variant_availability": {
//           "href": "https://api.printful.com/v2/catalog-variants/10164/availability"
//         }
//       }
//     },
//     {
//       "id": 10165,
//       "catalog_product_id": 358,
//       "name": "Kiss Cut Stickers (5.5″×5.5″in)",
//       "size": "5.5″×5.5″",
//       "color": "White",
//       "color_code": "#ffffff",
//       "color_code2": null,
//       "image": "https://files.cdn.printful.com/products/358/10165_1553083897.jpg",
//       "_links": {
//         "self": {
//           "href": "https://api.printful.com/v2/catalog-variants/10165"
//         },
//         "product_details": {
//           "href": "https://api.printful.com/v2/catalog-products/358"
//         },
//         "product_variants": {
//           "href": "https://api.printful.com/v2/catalog-products/358/catalog-variants"
//         },
//         "variant_prices": {
//           "href": "https://api.printful.com/v2/catalog-variants/10165/prices"
//         },
//         "variant_images": {
//           "href": "https://api.printful.com/v2/catalog-variants/10165/images"
//         },
//         "variant_availability": {
//           "href": "https://api.printful.com/v2/catalog-variants/10165/availability"
//         }
//       }
//     },
//     {
//       "id": 16362,
//       "catalog_product_id": 358,
//       "name": "Kiss Cut Stickers (White / 15″×3.75″)",
//       "size": "15″×3.75″",
//       "color": "White",
//       "color_code": "#ffffff",
//       "color_code2": null,
//       "image": "https://files.cdn.printful.com/products/358/16362_1671002231.jpg",
//       "_links": {
//         "self": {
//           "href": "https://api.printful.com/v2/catalog-variants/16362"
//         },
//         "product_details": {
//           "href": "https://api.printful.com/v2/catalog-products/358"
//         },
//         "product_variants": {
//           "href": "https://api.printful.com/v2/catalog-products/358/catalog-variants"
//         },
//         "variant_prices": {
//           "href": "https://api.printful.com/v2/catalog-variants/16362/prices"
//         },
//         "variant_images": {
//           "href": "https://api.printful.com/v2/catalog-variants/16362/images"
//         },
//         "variant_availability": {
//           "href": "https://api.printful.com/v2/catalog-variants/16362/availability"
//         }
//       }
//     }
//   ],
//   "extra": [],
//   "paging": {
//     "total": 4,
//     "limit": 20,
//     "offset": 0
//   },
//   "_links": {
//     "self": {
//       "href": "https://api.printful.com/v2/catalog-products/358/catalog-variants?limit=20"
//     },
//     "product_details": {
//       "href": "https://api.printful.com/v2/catalog-products/358"
//     }
//   }
// }
