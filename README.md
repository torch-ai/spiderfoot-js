# Spiderfoot

> This package provides a standardized layer for accessing open source [Spiderfoot services](https://www.spiderfoot.net/) along with data types.
> Spiderfoot web interface version: Opensource v3.1-DEV

# Usage

## Installation

Install the service in your own project

```
npm install @torch-ai/spiderfoot
```

## Initialization

At the top of your application, or in an imported configuration file:

```ts
// Import the service definition and environment constants
import Service, { IServiceOptions }  from "@torch-ai/spiderfoot";

// Create an instance of the service
const options: IServiceOptions = {};
export default new Service(options);
```

## Calls

```ts
import service from "./spiderfoot";

try {
  const capabilities = await service);
} catch (error) {}
```

There is a limitation of 10 API request per second per SimilarWeb account; if 2 API keys belong to the same account,
this limitation applies to both keys.

## License and agreements

This package is provided through an MIT license. Usage of this package is freely available without restriction.

## Installation

Clone the package from the [repository](https://github.com/torch-ai/spiderfoot-js).

```
npm install
```

## Testing

A local file `.env` file will need to be created with credentials for the api:

```text
API_KEY=****
```

You may run tests in a continuous watch mode:

```
npm run-script test:watch
```

## Publishing

Open an issue requesting a version to publish.
