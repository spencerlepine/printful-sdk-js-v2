// Usage: npm run start ./createMockup.js
// Requires: Set environment variables in a .env file (see README)
// Tip: Use a package like 'dotenv' to automatically load environment variables.
// Example: PRINTFUL_API_TOKEN, STORE_ID, FILE_ID, CATALOG_PRODUCT_ID, CATALOG_VARIANT_ID, MOCKUP_STYLE_ID
// Docs: https://spencerlepine.github.io/printful-sdk-js-v2/classes/MockupGeneratorV2Service.html#createMockupGeneratorTasks

import { PrintfulClient, MockupTaskCreation } from 'printful-sdk-js-v2';

const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>', // Use your API token or dotenv
});

// Replace the following values with your actual Printful data.
const STORE_ID: string = '<STORE_ID>'; // Your Printful store ID f.e. 14045721
const FILE_ID: number = 818783518; // File ID to use in mockup (must be uploaded first)
const CATALOG_PRODUCT_ID: number = 358; // Kiss-Cut Sticker
const CATALOG_VARIANT_ID: number = 10163; // 3x3 Kiss-Cut Sticker
const MOCKUP_STYLE_ID: number = 19000; // Default style
/**
 * Generate a sticker mockup for a given file ID.
 *
 * This script creates a mockup generation task, polls for task completion, and prints the resulting mockup URLs.
 *
 * Usage:
 * 1. Replace the above values with your actual data.
 * 2. Run the script using `tsc && node createMockup.ts`.
 */
(async () => {
  // Prepare the payload for mockup generation
  const payload = {
    format: MockupTaskCreation.format.JPG,
    products: [
      {
        source: 'catalog',
        catalog_product_id: CATALOG_PRODUCT_ID,
        catalog_variant_id: CATALOG_VARIANT_ID,
        mockup_style_ids: [MOCKUP_STYLE_ID],
        placements: [
          {
            placement: 'default',
            technique: 'sticker',
            files: [{ id: FILE_ID, type: 'default' }],
            layers: [
              {
                type: 'file',
                id: FILE_ID,
              },
            ],
          },
        ],
      },
    ],
  };

  try {
    // Create the mockup generation task
    const response = await printful.mockupGeneratorV2.createMockupGeneratorTasks(STORE_ID, payload);
    // Optionally, print the full response for debugging
    // console.log('Full mockup task response:', JSON.stringify(response, null, 2));

    const taskId = Array.isArray(response?.data) && response.data[0]?.id;
    if (!taskId) {
      console.error('No mockup task ID returned', response);
      return;
    }

    // Poll for task completion (max 10 tries, 3s interval)
    for (let i = 0; i < 10; i++) {
      await new Promise(res => setTimeout(res, 3000));
      const poll = (await printful.mockupGeneratorV2.httpRequest.request({
        method: 'GET',
        url: '/v2/mockup-tasks',
        query: {
          id: [String(taskId)],
          limit: 20,
        },
        headers: {
          'X-PF-Store-Id': STORE_ID,
        },
      })) as any;
      const pollData = Array.isArray(poll?.data) ? poll.data : [];
      if (pollData.length > 0 && pollData[0].status === 'completed') {
        const mockupUrls: string[] = [];
        const taskData = pollData[0];
        if (taskData.catalog_variant_mockups) {
          for (const variant of taskData.catalog_variant_mockups) {
            if (variant.mockups) {
              for (const mockup of variant.mockups) {
                if (mockup.mockup_url) {
                  mockupUrls.push(mockup.mockup_url);
                }
              }
            }
          }
        }
        console.log('Mockup URLs:', mockupUrls);
        // Optionally, print the full completed task data
        // console.log('Full completed task:', JSON.stringify(taskData, null, 2));
        return;
      }
    }
    console.error('Mockup task did not complete in time.');
  } catch (err) {
    console.error('Error generating mockup:', err);
  }
})();

// Example:
// Mockup URLs: [
//   'https://printful-upload.s3-accelerate.amazonaws.com/tmp/67fbff50f5ae098b8aaef5b10c7edb21/kiss-cut-stickers-white-3x3-default-6800caef9917e.jpg'
// ]

// Full completed task: {
//   "id": 775035217,
//   "status": "completed",
//   "catalog_variant_mockups": [
//     {
//       "catalog_variant_id": 10163,
//       "mockups": [
//         {
//           "placement": "default",
//           "display_name": "Print file",
//           "technique": "digital",
//           "style_id": 19000,
//           "mockup_url": "https://printful-upload.s3-accelerate.amazonaws.com/tmp/76ffb67a625855eb6a3af60a312cc6a1/kiss-cut-stickers-white-3x3-default-6800cb11eca7d.jpg"
//         }
//       ]
//     }
//   ],
//   "failure_reasons": [],
//   "_links": {
//     "self": {
//       "href": "https://api.printful.com/v2/mockup-tasks?id=775035217"
//     }
//   }
// }
