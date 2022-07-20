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
_Q2._ What is V8 Engine?<br>
V8 is Google’s open source high-performance JavaScript and WebAssembly engine and it is written in C++. 
It is used in Chrome and in Node.js.
It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors.
V8 can run standalone, or can be embedded into any of the C++ applications.

_Q3._ What is Event Loop in NodeJS?<br>
The event loop is what ***allows Node. js to perform non-blocking I/O operations*** — despite the fact that JavaScript is single-threaded — by offloading operations to the system kernel whenever possible.

<p>When Node.js starts, it initializes the event loop, processes the provided input script which may make async API calls, schedule timers, or call process.nextTick(), then begins processing the event loop.</p>














