// TASK:
// 1. Describe what JSON format is. => 
// - Javascript Object Notation 
// - Light-weight format for transferring data
// - It is easy for humans to understand
// - It is easy for computers to parse & generate
// 2. Delete the data types not permitted in JSON.
// 3. Replace placeholder-text with the corresponding data type,
//    properly formatted as JSON.

// const myJsonObj = {
//     myString: [some string],
//     myNumber: [some number],
//     myNull: [null],
//     myBoolean: [false],
//     myUndefined: [undefined],    // not allowed
//     myArray: [some array],
//     myFunction: [some function],  // not allowed
//     myObject: [some object]
// };

const myJsonObj = {
    "myString": 'shubham',
    "myNumber": '22',
    "myNull": null,
    "myBoolean": false,
    "myArray": [1, 2, 3, 4, 5],
    "myObject": {
        "empId": '1722824'
    }
};

console.log(myJsonObj.myNull, myJsonObj.myUndefined);