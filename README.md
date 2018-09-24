# Express Walkthrough

My own personal documentation. Might not be applicable for everyone else.

## Installation

1. Install `node` 8.x using [nvm](https://github.com/creationix/nvm) or [binary packages](https://nodejs.org/en/download/). Using nvm is more recommended as you can switch between node version easily.

## Development
1. To compile the TypeScript `npx tsc` (the config will be defaulted to `tsconfig.json`, if you want to specify different config file: `tsc -p /path/to/tsconfig.json`).
  - `npx` is a node command to make it so we don't need to install `tsc` directly (so we won't pollute the installation folder)
2. To start the server (after compiling TS to JS): `node dist/server.js` (yes, `server.js` is like the starting point).
  - To pass the `.env` configuration file (using `dotenv` lib): `node --require dotenv/config "./dist/server.js"` (the `.env` file is defaulted to the same folder as the command is run).
3. Everytime you update the code, you need to kill (2), do (1), and re-do (2). As it is tedious, we use `tsc-watch` to watcher and restart the server everytime you update the code: `tsc-watch --onSuccess \"node --require dotenv/config ./dist/server.js\"`.
4. Script (3) has been saved into `start` script so you can just call `npm start` to start the development server.

## Linting
1. Linting is provided by [`tslint`](https://palantir.github.io/tslint/) library with some rules overridden in `tslint.json`.
2. Configuration is extended from [Palantir's recommended tslint config](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts).

## TODO
1. Script to clear out `dist` folder.
2. Script to execute linting
3. Script to generate build (minify, uglify, etc; maybe leverage webpack?)
