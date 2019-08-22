function getTotal() {
    let args = Array.prototype.slice.call(arguments);   // Array
    console.log(args, arguments);

    if (args.length === 2) {
        // return args.reduce((a, b) => a + b);
        return args[0] + args[1];
    } else if (args.length === 1) {
        return (num2) => args[0] + num2;
    }
}



console.log(getTotal(10, 20));
console.log(getTotal(10)(20));