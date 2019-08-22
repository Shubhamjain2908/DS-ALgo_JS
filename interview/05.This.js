/**
 *  'this' refers to the current object
 */
function foo() {
    console.log("Simple function call");
    console.log('==', this == global); // true
}

foo();	//prints true on console
console.log('===', this === global) //Prints false on console on node env while on google chrome console true.

function Person(fn, ln) {
    console.log('Person this', this);
    this.first_name = fn;
    this.last_name = ln;

    this.displayName = function () {
        console.log('Display Function this', this);
        console.log(`Name: ${this.first_name} ${this.last_name}`);
    }
}

let person = new Person("John", "Reed");
person.displayName();  // Prints Name: John Reed
let person2 = new Person("Paul", "Adams");
person2.displayName();  // Prints Name: Paul Adams