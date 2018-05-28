const StorageApi = require('./storage.js');
const fs = require('fs');


let storage = new StorageApi();
storage.open('1.png').then((result) => {
    result.stream.pipe(fs.createWriteStream('./localfiles/1.png'));
}, (err) => {
});

storage.open('2.txt').then((result) => {
    result.stream.pipe(fs.createWriteStream('./localfiles/2.txt'));
}, (err) => {
});

storage.open('3.png').then((result) => {
    result.stream.pipe(fs.createWriteStream('./localfiles/3.png'));
}, (err) => {
});


storage.save("4.png", fs.createReadStream("./localfiles/4.png")).then((result) => {
    debugger
}, (err) => {
});