const Map = require('./HashTable');

var myHT = new Map(30);

myHT.insert('Shubham', 23);
myHT.insert('Divy', 12);
myHT.insert('Virat', 30);

console.log(myHT.hash('Becca'));

console.log(myHT);