// 'use strict';

/**
 * Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a “strict” operating context. This strict context prevents certain actions from being taken and throws more exceptions. The statement “use strict”; instructs the browser to use the Strict mode, which is a reduced and safer feature set of JavaScript.
 * 
 * Benifits of using ‘use strict’
 * 1. Strict mode eliminates some JavaScript silent errors by changing them to throw errors.
 * 2. Strict mode fixes mistakes that make it difficult for JavaScript engines to perform optimizations: strict mode code can sometimes be made to run faster than identical code that’s not strict mode.
 * 3. Strict mode prohibits some syntax likely to be defined in future versions of ECMAScript.
 * 4. It prevents, or throws errors, when relatively “unsafe” actions are taken (such as gaining access to the global object).
 * 5. It disables features that are confusing or poorly thought out.
 * 6. Strict mode makes it easier to write “secure” JavaScript.
 */

function strict() {

    // Function-level strict mode syntax
    'use strict';

    function nested() {
        return 'Javascript on GeeksforGeeks';
    }

    return "strict mode function!  " + nested();
}
function notStrict() {
    return "non strict function";
}

console.log(strict());
console.log(notStrict());

function myFunc(a, a, b) {  // 2nd a overrites first one & in strict mode throws on error
    console.log(a, a, b);
}

myFunc(1, 2, 3);