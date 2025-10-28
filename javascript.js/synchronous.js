const fs = require('fs')
const data = fs.readFileSync('file.txt','utf8');
console.log("file content:",data);
console.log('start reading file');

console.log("finish");
