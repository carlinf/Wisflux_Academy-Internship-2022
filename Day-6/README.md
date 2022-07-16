# Week 2 Day1 Assignment 1 
## Theory Questions :
<br>

### **1.What is Javascript ?**

JavaScript or JS is a Programming Language which is one of the core technologies of the World Wide Web, along with HTML and CSS. More than 95% of modern web sites use JavaScript on the client side to provide functionality to the website.

### **2.What is the difference between let and var?**
var and let are both used for variable declaration in javascript but the difference between them is that var is function scoped and let is block scoped. It can be said that a variable declared with var is defined throughout the program as compared to let.
```javascript
//example of var
console.log(x);
var x=5;
console.log(x); 

// Output :
//   Undefined
//   5
//--------------------------------
//example of let
console.log(x);
let x=5;
console.log(x);

// Output:
//   Error
