var obj = { num: 2 };
var obj2 = { num: 6, x: 'laskjdakl', z: () => 'Shubham Jain' };

var addToThis = function (a, b) {
    console.log(this);  // print the object
    return this.num + a + b;
}

console.log(addToThis.call(obj, 33, 8));    // functionName.call(obj, functionArguments)

console.log(addToThis.call(obj2, 98, 82))

console.log(addToThis.apply(obj, [33, 8]));

//======================================================//

const car1 = {
    brand: 'Porcshe',
    getCarDescription: function (cost, year, color) {
        console.log(`This car is ${this.brand}. The price is $${cost}. The year is ${year}. The color is ${color}. \n`);
    }
};

const car2 = {
    brand: 'Lamborghini',
};

const car3 = {
    brand: 'Ford'
};

car1.getCarDescription(80000, 2010, 'blue');

car1.getCarDescription.call(car2, 200000, 2016, 'yellow');

car1.getCarDescription.apply(car3, [90000, 2013, 'red']);
