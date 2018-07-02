
# koa-typescript-boilerplate

Minimalistic boilerplate to jump-start a [Koa2](https://koajs.com/) project in [TypeScript](https://www.typescriptlang.org/) [v2.9].

Provides a basic template, "batteries included":

+ [Koa2](https://koajs.com/), [koa-router](https://github.com/alexmingoia/koa-router), [koa-bodyparser](https://github.com/koajs/bodyparser) and their type definitions
+ [TypeScript](https://www.typescriptlang.org/) to ES6 transpilation,
+ [TSLint](https://palantir.github.io/tslint/) 5.x with [Microsoft recommended rules](https://github.com/Microsoft/tslint-microsoft-contrib),
+ [Jest](http://jestjs.io/) unit testing and code coverage,
+ Type definitions for Node.js v8+ and Jest,
+ [NPM scripts for common operations](#available-scripts),
+ a simple example of TypeScript code and unit test,
+ .editorconfig for consistent file format.

## Quick start

This project is intended to be used with v8 (LTS Carbon) release of [Node.js](https://nodejs.org) or newer and [NPM][https://www.npmjs.com/]. Make sure you have those installed.

Now start adding your code in the `src` and unit tests in the `__tests__` directories. Have fun and build amazing things 🚀

### Unit tests in JavaScript

Writing unit tests in TypeScript can sometimes be troublesome and confusing. Especially when mocking dependencies and using spies.


## Available scripts

+ `clean` - remove coverage data, Jest cache and transpiled files,
+ `dev` - run `app.ts` directly by [ts-node](https://github.com/TypeStrong/ts-node),
+ `ts` || `repl` - run typescrip REPL for node.js,
+ `build` - transpile TypeScript to ES6,
+ `watch` - watch change from `/src`, lint, build and restart app,
+ `lint` - lint source files and tests,
+ `test` - run tests,
+ `test:watch` - interactive watch mode to automatically re-run tests

## Thanks
This project is Powered By [node-typescript-boilerplate](https://github.com/jsynowiec/node-typescript-boilerplate)
