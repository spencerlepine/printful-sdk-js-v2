// Usage: npm run start ./createFile.js
// Requires: Set environment variables in a .env file (see README)
// Tip: Use a package like 'dotenv' to automatically load environment variables.
// Example: PRINTFUL_API_TOKEN, STORE_ID, FILE_URL
// Docs: https://spencerlepine.github.io/printful-sdk-js-v2/classes/FilesV2Service.html#addFile

import { PrintfulClient } from 'printful-sdk-js-v2';
import * as path from 'path';

const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>', // Use your API token or dotenv
});

const STORE_ID = '<STORE_ID>'; // Your Printful store ID
const FILE_URL = '<FILE_URL>'; // Public PNG file URL

/**
 * Uploads a file to Printful and prints the uploaded file ID and details.
 */
(async () => {
  try {
    // Ensure the file path is a public URL
    if (!FILE_URL.startsWith('http://') && !FILE_URL.startsWith('https://')) {
      throw new Error('Printful API requires a public URL for file upload. Please provide a valid URL.');
    }

    // Upload the file to Printful
    const uploadResponse = await printful.filesV2.addFile(
      {
        url: FILE_URL,
        filename: path.basename(FILE_URL),
      },
      STORE_ID
    );

    const fileData = uploadResponse?.data;
    if (!fileData?.id) {
      console.error('File upload failed:', uploadResponse);
      return;
    }

    // Print the uploaded file ID and details
    console.log('Uploaded file ID:', fileData.id);
    console.log('File details:', fileData);

    // Optionally, print the full response for debugging
    // console.log('Full upload response:', JSON.stringify(uploadResponse, null, 2));
  } catch (err) {
    console.error('Error uploading file:', err);
  }
})();

// Example:
// Uploaded file ID: 818783518
// File details: {
//   id: 818783518,
//   url: 'https://xkamgjyazjufvmpoorzy.supabase.co/storage/v1/object/public/product-images//sticker_2.png',
//   hash: '63a4a96a5bd9de87e4c9bab3777c9f8b',
//   filename: 'sticker_2.png',
//   mime_type: 'image/png',
//   size: 1703202,
//   width: 1024,
//   height: 1024,
//   dpi: 72,
//   status: 'ok',
//   created: '2025-04-16T11:41:35Z',
//   thumbnail_url: 'https://files.cdn.printful.com/files/63a/63a4a96a5bd9de87e4c9bab3777c9f8b_thumb.png',
//   preview_url: 'https://files.cdn.printful.com/files/63a/63a4a96a5bd9de87e4c9bab3777c9f8b_preview.png',
//   visible: true,
//   is_temporary: false,
//   _links: { self: { href: 'https://api.printful.com/v2/files/818783518' } }
// }

// Full upload response: {
//   "data": {
//     "id": 818783518,
//     "url": "https://xkamgjyazjufvmpoorzy.supabase.co/storage/v1/object/public/product-images//sticker_2.png",
//     "hash": "63a4a96a5bd9de87e4c9bab3777c9f8b",
//     "filename": "sticker_2.png",
//     "mime_type": "image/png",
//     "size": 1703202,
//     "width": 1024,
//     "height": 1024,
//     "dpi": 72,
//     "status": "ok",
//     "created": "2025-04-16T11:41:35Z",
//     "thumbnail_url": "https://files.cdn.printful.com/files/63a/63a4a96a5bd9de87e4c9bab3777c9f8b_thumb.png",
//     "preview_url": "https://files.cdn.printful.com/files/63a/63a4a96a5bd9de87e4c9bab3777c9f8b_preview.png",
//     "visible": true,
//     "is_temporary": false,
//     "_links": {
//       "self": {
//         "href": "https://api.printful.com/v2/files/818783518"
//       }
//     }
//   },
//   "extra": []
// }
