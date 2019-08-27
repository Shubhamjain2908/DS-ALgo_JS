const reverseInt = (input) => {
    let reversed = 0;
    while (input != 0) {
        reversed = reversed * 10 + input % 10;
        input /= 10;
        input = Math.floor(input);
        if (reversed > Number.MAX_VALUE || reversed < Number.MIN_VALUE) {
            return 0;
        }
    }
    return reversed;
}

console.log(reverseInt(-82));