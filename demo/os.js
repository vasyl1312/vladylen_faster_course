const os = require('os');

console.log('Операційна система:', os.platform());

console.log('Архітектура процесора:', os.arch());

console.log('Інфа процесора:', os.cpus());

console.log('Вільна пам`ять:', os.freemem());

console.log('Вся пам`ять:', os.totalmem());

console.log('Домашня директорія:', os.homedir());

