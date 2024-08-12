// getCountries.ts

import { PrintfulClient, Country } from 'printful-sdk-js-v2';

const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>',
});

(async () => {
  const response = await printful.countriesV2.getCountries();
  const countries: Country[] = response.data;
  console.log(countries);
})();
