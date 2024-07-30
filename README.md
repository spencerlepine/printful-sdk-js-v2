# Printful SDK for TypeScript (Node.js)

[![NPM Version](https://img.shields.io/npm/v/printful-sdk-js-v2)](https://www.npmjs.com/package/printful-sdk-js-v2)
![MIT license](https://img.shields.io/badge/License-MIT-blue.svg) ![Coverage](https://img.shields.io/badge/Coverage-100%25-brightgreen.svg)

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
import Printful from 'printful-sdk-js-v2';
// const Printful = require('printful-sdk-js-v2'); // CommonJS

const printful = new Printful({
  accessToken: process.env.API_TOKEN,
});

// TODO - snippet code
```

## API

For the full documentation, please see // TODO

## Contributing

We welcome contributions from the community! If you're interested in contributing to this project, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file to get started.

## Disclaimer

This SDK is a third-party library and is not officially endorsed or maintained by Printful. It is provided "as is" without warranty of any kind. For official information and
guidelines on using the Printful API, please refer to the [Printful Developer Documentation](https://developers.printful.com/).

## License

[MIT](./LICENSE)
