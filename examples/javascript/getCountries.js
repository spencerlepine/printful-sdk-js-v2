// npm install printful-sdk-js-v2 && node getCountries.js

const { PrintfulClient } = require('printful-sdk-js-v2');

const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>',
});

(async () => {
  const response = await printful.countriesV2.getCountries();
  const countries = response.data;
  console.log(countries);
})();
