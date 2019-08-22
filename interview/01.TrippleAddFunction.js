// Currying a function
function tripleAdd(num1) {
    return function (num2) {
        return function (num3) {
            return num1 + num2 + num3;
        }
    }
}

function tripleAdd1(num1, num2, num3) {
    return num1 + num2 + num3;
}

const tripleAddES6 = (num1) => {
    return (num2) => {
        return (num3) => {
            return num1 + num2 + num3;
        }
    }
}

const aaa = num1 => num2 => num3 => num1 + num2 + num3;

// returns total of all 3 numbers added together
const t = tripleAdd(10)(20)(30);
const t2 = tripleAddES6(10)(20)(30);

console.log(t, t2);
console.log(aaa(29)(82)(197));

// Quadruple Function
const quadrupleAdd = (num1) => {
    return (num2) => {
        return (num3, num4) => {
            return num1 + num2 + num3 + num4;
        }
    }
};

const aaaa = num1 => num2 => (num3, num4) => num1 + num2 + num3 + num4;

console.log(quadrupleAdd(22)(34)(83, 11));
console.log(aaaa(32)(72)(40, 59));