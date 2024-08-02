# Printful SDK for TypeScript (Node.js)

[![NPM Version](https://img.shields.io/npm/v/printful-sdk-js-v2)](https://www.npmjs.com/package/printful-sdk-js-v2)
![MIT license](https://img.shields.io/badge/License-MIT-blue.svg) ![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg)

> 📢 ![Project Status: WIP](https://www.repostatus.org/badges/latest/wip.svg) Printful API 2.0.0 is in beta [[documentation](https://developers.printful.com/docs/v2-beta/)]. This
> SDK is in development until the official 2.0.0 release (by 2025)

Printful SDK for Node.js. A basic TypeScript wrapper for the Printful REST API (v2). Guidelines and source endpoints can be found here:
[developers.printful.com/](https://developers.printful.com).

## Getting started

### Prerequisites

1. Printful API Token ([documentation](https://developers.printful.com))

### Installation

```sh
# Npm
npm install printful-sdk-js-v2

# Yarn
yarn add printful-sdk-js-v2

# Pnpm
pnpm add printful-sdk-js-v2
```

## Usage

> ⚠️ For security purposes, this is intended only for server-side use only

```js
import { CountriesV2Api, Country } from 'printful-sdk-js-v2';
// const { CountriesV2Api, Country } = require('printful-sdk-js-v2'); // CommonJS

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
```

## API

For the full documentation, please see [spencerlepine.github.io/printful-sdk-js-v2](https://spencerlepine.github.io/printful-sdk-js-v2/)

## Examples

To get started quickly, check out the JavaScript/TypeScript example code in the [`examples`](./examples) folder.

## Contributing

We welcome contributions from the community! If you're interested in contributing to this project, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file to get started.

## Disclaimer

This SDK is a third-party library and is not officially endorsed or maintained by Printful. It is provided "as is" without warranty of any kind. For official information and
guidelines on using the Printful API, please refer to the [Printful Developer Documentation](https://developers.printful.com/).

## License

[MIT](./LICENSE)
