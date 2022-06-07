var inputName = process.argv[2] ? process.argv[2] : 'test.json'
var json =  require('./' + inputName);
var fields = Object.keys(json[0]);
console.log('las fields son: ', fields);
var replacer = function(key, value) { return value === null ? '' : value } 
var csv = json.map(function(row){
  return fields.map(function(fieldName){
    return JSON.stringify(row[fieldName], replacer)
  }).join(',')
})
console.log('el csv es: ', csv);
csv.unshift(fields.join(',')) // add header column
 csv = csv.join('\r\n');
 csv = csv += '\r\n'
const fs = require('fs');
fs.writeFileSync('pruebaCSV.csv' , csv);

