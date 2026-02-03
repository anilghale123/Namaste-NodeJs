# NodeJs - runtime environment
JS runtime build on Chrome's V8 JS engine
Run anywhere, cross platform, open source
run on JS engine
async non-blocking i/o using v8 engine
has an event-driven architecture capable of asynchronous I/O

Node REPL - Read Evaluate Print Loop


# How to run node file
node filename (app.js)

# Global Object
global given by nodeJs outside of v8 js engine 
global provides setTimeOut,Interval etc and others.

-- window, this, self, frames, global  all are global object

 globalThis standardize global object to avoid conflict

# How to include module inside module
using require('file_pathname');
require code will run first and remaining will
modules protect their variable and function from leaking

# How to use variable and function from other module
# cjs
firstly, need to export using module.exports = functionName
                           module.exports = {variableName, functionName}

secondly, import using const functionName = require('pathname');

                       const {variableName, functionName} = require('pathname');

# mjs
firstly, need to export using export function functionName
                           export  = {variableName, functionName}

secondly, import using import('pathname');

                       import {variableName, functionName} from 'pathname';


common JS module (cjs)
module.exports
require()
by default used NodeJS
old way
industry high use
synchronous
non strict mode

Es Module (mjs)
export 
import
by default reactJs
new way
standard
asynchronous
strict mode

module.export console = {} empty object
 


 # v8 js engine architecture
 call stack - js has only one call stack, where all code actually get run, execute
            - has execution context (function get run over here and get pop as soon as exection and return completed) and global execution context
 memory heap - responsible for storing variable and reference - manage memory
 garbage collector - erase unused variable and clear space, collect all garbage inside code

 # process insisde v8 js engine
 code
 parsing
 1) Lexical analysis (tokenization)  code -> tokens
 2) Syntax analysis  (parsing) token -> AST (abstract syntax tree)  -- astexplorer.net , syntax error is called when it couldnot build AST after AST it give to interpreter
 3) JIT compilation (Just in Time)

AST --> Ignition interpreter --> Byte code --> execution   
               |
               |
              hot
               |--> deoptimized
    (optimization)    turbofan (earlier crankshaft) compiler work behind the scene  --> optimized machine code

    Grabage collection - orinoco, oil pan, scavenger, mcompact  -- ( mark & sweep algorithm used)


# intermediator between js engine and OS (Super Hero - Libuv)
has threadpool, handle eventloop 
asyn i/o made simple written in C language
v8 engine off load everything (every task) to Libuv and libuv communicate with OS and get necessary things from it
- network call
- handle timer
- access db
- manage files

# libuv detail
- event loop - keep checking call stack and callback queue, when callstack free check queue and add task into callstack  --> manager
 - phases (timer --> setTimeout, setInterval, poll --> i/o callbacks prioritized, check --> setImmediate (utility api), close  --> socket.onClose)
    - before every phase (process.nextTick() --> promise callbacks)
- callback queue ( callback func wait over here )
- thread pool --> size 4 thread by default --> fs,dns lookup, crypto, use thread from thread pool and communicate with OS (file,www,api)
   --> we can change size of threadpool by process.env.UV_THREADPOOL_SIZE = number
# OS (operating system)
js engine should communicate with OS for all things below:
is responsible for management and knows location of things like:
file
database
www (network)
timer etc.

            OS
libuv -->   epoll (linux)  --> scalable i/o event notification mechanism  --> file descriptor --> socket descriptors
            kqueue (macOs)
            