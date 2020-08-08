const fs = require('fs');
const path = require('path');

const caminho = path.join(__dirname, 'data.txt');

const options = { encoding: 'utf8' }

const callback = (err, data) => {
    if(err) throw new Error('File not found');
    console.log(data);
}
console.log('line 12')
fs.readFile(caminho, options, callback);
console.log('line 14')
const data = fs.readFileSync(caminho, options);
console.log(data);
console.log('line 17')