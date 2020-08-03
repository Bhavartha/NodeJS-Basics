const fs = require('fs');
const zlib = require('zlib');
const gunzip = zlib.createGunzip();

const readStream = fs.createReadStream('data.gz');
const writeStream = fs.createWriteStream('data.txt');

readStream.pipe(gunzip).pipe(writeStream);