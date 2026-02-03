# Node.js — Runtime Environment

Node.js is a JavaScript runtime built on Chrome's V8 JS engine. It can run anywhere (cross platform) and is open source. It runs on the JS engine and provides async, non-blocking I/O using the V8 engine, with an event-driven architecture capable of asynchronous I/O.

Node REPL — Read Evaluate Print Loop

## How to run a Node file
```
node filename (app.js)
```

## Global Object
- `global` is given by Node.js outside of the V8 JS engine.
- `global` provides `setTimeout`, `setInterval`, etc. and others.
- `window`, `this`, `self`, `frames`, `global` all are global object
- `globalThis` standardize global object to avoid conflict

## How to include a module inside another module
Using `require('file_pathname')`.
- `require` code will run first and remaining will
- modules protect their variable and function from leaking

## How to use variables and functions from another module

### CommonJS (cjs)
Firstly, need to export using:
- `module.exports = functionName`
- `module.exports = {variableName, functionName}`

Secondly, import using:
- `const functionName = require('pathname');`
- `const {variableName, functionName} = require('pathname');`

### ES Module (mjs)
Firstly, need to export using:
- `export function functionName`
- `export  = {variableName, functionName}`

Secondly, import using:
- `import('pathname');`
- `import {variableName, functionName} from 'pathname';`

## Module system summary
Common JS module (cjs)
- `module.exports`
- `require()`
- by default used NodeJS
- old way
- industry high use
- synchronous
- non strict mode

ES Module (mjs)
- `export`
- `import`
- by default reactJs
- new way
- standard
- asynchronous
- strict mode

`module.export console = {} empty object`

## V8 JS Engine Architecture
- call stack — JS has only one call stack, where all code actually get run, execute
  - has execution context (function get run over here and get pop as soon as exection and return completed) and global execution context
- memory heap — responsible for storing variable and reference — manage memory
- garbage collector — erase unused variable and clear space, collect all garbage inside code

### Process inside V8 JS engine
code
parsing
1. Lexical analysis (tokenization) — code -> tokens
2. Syntax analysis (parsing) — token -> AST (abstract syntax tree) — astexplorer.net, syntax error is called when it couldnot build AST after AST it give to interpreter
3. JIT compilation (Just in Time)

AST --> Ignition interpreter --> Byte code --> execution
               |
               |
              hot
               |--> deoptimized
    (optimization)    turbofan (earlier crankshaft) compiler work behind the scene  --> optimized machine code

Grabage collection — orinoco, oil pan, scavenger, mcompact — ( mark & sweep algorithm used)

## Intermediator between JS engine and OS (Super Hero — Libuv)
- has threadpool, handle eventloop
- asyn I/O made simple written in C language
- v8 engine off load everything (every task) to Libuv and libuv communicate with OS and get necessary things from it
- network call
- handle timer
- access db
- manage files

## libuv detail
- event loop — keep checking call stack and callback queue, when callstack free check queue and add task into callstack  --> manager
- phases (timer --> setTimeout, setInterval, poll --> i/o callbacks prioritized, check --> setImmediate (utility api), close  --> socket.onClose)
- before every phase (process.nextTick() --> promise callbacks)
- callback queue ( callback func wait over here )
- thread pool --> size 4 thread by default --> fs, dns lookup, crypto, use thread from thread pool and communicate with OS (file,www,api)
- we can change size of threadpool by `process.env.UV_THREADPOOL_SIZE = number`

## OS (operating system)
JS engine should communicate with OS for all things below:
is responsible for management and knows location of things like:
- file
- database
- www (network)
- timer etc.

```
            OS
libuv -->   epoll (linux)  --> scalable i/o event notification mechanism  --> file descriptor --> socket descriptors
            kqueue (macOs)
```

---

## Extra info (useful quick reference)
- **Node is single-threaded for JS**, but uses libuv’s threadpool for some I/O and CPU-heavy tasks.
- **Event-driven** means callbacks/promises are scheduled by the event loop when the call stack is free.
- **Non-blocking I/O** allows Node to handle many concurrent operations without waiting on slow tasks.
- **CJS vs ESM**: CJS uses `require()`; ESM uses `import` and runs in strict mode by default.
