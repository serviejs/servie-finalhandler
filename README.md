# Servie Finalhandler

[![NPM version](https://img.shields.io/npm/v/servie-finalhandler.svg?style=flat)](https://npmjs.org/package/servie-finalhandler)
[![NPM downloads](https://img.shields.io/npm/dm/servie-finalhandler.svg?style=flat)](https://npmjs.org/package/servie-finalhandler)
[![Build status](https://img.shields.io/travis/serviejs/servie-finalhandler.svg?style=flat)](https://travis-ci.org/serviejs/servie-finalhandler)
[![Test coverage](https://img.shields.io/coveralls/serviejs/servie-finalhandler.svg?style=flat)](https://coveralls.io/r/serviejs/servie-finalhandler?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/serviejs/servie-finalhandler.svg)](https://greenkeeper.io/)

> Servie final HTTP 404 responder.

## Installation

```
npm install servie-finalhandler --save
```

## Usage

```ts
import { finalhandler } from 'servie-finalhandler'

const app = compose([get(...), post(...)])
const req = new Request({ url: '/' })

app(req, finalhandler(req))
```

## TypeScript

This project is written using [TypeScript](https://github.com/Microsoft/TypeScript) and publishes the definitions directly to NPM.

## License

Apache 2.0
