# node-server

This is a *simple* node server I began to toy and tinker with. Just simply having a backend that does crud operation, but without the use and help of express.js, in order to gain a better understanding of how the underlying software works and making my own implementations (which arent all that hard actually, middleware simply alters the request/response based on the data and routes.. or so)

So far, I have implemented the following for it:

- usage of common-js modules, as much as applicable (typescript makes this more difficult on where it draws the line)
- using typescript types and interfaces, especially to attempt to make a mockable DbController to demonstrate testing of business logic.
- Like the previous point, added jest to the project in order to learn and implement unit / intergation testing for the purposes of the little project.
- All responses should be json or so, this is meant to be a backend REST API server for web applications.
