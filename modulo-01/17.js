const path = require('path');
const fs = require('fs');

const pathFile = path.join(__dirname, 'data.txt');

const promiseReadFile = (path) => {
    const options = { encoding: 'utf8' };
    return new Promise((resolve) => {
        fs.readFile(path, options, (err, data) => {
            if (err) throw new Error('File not found');
            resolve(data.toString());
        });
    })
}

promiseReadFile(pathFile)
    .then(content => content.split('\n'))
    .then(line => line.join(','))
    .then(console.log)