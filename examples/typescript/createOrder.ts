// tsc && node orderProduct.ts

import { PrintfulClient, CatalogItem } from 'printful-sdk-js-v2';

const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>',
});

(async () => {
  // Docs: https://spencerlepine.github.io/printful-sdk-js-v2/classes/OrdersV2Service.html#createOrder
  const xPfStoreId = undefined;
  const orderDetails = {
    // Add details for gift customization
    customization: {
      gift: {
        subject: 'Your Gift Subject',
        message: 'Your gift message here.',
      },
      // Add details for packing slip customization (optional)
      packing_slip: {
        // Uncomment and fill in details as needed
        // email: 'customer.service@example.com',
        // phone: '+1234567890',
        // message: 'A custom packing slip message.',
        // logo_url: 'https://example.com/logo.png',
        // store_name: 'My Custom Store Name',
        // custom_order_id: 'CUSTOM-ORDER-123',
      },
    },
    // Set your external order id (optional)
    external_id: 'EXT-ORDER-ID-123',

    // Add your catalog items here
    order_items: [
      {
        source: CatalogItem.source.CATALOG,
        catalog_variant_id: 4011, // Replace with your catalog variant ID
        quantity: 1,
        // Additional item properties (optional)
        // retail_price: '10.00',
        // name: 'Custom Item Name',
        placements: [
          {
            "placement": "front",
            "technique": "dtg",
            "layers": [
                {
                    "type": "file",
                    "url": "https://www.printful.com/static/images/layout/printful-logo.png"
                }
            ]
          }
        ],
        // product_options: [...productOptions], // Define product options
      },
      // Add more catalog items as needed
    ],

    // Recipient address information
    recipient: {
      name: 'John Doe',
      address1: '711 Third Avenue, 4th Floor',
      city: 'New York City',
      state_code: 'NY', // Replace with your state code
      country_code: 'US', // Replace with your country code
      zip: '10017',
    },

    // Retail costs
    retail_costs: {
      currency: 'USD',
      // Uncomment and set values as needed
      // discount: '5.00',
      // shipping: '2.00',
      // tax: '1.00',
    },

    // Shipping information (optional)
    shipping: 'standard',
  };

  const response = await printful.ordersV2.createOrder(xPfStoreId, orderDetails);
  // Expected Response:
  // {
  //   "data": {
  //     "id": 123,
  //     "external_id": "4235234213",
  //     "store_id": 10,
  //     "shipping": "STANDARD",
  //     "status": "draft",
  //     "created_at": "2023-04-05T06:07:08Z",
  //     "updated_at": "2023-04-05T06:07:08Z",
  //     "recipient": {
  //       "name": "John Smith",
  //       "company": "John Smith Inc",
  //       "address1": "19749 Dearborn St",
  //       "address2": "string",
  //       "city": "Chatsworth",
  //       "state_code": "CA",
  //       "state_name": "California",
  //       "country_code": "US",
  //       "country_name": "United States",
  //       "zip": "91311",
  //       "phone": "2312322334",
  //       "email": "firstname.secondname@domain.com",
  //       "tax_number": "123.456.789-10"
  //     },
  //     "costs": {
  //       "calculation_status": "done",
  //       "currency": "USD",
  //       "subtotal": "14.95",
  //       "discount": "1.79",
  //       "shipping": "4.79",
  //       "digitization": "3.95",
  //       "additional_fee": "0.00",
  //       "fulfillment_fee": "0.00",
  //       "retail_delivery_fee": "0.00",
  //       "vat": "4.60",
  //       "tax": "0.00",
  //       "total": "26.50"
  //     },
  //     "retail_costs": {
  //       "calculation_status": "done",
  //       "currency": "EUR",
  //       "subtotal": "26.55",
  //       "discount": "0.00",
  //       "shipping": "4.79",
  //       "vat": "0.00",
  //       "tax": "0.00",
  //       "total": "31.34"
  //     },
  //     "order_items": [
  //       {
  //         "id": 1234,
  //         "type": "order_item",
  //         "source": "catalog",
  //         "catalog_variant_id": 4011,
  //         "external_id": "123_abc",
  //         "quantity": 1,
  //         "name": "Custom name",
  //         "price": "8.00",
  //         "retail_price": "10.00",
  //         "currency": "EUR",
  //         "retail_currency": "USD",
  //         "_links": {
  //           "self": {
  //             "href": "/v2/orders/123/items/123"
  //           }
  //         }
  //       }
  //     ],
  //     "customization": {
  //       "gift": {
  //         "subject": "To John",
  //         "message": "Happy birthday!"
  //       },
  //       "packing_slip": {
  //         "email": "test@example.com",
  //         "phone": "+48000000000",
  //         "message": "This is a message",
  //         "logo_url": "https://example.com/image.jpg",
  //         "store_name": "A store",
  //         "custom_order_id": "11235813"
  //       }
  //     }
  //   }
  // }
})();
