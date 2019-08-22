/** Using functions as class: */

// Function acting as a Class. 
function copyClass(name, age) {
    this.name = name;
    this.age = age;
    this.printInfo = function () {
        console.log(this.name);
        console.log(this.age);
    }
}

// Creating the object of copyClass 
// and initializing the parameters. 
var obj = new copyClass("Vineet", 20);
obj.printInfo();

/** Using object literals: */
// Creating Object. 
var obj2 = {
    name: "",
    age: "",
    printInfo: function () {
        console.log(this.name);
        console.log(this.age);
    }
}
// Initializing the parameters. 
obj2.name = "Vineet";
obj2.age = 19;

// Using method of the object. 
obj2.printInfo();

/** Singleton using a function: */
// Creating singleton object. 
var obj3 = new function () {
    this.name = "";
    this.age = "";
    this.printInfo = function () {
        console.log(this.name);
        console.log(this.age);
    };
}

// Initializing object. 
obj3.name = "Vineet";
obj3.age = 20;

// Calling method of the object. 
obj3.printInfo();

/**  Constructor function */
function Car(color, brand, year) {
    this.color = color;
    this.brand = brand;
    this.year = year;
}

Car.prototype.getColor = function () {
    return this.color;
}

const carlysCar = new Car('blue', 'ferarri', 2015);

console.log(carlysCar);