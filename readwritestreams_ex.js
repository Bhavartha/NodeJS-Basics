const fs = require('fs');

const readStream = fs.createReadStream('data.html','utf-8');
const writeStream = fs.createWriteStream('data.txt');

readStream.on('data',(chunk)=>writeStream.write(chunk));
