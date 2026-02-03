require("./test.js");
// const obj = require('./sum.js');
// const { calculateSum, x} = require('./sum.js');  // both consider same 
const { calculateSum, x} = require('./calculate');
const data = require('./data.json');


var name = 'namaster nodeJs';
var a = 5;
var b = 20;

calculateSum(a, b);
console.log(JSON.stringify(data));
// console.log(x);

// console.log(name);
// console.log(a + b);

// console.log(global);  // global object in Node.js
// console.log(this);  // 'this' in Node.js refers to the current module
// console.log(globalThis);

// require('/path)
// all the code of module is wrapped inside a function(IIFE)
//IIFE - Immediately Invoked Function Expression  -- keeping variable and function safe
// module is parameter of IIFE and require, exports, __dirname, __filename are properties of module


// require(/path)
// it resolve the module  -> ./ localpath
                    //    -> .json or node: module accordingly
// it loads the module -> read the file and execute the code
// wraps inside IIFE 
// it caches the module -> store the result in cache object
// it returns the module.exports object -> return the exports object

// v8 js engine responsible for normal operation variable function execution
// libuv responsible for non blocking I/O operations like api call, setTimeout, readFile, writeFile, etc  n