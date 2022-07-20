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


_Q4._ What is the use of tsconfig.json file?<br>
The tsconfig. json file ***specifies the root files and the compiler options required to compile the project.*** JavaScript projects can use a jsconfig. 
json file instead, which acts almost the same but has some JavaScript-related compiler flags enabled by default.

_Q5._ What are the methods provided by `fs` module to manipulate files?<br>
<h3>The Node.js fs module</h3>
* The `fs` module provides a lot of very useful functionality to access and interact with the file system.
* There is no need to install it. Being part of the Node.js core it can be used by simply requiring it below:

```js
const fs = require('fs');
```


Methods that the `fs module` includes are here below:

* `fs.access()`: check if the file exists and Node.js can access it with its permissions
* `fs.appendFile()`: append data to a file. If the file does not exist, it's created
* `fs.chmod()`: change the permissions of a file specified by the filename passed. Related: `fs.lchmod()`, `fs.fchmod()`
* `fs.chown()`: change the owner and group of a file specified by the filename passed. Related: `fs.fchown()`, `fs.lchown()`
* `fs.close()`: close a file descriptor
* `fs.copyFile()`: copies a file
* `fs.createReadStream()`: create a readable file stream
* `fs.createWriteStream()`: create a writable file stream
* `fs.link()`: create a new hard link to a file
* `fs.mkdir()`: create a new folder
* `fs.mkdtemp()`: create a temporary directory
* `fs.open()`: opens the file and returns a file descriptor to allow file manipulation
* `fs.readdir()`: read the contents of a directory
* `fs.readFile()`: read the content of a file. Related: `fs.read()`















