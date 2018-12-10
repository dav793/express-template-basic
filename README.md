
# HTTP/WS Server application template
## Based on node.js and express.js

### Description
Basic http + web sockets server application supporting logging (using winston.js) and unit tests (using mocha/chai).

### Usage

* ```npm start``` compile to /dist and serve application + watch for source changes.

* ```npm test``` compile to /dist and run tests + watch for source changes.

* ```npm run test:once``` compile to /dist and run tests once.

* ```npm run serve``` serve application only (must be pre-compiled to /dist).

* ```npm run build``` compile to /dist

* ```npm run build:watch``` compile to /dist + watch for source changes

#### Resources
* [Express: Request Object](https://expressjs.com/en/4x/api.html#req)
* [Express: Response Object](https://expressjs.com/en/4x/api.html#res)
* [Express: Routing](https://expressjs.com/en/guide/routing.html)
* [Express: Using middleware](https://expressjs.com/en/guide/using-middleware.html)
* [Express: Writing middleware](https://expressjs.com/en/guide/writing-middleware.html)
* [Express: Error-handling](https://expressjs.com/en/guide/error-handling.html)
* [NodeJS: EventEmitters](https://nodejs.org/api/events.html)
* [NodeJS: Streams](https://nodejs.org/api/stream.html)
* [NodeJS: Anatomy of an http transaction](https://nodejs.org/en/docs/guides/anatomy-of-an-http-transaction/)
* [NodeJS: Event loop](https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick/)
* [MongoDB Tutorial](https://www.tutorialspoint.com/mongodb/index.htm)
* [MongoDB Manual](https://docs.mongodb.com/manual/crud/)
* [WebSockets docs](https://github.com/websockets/ws)