# Printful SDK for Node.js (TypeScript) ![Project Status: WIP](https://www.repostatus.org/badges/latest/wip.svg)

[![NPM Version](https://img.shields.io/npm/v/printful-sdk-js-v2)](https://www.npmjs.com/package/printful-sdk-js-v2)
![MIT license](https://img.shields.io/badge/License-MIT-blue.svg) ![TypeScript](https://img.shields.io/badge/TypeScript-Ready-green.svg)
![package size](https://img.shields.io/bundlephobia/minzip/printful-sdk-js-v2) [![Socket Badge](https://socket.dev//api/badge/npm/package/printful-sdk-js-v2/2.0.0-beta)](https://socket.dev//npm/package/printful-sdk-js-v2/overview/2.0.0-beta)

A lightweight SDK for interacting with the Printful RESTful API, written in TypeScript. Designed for server-side use in Node.js environments.

🔗 Official API docs: [developers.printful.com](https://developers.printful.com)

> 📢 Notice: Printful API v2 is currently in beta. While an official release date and roadmap have not yet been announced, most v2 endpoints are already available. This SDK is actively being developed, and breaking changes may occur until the first stable release. If you encounter any issues, feel free to open an issue!

## Announcements

- **2024-11-31**: Printful and Printify announced a merge, no API changes planned, both platforms will operate separately "for the foreseeable future"
- **2024-08-05**: initial SDK pre-release: [`v2.0.0-beta`](https://github.com/spencerlepine/printful-sdk-js-v2/releases/tag/v2.0.0-beta)
- **2023-09-14**: Printful announces API V2 beta release
## Documentation

View the site here: [spencerlepine.github.io/printful-sdk-js-v2](https://spencerlepine.github.io/printful-sdk-js-v2/classes/PrintfulClient.html)

## Installation

```sh
# npm
npm install printful-sdk-js-v2

# yarn
yarn add printful-sdk-js-v2

# pnpm
pnpm add printful-sdk-js-v2
```

## Usage

The package needs to be configured with your private token (create one [here](https://developers.printful.com/tokens)).

```ts
// getCountries.ts

import { PrintfulClient, Country } from 'printful-sdk-js-v2';
// const { PrintfulClient } = require('printful-sdk-js-v2'); // CommonJS

const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>',
});

(async () => {
  const response = await printful.countriesV2.getCountries();
  const countries: Country[] = response.data;
  console.log(countries);
})();
```

## Configuration

```js
import { PrintfulClient } from 'printful-sdk-js-v2';

const printful = new PrintfulClient({
  TOKEN: '<PRINTFUL_API_TOKEN>',
});
```

| Option  | Default | Description                                                                                                                   |
| ------- | ------- | ----------------------------------------------------------------------------------------------------------------------------- |
| `TOKEN` | `null`  | The private token for authenticating requests. Generate one at [Printful Developers](https://developers.printful.com/tokens). |

## Example Code

These samples are provided as-is and are not guaranteed to be production-ready. They serve as a starting point for your own implementation.

- **JavaScript**: [examples/javascript](https://github.com/spencerlepine/printful-sdk-js-v2/tree/main/examples/typescript)
- **TypeScript**: [examples/typescript](https://github.com/spencerlepine/printful-sdk-js-v2/tree/main/examples/javascript)

## Contributing

Pull requests welcome! If you need assistance contributing to this project, please review the [CONTRIBUTING.md](./CONTRIBUTING.md) file to get started.

## Disclaimer

This SDK is a third-party library and is not officially endorsed or maintained by Printful. It is provided "as is" without warranty of any kind. For official information and
guidelines on using the Printful API, please refer to the [Printful Developer Documentation](https://developers.printful.com/).

## License

[MIT](./LICENSE)
