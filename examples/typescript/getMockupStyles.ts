// Usage: npm run start ./getMockupStyles.js
// Requires: Set environment variables in a .env file (see README)
// Tip: Use a package like 'dotenv' to automatically load environment variables.
// Example: PRINTFUL_API_TOKEN, CATALOG_PRODUCT_ID
// Docs: https://spencerlepine.github.io/printful-sdk-js-v2/classes/CatalogV2Service.html#retrieveMockupStylesByProductId

import { PrintfulClient } from 'printful-sdk-js-v2';

const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>', // Use your API token or dotenv
});

const CATALOG_PRODUCT_ID = 358; // Kiss-Cut Sticker

(async () => {
  try {
    // Retrieve mockup styles for the catalog product
    const response = await printful.catalogV2.retrieveMockupStylesByProductId(CATALOG_PRODUCT_ID);
    const placements = response?.data ?? [];

    // Print each style's ID and a descriptive name
    for (const placement of placements) {
      const mockupStyles = placement.mockup_styles ?? [];
      for (const style of mockupStyles) {
        const descriptiveName = `${style.category_name} (${style.view_name})`;
        console.log(`Style ID: ${style.id}, Name: ${descriptiveName}`);
      }
    }

    // Optionally, print the full response for debugging
    // console.log('Full API response:', JSON.stringify(response, null, 2));
  } catch (err) {
    console.error('Error retrieving mockup styles:', err);
  }
})();

// Example Response:
// Style ID: 19028, Name: Valentine's Day (Valentine's Day 2)
// Style ID: 19033, Name: Spring/summer vibes (Spring/Summer)
// Style ID: 19039, Name: Red, white & blue (Red, white & blue)
// Style ID: 19044, Name: Lifestyle 2 (Front)
// Style ID: 19048, Name: Lifestyle 4 (Front)
// Style ID: 19051, Name: Lifestyle 3 (Front)
// ...

