const fs = require('fs');
const https = require('https');

https.get('https://jsonplaceholder.typicode.com/posts', (response) => {
    console.log('statusCode:', response.statusCode);
}
);

setTimeout( () => {
console.log('setTImeout called after 5 seconds');
}, 5000);

fs.readFile('./file.txt', 'utf-8', (err, data) => {  // asynchronous non-blocking call
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File content:', data);
});

fs.readFileSync('./file.txt', 'utf-8', (err, data) => {   // synchronous blocking call
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
});

//utf-8 specifies the encoding format for reading the file 