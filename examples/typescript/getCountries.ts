// Example code

import { CountriesV2Api, Country } from 'printful-sdk-js-v2';

const apiKey = process.env.PRINTFUL_API_TOKEN || 'YOUR_PRINTFUL_API_TOKEN';

const countriesApi = new CountriesV2Api({ accessToken: apiKey });

(async () => {
  try {
    const countries: Country[] = await countriesApi.getCountries();
    console.log('List of countries:', countries);
  } catch (error) {
    console.error('Error fetching countries:', error);
  }
})();
