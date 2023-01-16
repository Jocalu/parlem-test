# Parlem test

Technical test for the selection process with Parlem Telecom.

## What's inside?

This turborepo uses [pnpm](https://pnpm.io) as a package manager. It includes the following packages/apps:

### Apps and Packages

- `parlem-web`: a [Vue.js](https://vuejs.org/) app
- `server`: a [Express.js](https://expressjs.com/) app
- `eslint-config-custom`: `eslint` configurations (includes `eslint-config-prettier`)
- `tsconfig`: `tsconfig.json` used throughout the monorepo


### Utilities

This turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:

```
cd parlem-test
pnpm run build
```

### Develop

To develop all apps and packages, run the following command:

```
cd parlem-test
pnpm run dev
```

### Test

To test all apps and packages, run the following command:

```
cd parlem-test
pnpm run test
```