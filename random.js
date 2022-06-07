const fs = require('fs');
const lista = (fs.readFileSync('./lista.txt', 'utf8')).split('\n');
console.log('Están participando: ', lista.length);
const num = Math.floor(Math.random() * lista.length)
console.log('Salió: ', lista[num]);
