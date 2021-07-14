# typescript-express-error

A simple typescript + express project with errors for testing `source-map`.

## Install

```shell
yarn
```

## Start

```shell
yarn build && node dist/main.js
```

## Access

http://localhost:3000

will throw 500(internal server error).

## Read Compiled SourceMap

**node@16 is required.**

```shell
yarn build
cd read-sourcemap
yarn && node index.js
```
