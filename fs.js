const {readFileSync , writeFileSync} = require('fs');
console.log('start');
const first = readFileSync('./content/subfolder/first.txt','utf-8')
console.log(first);

writeFileSync('./content/damp.txt',`${first}`);

console.log('done with this task');