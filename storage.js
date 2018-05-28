const fs = require('fs');

class MongoDBClient {
    constructor() {
    }

    open(fileName, callBack) {
    }

    save() {
    }

}

class FileSystemClient {
    constructor() {

    }

    open(fileName) {
        let relativePath = './files/' + fileName;
        return new Promise((resolve, reject) => {
            if (fs.existsSync(relativePath)) {
                resolve({
                    code: 101,
                    message: "success",
                    fileName: fileName,
                    relativePath: relativePath,
                    stream: fs.createReadStream(relativePath)
                });
            } else {
                reject(new Error("File doesn't exist"));
            }
        });
    }

    save(fileName, fileReadableStream) {
        let relativePath = './files/' + fileName;
        return new Promise((resolve, reject) => {
            fileReadableStream.pipe(fs.createWriteStream(relativePath));
            fileReadableStream.on("end", (end) => {
                resolve({
                    code: 101,
                    message: "success",
                    fileName: fileName,
                    relativePath: relativePath,
                    stream: null
                });
            });
            fileReadableStream.on("error", (error) => {
                reject(error);
            });
        });
    }

}

class StorageApi extends FileSystemClient {
    constructor() {
        super();
    }
}
module.exports = StorageApi;