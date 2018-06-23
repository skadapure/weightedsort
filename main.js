const func = require('./sort');
const str = "1024 64768 8192 128 256 256 512 2048 4096 16384";
const arr = str.split(' ').map(item => parseInt(item));
const result = func(arr);
console.log(result);
