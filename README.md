# Printful SDK for TypeScript (Node.js)

[![NPM Version](https://img.shields.io/npm/v/printful-sdk-js-v2)](https://www.npmjs.com/package/printful-sdk-js-v2)
![MIT license](https://img.shields.io/badge/License-MIT-blue.svg) ![Project Status: WIP](https://www.repostatus.org/badges/latest/wip.svg)

> 📢 Printful API 2.0.0 is still in beta ([documentation](https://developers.printful.com/docs/v2-beta/)). This SDK will be in development until the official 2.0.0 release
> (by 2025)

Printful SDK for Node.js. A basic TypeScript wrapper for the Printful REST API (v2). Guidelines and source endpoints can be found here:
[developers.printful.com](https://developers.printful.com).

## Getting started

### Prerequisites

- Printful API Token ([documentation](https://developers.printful.com))

### Installation

```sh
# Npm
npm install printful-sdk-js-v2

# Yarn
yarn add printful-sdk-js-v2

# Pnpm
pnpm add printful-sdk-js-v2
```

### Usage

> For security purposes, this is intended only for server-side use only

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
##  ☁ Open in the Cloud 
[![Open in VS Code](https://img.shields.io/badge/Open%20in-VS%20Code-blue?logo=visualstudiocode)](https://vscode.dev/github/spencerlepine/printful-sdk-js-v2)
[![Open in Glitch](https://img.shields.io/badge/Open%20in-Glitch-blue?logo=glitch)](https://glitch.com/edit/#!/import/github/spencerlepine/printful-sdk-js-v2)

[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/spencerlepine/printful-sdk-js-v2)
[![Open in CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/s/github/spencerlepine/printful-sdk-js-v2)
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/spencerlepine/printful-sdk-js-v2)
[![Open in Repl.it](https://replit.com/badge/github/withastro/astro)](https://replit.com/github/spencerlepine/printful-sdk-js-v2)

[![Open in Codeanywhere](https://codeanywhere.com/img/open-in-codeanywhere-btn.svg)](https://app.codeanywhere.com/#https://github.com/spencerlepine/printful-sdk-js-v2)
[![Open in Gitpod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io/#https://github.com/spencerlepine/printful-sdk-js-v2)

## Example Code 

- **JavaScript:** [examples/javascript](./examples/javascript)
- **TypeScript:** [examples/typescript](./examples/typescript)

## Documentation

View the site here: [spencerlepine.github.io/printful-sdk-js-v2](https://spencerlepine.github.io/printful-sdk-js-v2/classes/PrintfulClient.html)

## Contributing

Pull requests welcome! If you're interested in contributing to this project, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) file to get started.

## Disclaimer

This SDK is a third-party library and is not officially endorsed or maintained by Printful. It is provided "as is" without warranty of any kind. For official information and
guidelines on using the Printful API, please refer to the [Printful Developer Documentation](https://developers.printful.com/).

## License

[MIT](./LICENSE)
