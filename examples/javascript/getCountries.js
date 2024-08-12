// node getCountries.js

const { PrintfulClient } = require('printful-sdk-js-v2');

const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>',
});

(async () => {
  const response = await printful.countriesV2.getCountries();
  const countries = response.data;
  console.log(countries);
  // Expected response:
  // [
  //   { code: 'AF', name: 'Afghanistan', states: [] },
  //   { code: 'AL', name: 'Albania', states: [] },
  //   { code: 'DZ', name: 'Algeria', states: [] },
  //   { code: 'AS', name: 'American Samoa', states: [] },
  //   { code: 'BS', name: 'Bahamas', states: [] },
  //   { code: 'BH', name: 'Bahrain', states: [] }
  //   ...
  // ]
})();
