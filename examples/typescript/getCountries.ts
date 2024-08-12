// tsc && node getCountries.ts

import { PrintfulClient, Country } from 'printful-sdk-js-v2';

const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>',
});

(async () => {
  const offset = 20;
  const limit = 10;
  const response = await printful.countriesV2.getCountries(offset, limit);
  const countries: Country[] = response.data;
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
