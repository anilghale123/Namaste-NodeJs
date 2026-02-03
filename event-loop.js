const fs = require('fs');
const a = 100;

setImmediate( () => {
    console.log('setImmediate called');
});

fs.readFile('./file.txt', 'utf-8', (err, data) => {  // asynchronous non-blocking call
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

setTimeout(() => {
    console.log('setTimeout called after 0 milliseconds');
}, 0);

function printA() {
    console.log('Value of a:', a);

}
printA();
console.log('End of script');


// a=
// last line
// nexttick
//promise
// timer expired
// setImmediate
// file read
