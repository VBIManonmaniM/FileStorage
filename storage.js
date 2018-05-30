const fs = require('fs');
const path = require('path');

class MongoDBClient {
    constructor() {
    }

    open(fileName) {
    }

    save() {
    }

}

class FileSystemClient {

    constructor() {
        this.rootDirectory = 'serverfiles';
    }

    createDirectory(directoryName) {
        let root = this.rootDirectory + '/' + directoryName;
        return new Promise((resolve, reject) => {
            if (!fs.existsSync(root)) {
                fs.mkdir(root, (err) => {
                    if (err) {
                        reject(err);
                    }
                    resolve({
                        code: 101,
                        message: "success",
                        folderName: directoryName,
                        stream: null
                    });
                });
            } else {
                resolve({
                    code: 100,
                    message: directoryName + " Already Exist",
                    folderName: directoryName,
                    stream: null
                });
            }
        });
    }

    removeDirectory(directoryName) {
        let root = path.join(this.rootDirectory, directoryName);
        return new Promise((resolve, reject) => {
            if (fs.existsSync(root)) {
                fs.rmdir(root, (err) => {
                    if (err) {
                        reject(err);
                    }
                    resolve({
                        code: 101,
                        message: "success",
                        folderName: directoryName,
                        stream: null
                    });
                });
            } else {
                resolve({
                    code: 100,
                    message: directoryName + " doesn't Exist",
                    folderName: directoryName,
                    stream: null
                });
            }
        });
    }

    open(fileName, directoryName) {
        let relativePath = this.calulateRelativePath(fileName, directoryName);
        return new Promise((resolve, reject) => {
            if (fs.existsSync(relativePath)) {
                resolve({
                    code: 101,
                    message: "success",
                    fileName: fileName,
                    stream: fs.createReadStream(relativePath)
                });
            } else {
                reject(new Error("File doesn't exist"));
            }
        });
    }

    async save(fileName, directoryName, fileReadableStream) {
        if (directoryName) {
            await this.createDirectory(directoryName);
        }
        return new Promise((resolve, reject) => {
            fileReadableStream.pipe(fs.createWriteStream(this.calulateRelativePath(fileName, directoryName)));
            fileReadableStream.on("end", (end) => {
                resolve({
                    code: 101,
                    message: "success",
                    fileName: fileName,
                    stream: null
                });
            });
            fileReadableStream.on("error", (error) => {
                reject(error);
            });
        });
    }

    rename(oldName, newName, directoryName) {
        let oldPath = this.calulateRelativePath(oldName, directoryName);
        let newPath = this.calulateRelativePath(newName, directoryName);
        return new Promise((resolve, reject) => {
            fs.rename(oldPath, newPath, (err) => {
                if (err) {
                    reject(err);
                }
                resolve({
                    code: 101,
                    message: "success",
                    fileName: newName,
                    stream: null
                });
            });
        });
    }
    calulateRelativePath(fileName, directoryName) {
        if (directoryName) {
            return path.join(this.rootDirectory, directoryName, fileName);
        } else {
            return path.join(this.rootDirectory, fileName);
        }
    }

    delete(fileName, directoryName) {
        return new Promise((resolve, reject) => {
            fs.unlink(this.calulateRelativePath(fileName, directoryName), function (err) {
                if (err) {
                    reject(err);
                }
                resolve({
                    code: 101,
                    message: "success",
                    fileName: fileName,
                    stream: null
                });
            });
        });
    }

    getAttributes(fileName, directoryName) {
        let relativePath = this.calulateRelativePath(fileName, directoryName);        
        return new Promise((resolve, reject) => {
            fs.stat(relativePath, function (err, stat) {
                if (err) {
                    reject(err);
                }
                resolve({
                    code: 101,
                    message: "success",
                    fileName: fileName,
                    attributes: stat,
                    stream: null
                });
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