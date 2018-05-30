const StorageApi = require('./storage.js').StorageApi;
const fs = require('fs');


let storage = new StorageApi();

// storage.open('resume.pdf','client1').then((result) => {
//     result.stream.pipe(fs.createWriteStream('./localfiles/' + result.fileName));
// }, (err) => {
// });

// storage.open('cli3.csv').then((result) => {
//     result.stream.pipe(fs.createWriteStream('./localfiles/' + result.fileName));
// }, (err) => {
// });


// storage.save('cli3.csv' , null , fs.createReadStream('./localfiles/cli3.csv')).then((result) => {
// }, (err) => {
// });

// storage.save('resume.pdf' , 'resume' , fs.createReadStream('./localfiles/resume.pdf')).then((result) => {
// }, (err) => {
// });



// storage.delete('cli3.csv').then((result) => {
// }, (err) => {
// });

// storage.delete('resume.pdf' , 'resume').then((result) => {
// }, (err) => {
// });

// storage.rename("resume.pdf", "rws.pdf").then((result) => {
//     debugger
// }, (err) => {
//     debugger
// });

// storage.rename("resume.pdf", "rws.pdf","resume").then((result) => {
//     debugger
// }, (err) => {
//     debugger
// });


// storage.getAttributes("res1.pdf").then((result) => {
//     debugger
// }, (err) => {
//     debugger
// });

// storage.getAttributes("rws.pdf" , "resume").then((result) => {
//     debugger
// }, (err) => {
//     debugger
// });

storage.removeDirectory("mano").then((result) => {
    debugger
}, (err) => {
    debugger
});

// storage.createDirectory("mano").then( (result) => {
//     debugger
// }, (err) => {
//     debugger
// });