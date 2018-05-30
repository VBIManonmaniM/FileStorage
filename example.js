const StorageApi = require('./storage.js').StorageApi;
const fs = require('fs');


let storage = new StorageApi();


/*
    storage.open(fileName,directoryName : optional)
    open will return a promise
*/

storage.open('resume.pdf','client1').then((result) => {
    result.stream.pipe(fs.createWriteStream('./localfiles/' + result.fileName));
}, (err) => {
});

storage.open('cli3.csv').then((result) => {
    result.stream.pipe(fs.createWriteStream('./localfiles/' + result.fileName));
}, (err) => {
});


/*
    storage.save(fileName,directoryName,stream)
    save will return a promise
*/

storage.save('cli3.csv' , null , fs.createReadStream('./localfiles/cli3.csv')).then((result) => {
}, (err) => {
});

storage.save('resume.pdf' , 'resume' , fs.createReadStream('./localfiles/resume.pdf')).then((result) => {
}, (err) => {
});


/*
    storage.delete(fileName,directoryName)
    delete will return a promise
*/

storage.delete('cli3.csv').then((result) => {
}, (err) => {
});

storage.delete('resume.pdf' , 'resume').then((result) => {
}, (err) => {
});

/*
    storage.rename(oldName,newName)
    rename will return a promise
*/

storage.rename("resume.pdf", "rws.pdf").then((result) => {
}, (err) => {
});

storage.rename("resume.pdf", "rws.pdf","resume").then((result) => {
}, (err) => {
});

/*
    storage.getAttributes(fileName)
    getAttributes will return a promise
*/

storage.getAttributes("res1.pdf").then((result) => {
}, (err) => {
});

storage.getAttributes("rws.pdf" , "resume").then((result) => {
}, (err) => {
});

/*
    storage.removeDirectory(directoryName)
    removeDirectory will return a promise
*/

storage.removeDirectory("resume").then((result) => {
}, (err) => {
});

/*
    storage.createDirectory(directoryName)
    createDirectory will return a promise
*/

storage.createDirectory("resume").then( (result) => {
}, (err) => {
});