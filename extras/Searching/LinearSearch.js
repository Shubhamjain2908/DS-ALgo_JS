const gotChar = ['jon', 'dany', 'cersei', 'jamie', 'rob', 'tyrion', 'sansa', 'bran', 'arya', 'hound', 'mountain'];

const king = 'bran';
let i1 = gotChar.indexOf(king);
let i2 = gotChar.findIndex(g => g === king);
let i3 = gotChar.find(g => g === king);
let i4 = gotChar.includes(king);

console.log(i1, i2, i3, i4);

const arr = [
    {
        "balance": "$3,771.94",
        "age": 25,
        "eyeColor": "blue",
        "name": "Sherry Barr",
        "gender": "female",
        "email": "sherrybarr@emergent.com"
    },
    {
        "balance": "$3,207.50",
        "age": 26,
        "eyeColor": "green",
        "name": "Freida Cohen",
        "gender": "female",
        "email": "freidacohen@emergent.com"
    },
    {
        "balance": "$2,294.77",
        "age": 35,
        "eyeColor": "blue",
        "name": "Lane Gilbert",
        "gender": "male",
        "email": "lanegilbert@emergent.com"
    },
    {
        "balance": "$2,976.35",
        "age": 40,
        "eyeColor": "blue",
        "name": "Nola Mosley",
        "gender": "female",
        "email": "nolamosley@emergent.com"
    },
    {
        "balance": "$1,285.15",
        "age": 27,
        "eyeColor": "brown",
        "name": "Marta Hunter",
        "gender": "female",
        "email": "martahunter@emergent.com"
    }
];

let i5 = arr.map(g => g.age > 30);
console.log(i5);