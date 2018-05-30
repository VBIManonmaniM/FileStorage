const StorageApi = require('./storage.js');
const fs = require('fs');


let storage = new StorageApi();
// storage.open('33.png','open').then((result) => {
//     result.stream.pipe(fs.createWriteStream('./localfiles/' + result.fileName));
// }, (err) => {
// });

// storage.save('1.png' , null , fs.createReadStream('./localfiles/1.png')).then((result) => {
//     //result.stream.pipe(fs.createWriteStream('./localfiles/' + result.fileName));
// }, (err) => {
// });

// storage.save('1.png' , 'img' , fs.createReadStream('./localfiles/1.png')).then((result) => {
//     //result.stream.pipe(fs.createWriteStream('./localfiles/' + result.fileName));
// }, (err) => {
// });

// storage.save('1.png' , 'img-new' , fs.createReadStream('./localfiles/1.png')).then((result) => {
//     //result.stream.pipe(fs.createWriteStream('./localfiles/' + result.fileName));
// }, (err) => {
// });


// storage.delete('3.png' , 'ope1n').then((result) => {
//     debugger
// }, (err) => {
//     debugger
// });


// storage.rename("4.png", "55.png","open1").then((result) => {
//     debugger
// }, (err) => {
//     debugger
// });


// storage.getAttributes("3.png" , "sss").then((result) => {
//     debugger
// }, (err) => {
//     debugger
// });

storage.removeDirectory("open").then((result) => {
    debugger
}, (err) => {
    debugger
});

// storage.createDirectory("mano").then( (result) => {
//     debugger
// }, (err) => {
//     debugger
// });