// Full API response: {
//   "data": [
//     {
//       "placement": "default",
//       "display_name": "Print file",
//       "technique": "digital",
//       "print_area_width": 3,
//       "print_area_height": 3,
//       "print_area_type": "simple",
//       "dpi": 300,
//       "mockup_styles": [
//         {
//           "id": 19000,
//           "category_name": "Default",
//           "view_name": "Default",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19006,
//           "category_name": "Lifestyle",
//           "view_name": "Lifestyle 1",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19009,
//           "category_name": "Lifestyle",
//           "view_name": "Lifestyle 2",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19012,
//           "category_name": "Lifestyle",
//           "view_name": "Lifestyle 3",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19015,
//           "category_name": "Halloween",
//           "view_name": "Halloween",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19016,
//           "category_name": "Halloween",
//           "view_name": "Halloween 2",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19021,
//           "category_name": "Holiday season",
//           "view_name": "Christmas",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19024,
//           "category_name": "Holiday season",
//           "view_name": "Christmas 2",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19027,
//           "category_name": "Valentine's Day",
//           "view_name": "Valentine's Day",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19028,
//           "category_name": "Valentine's Day",
//           "view_name": "Valentine's Day 2",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19033,
//           "category_name": "Spring/summer vibes",
//           "view_name": "Spring/Summer",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19034,
//           "category_name": "Spring/summer vibes",
//           "view_name": "Spring/Summer 2",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19039,
//           "category_name": "Red, white & blue",
//           "view_name": "Red, white & blue",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19044,
//           "category_name": "Lifestyle 2",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19048,
//           "category_name": "Lifestyle 4",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19051,
//           "category_name": "Lifestyle 3",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19052,
//           "category_name": "Lifestyle 5",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19056,
//           "category_name": "Lifestyle 6",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19060,
//           "category_name": "Lifestyle 7",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10163
//           ]
//         },
//         {
//           "id": 19064,
//           "category_name": "Lifestyle 8",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10163
//           ]
//         }
//       ]
//     },
//     {
//       "placement": "default",
//       "display_name": "Print file",
//       "technique": "digital",
//       "print_area_width": 4,
//       "print_area_height": 4,
//       "print_area_type": "simple",
//       "dpi": 300,
//       "mockup_styles": [
//         {
//           "id": 19001,
//           "category_name": "Default",
//           "view_name": "Default",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19007,
//           "category_name": "Lifestyle",
//           "view_name": "Lifestyle 1",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19010,
//           "category_name": "Lifestyle",
//           "view_name": "Lifestyle 2",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19013,
//           "category_name": "Lifestyle",
//           "view_name": "Lifestyle 3",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19017,
//           "category_name": "Halloween",
//           "view_name": "Halloween",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19018,
//           "category_name": "Halloween",
//           "view_name": "Halloween 2",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19022,
//           "category_name": "Holiday season",
//           "view_name": "Christmas",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19025,
//           "category_name": "Holiday season",
//           "view_name": "Christmas 2",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19029,
//           "category_name": "Valentine's Day",
//           "view_name": "Valentine's Day",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19030,
//           "category_name": "Valentine's Day",
//           "view_name": "Valentine's Day 2",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19035,
//           "category_name": "Spring/summer vibes",
//           "view_name": "Spring/Summer",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19036,
//           "category_name": "Spring/summer vibes",
//           "view_name": "Spring/Summer 2",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19040,
//           "category_name": "Red, white & blue",
//           "view_name": "Red, white & blue",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19045,
//           "category_name": "Lifestyle 2",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19049,
//           "category_name": "Lifestyle 4",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19053,
//           "category_name": "Lifestyle 5",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19057,
//           "category_name": "Lifestyle 6",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19061,
//           "category_name": "Lifestyle 7",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10164
//           ]
//         },
//         {
//           "id": 19065,
//           "category_name": "Lifestyle 8",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10164
//           ]
//         }
//       ]
//     },
//     {
//       "placement": "default",
//       "display_name": "Print file",
//       "technique": "digital",
//       "print_area_width": 5.5,
//       "print_area_height": 5.5,
//       "print_area_type": "simple",
//       "dpi": 300,
//       "mockup_styles": [
//         {
//           "id": 19002,
//           "category_name": "Default",
//           "view_name": "Default",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19008,
//           "category_name": "Lifestyle",
//           "view_name": "Lifestyle 1",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19011,
//           "category_name": "Lifestyle",
//           "view_name": "Lifestyle 2",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19014,
//           "category_name": "Lifestyle",
//           "view_name": "Lifestyle 3",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19019,
//           "category_name": "Halloween",
//           "view_name": "Halloween",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19020,
//           "category_name": "Halloween",
//           "view_name": "Halloween 2",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19023,
//           "category_name": "Holiday season",
//           "view_name": "Christmas",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19026,
//           "category_name": "Holiday season",
//           "view_name": "Christmas 2",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19031,
//           "category_name": "Valentine's Day",
//           "view_name": "Valentine's Day",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19032,
//           "category_name": "Valentine's Day",
//           "view_name": "Valentine's Day 2",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19037,
//           "category_name": "Spring/summer vibes",
//           "view_name": "Spring/Summer",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19038,
//           "category_name": "Spring/summer vibes",
//           "view_name": "Spring/Summer 2",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19041,
//           "category_name": "Red, white & blue",
//           "view_name": "Red, white & blue",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19046,
//           "category_name": "Lifestyle 2",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19050,
//           "category_name": "Lifestyle 4",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19054,
//           "category_name": "Lifestyle 5",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19058,
//           "category_name": "Lifestyle 6",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19062,
//           "category_name": "Lifestyle 7",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10165
//           ]
//         },
//         {
//           "id": 19066,
//           "category_name": "Lifestyle 8",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             10165
//           ]
//         }
//       ]
//     },
//     {
//       "placement": "default",
//       "display_name": "Print file",
//       "technique": "digital",
//       "print_area_width": 15,
//       "print_area_height": 3.75,
//       "print_area_type": "simple",
//       "dpi": 300,
//       "mockup_styles": [
//         {
//           "id": 19042,
//           "category_name": "Default",
//           "view_name": "Default",
//           "restricted_to_variants": [
//             16362
//           ]
//         },
//         {
//           "id": 19047,
//           "category_name": "Lifestyle 2",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             16362
//           ]
//         },
//         {
//           "id": 19055,
//           "category_name": "Lifestyle 5",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             16362
//           ]
//         },
//         {
//           "id": 19059,
//           "category_name": "Lifestyle 6",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             16362
//           ]
//         },
//         {
//           "id": 19063,
//           "category_name": "Lifestyle 7",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             16362
//           ]
//         },
//         {
//           "id": 19067,
//           "category_name": "Lifestyle 8",
//           "view_name": "Front",
//           "restricted_to_variants": [
//             16362
//           ]
//         }
//       ]
//     },
//     {
//       "placement": "default",
//       "display_name": "Print file",
//       "technique": "digital",
//       "print_area_width": 2,
//       "print_area_height": 2,
//       "print_area_type": "simple",
//       "dpi": 300,
//       "mockup_styles": [
//         {
//           "id": 25885,
//           "category_name": "Placeholder",
//           "view_name": "default",
//           "restricted_to_variants": [
//             22522
//           ]
//         }
//       ]
//     },
//     {
//       "placement": "default",
//       "display_name": "Print file",
//       "technique": "digital",
//       "print_area_width": 6,
//       "print_area_height": 6,
//       "print_area_type": "simple",
//       "dpi": 300,
//       "mockup_styles": [
//         {
//           "id": 25886,
//           "category_name": "Placeholder",
//           "view_name": "default",
//           "restricted_to_variants": [
//             22523
//           ]
//         }
//       ]
//     }
//   ],
//   "extra": [],
//   "paging": {
//     "total": 6,
//     "limit": 20,
//     "offset": 0
//   },
//   "_links": {
//     "self": {
//       "href": "https://api.printful.com/v2/catalog-products/358/mockup-styles?selling_region_name=worldwide&limit=10"
//     }
//   }
// }
