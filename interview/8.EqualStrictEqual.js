// == (equals)-> checks abstract equality (only value)
// === (strict equals)-> checks type & value

console.log(7 == '7'); // true
console.log(7 === '7'); // false

/**
 * 1. Comparing number & String -> string is converted to a number
 * 2. Comparing boolean & non-boolean -> non-boolean is converted to a boolean
 * 3. Comparing object & primitive data-type -> object is converted to primitive data-type
 */