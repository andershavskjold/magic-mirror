# Magic Mirror

[![node](https://img.shields.io/badge/node-v8.11.1-brightgreen.svg)]()
[![npm](https://img.shields.io/badge/npm-v5.8.0-brightgreen.svg)]()

> This project was generated on 2018-04-18 15:12:30, as a node application which uses a react frontend.

## Installation

If you've never used Node or npm before, you'll need to install Node. If you
use homebrew, just run:

```
brew install node
```

Otherwise, you can download and install from [here](http://nodejs.org/download/).

### Install dependencies

```
npm install
```

This runs through all dependencies listed in `package.json` and installs them
locally within the project.

### Running build scripts

```
npm start
```

This will compile your assets and serve them through an [express](https://expressjs.com//) server with
[webpack-dev-middleware](https://github.com/webpack/webpack-dev-middleware) and
[webpack-hot-middleware](https://github.com/glenjamin/webpack-hot-middleware).

### Building for production

```
npm run build
```

This will minify and hash all assets etc.

### Testing with Jest

This repo includes a test suite running
[Jest](https://facebook.github.io/jest/).

To run the tests simply run:

```
npm test
```

### Code style

This repo uses a custom [eslint](https://eslint.org) style guide and [prettier](https://prettier.io/) an opinionated code formatter. It also
includes some default editor settings using
[editor config](https://github.com/sindresorhus/editorconfig-sublime).
