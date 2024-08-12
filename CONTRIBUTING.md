# Contributing

Welcome! We're thrilled that you are interested in contributing to our project. By participating in this project, you agree to abide by the [Code of Conduct](./CODE_OF_CONDUCT.md).

## How Can I Contribute?

### Reporting Bugs

Before submitting a bug report, please check the existing issues to see if the problem has already been reported. If not, create a new issue with a clear title and description.

### Contributing Code

1. Fork the repository and create a new branch from `main`.
2. Make your changes, ensuring to follow our coding conventions and commit message guidelines.
3. Test your changes locally.
4. Push your branch to your fork and submit a pull request to the `main` branch of the main repository.
5. Provide a clear description of your pull request and link to any related issues.

### Pull Request Guidelines

- Follow the template provided when submitting pull requests ([PULL_REQUEST_TEMPLATE.md](./.github/PULL_REQUEST_TEMPLATE.md)).
- Ensure all tests pass before submitting the pull request.
- If your pull request relates to an issue, reference it in the description using "Fixes #issue_number" or "Resolves #issue_number".

### Code of Conduct

Help us keep this project open and inclusive. Please read and follow our [Code of Conduct](./CODE_OF_CONDUCT.md).

## Local Development

### Prerequisites

1. Git
1. Node: any 18.x version or greater
1. Yarn: See [Yarn website for installation instructions](https://yarnpkg.com/lang/en/docs/install/) (`npm install yarn -g`)

### Installation

```sh
git clone https://github.com/spencerlepine/printful-sdk-js-v2.git
cd printful-sdk-js-v2
yarn install
```

### API Model Updates

The REST API schema is defined in `openapi.json`. Edit that specification to reflect the endpoints/responses of the production Printful API. This is used to auto-generate the
`src/` code.

```json
{
  "openapi": "3.0.0",
  "info": {
    "version": "2.0.0",
    "title": "API Documentation v2 | Printful",
    "description": "# About ....",
    "contact": {
      "name": "Printful developer support",
      "url": "https://www.printful.com/docs/support",
      "email": "devsupport@printful.com"
    }
  }
  "paths": {
    "/v2/oauth-scopes": {
      // ...
    }
  }
}
```

### Re-generate the SDK

After making edits to the `openapi.json` schema, validate and re-generate the `src/` TypeScript files.

```sh
$ yarn run release
```

## Appendix

- **SDK Generator:**
  - Package: https://www.npmjs.com/package/openapi-typescript-codegen
  - GitHub Repository: https://github.com/ferdikoomen/openapi-typescript-codegen
- **Source API:**
  - Documentation: https://developers.printful.com/docs/v2-beta (as of Aug 2024)
