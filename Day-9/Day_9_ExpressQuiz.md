# Day 9 Express Quiz 

## **Theory Questions** 

_Q1._ What is NodeJS?<br>
Node.js is an open-source, cross-platform, 
back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser 
which was designed to build some scalable network applications.


**Example:**
```js
// Basic Hello World Program

const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World!!!');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
```
