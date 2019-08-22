var color = 'RED';
var myCar = {
    color: "Blue",
    logColor: function () {
        var self = this;
        console.log(color, self);
        console.log("In logColor - this.color: " + this.color);
        console.log("In logColor - self.color: " + self.color);
        (function () {
            console.log("In IIFE(func) - this.color: " + this.color);
            console.log("In IIFE(func) - self.color: " + self.color);
        })();
        (() => {
            console.log("In IIFE(exp) - this.color: " + this.color);
            console.log("In IIFE(exp) - self.color: " + self.color);
        })();
    },
    logColor2: () => {
        console.log('=====================================================');
        var self = this;
        console.log(color, self);
        console.log("In logColor - this.color: " + this.color);
        console.log("In logColor - self.color: " + self.color);
        (function () {
            console.log("In IIFE(func) - this.color: " + this.color);
            console.log("In IIFE(func) - self.color: " + self.color);
        })();
        (() => {
            console.log("In IIFE(exp) - this.color: " + this.color);
            console.log("In IIFE(exp) - self.color: " + self.color);
        })();
    }
};

myCar.logColor();
myCar.logColor2();

// var globalVar = 'global variable';
function test2() {
    console.log('Global Test 2');
}
// function test() {
//     var functionVar = 'function variable';
//     function test2() {
//         var self = this;
//         console.log('Test 2');
//         console.log(self.functionVar);
//     }
//     test2();
// }
// test();