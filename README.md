# node-server

This is a *simple* [node.js](https://nodejs.org/) server I began to toy and tinker with. Just simply having a backend that does crud operations, but without the use and help of [express.js](https://expressjs.com/), in order to gain a better understanding of how the underlying software works and making my own implementations ( which arent all that hard actually, [middleware](https://expressjs.com/en/guide/using-middleware.html) simply alters the request/response based on the data and routes.. or so )

So far, I have implemented the following for it:

- usage of common-js modules ( aka: ```require()``` and ```module.exports = {}``` ), as much as applicable ( typescript makes this more difficult on where it draws the line )
- using [typescript](https://www.typescriptlang.org/) types and interfaces, especially in attempt to make a mockable iDbController to demonstrate testing of business logic.
- Like the previous point, added [jest](https://jestjs.io/) to the project in order to learn and implement unit / intergation testing for the purposes of the little project.
- All responses should be json or so, this is meant to be a backend REST API server for web applications.
