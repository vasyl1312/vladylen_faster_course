const fs = require('fs');

const path = require('path');

// fs.mkdir(path.join(__dirname, 'test'), (err) => {
//     if (err) throw err;
//     console.log('Папка створена');
// })

const filePath = path.join(__dirname, 'test', 'text.txt')

fs.writeFile(filePath, 'Hello NODE.JS', err => {
    if (err) throw err;
console.log('File створено');
})

fs.readFile(filePath, 'utf-8',(err, content) => { 
    if (err) throw err;
   console.log(content);
})