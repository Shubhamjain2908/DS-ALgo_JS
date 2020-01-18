/**
 * Apple
 *
 * In many spreadsheet applications, the columns are marked with letters. From the 1st to the 26th column the letters are A to Z. 
 * Then starting from the 27th column it uses AA, AB, ..., ZZ, AAA, etc.
    Given a number n, find the n-th column name.

    Input: 26, Output: Z
    Input: 27, Output: AA
    Input: 28, Output: AB
 */

const spreadsheetColName = n => {

    let charMap = {
        0: "Z",
        1: "A",
        2: "B",
        3: "C",
        4: "D",
        5: "E",
        6: "F",
        7: "G",
        8: "H",
        9: "I",
        10: "J",
        11: "K",
        12: "L",
        13: "M",
        14: "N",
        15: "O",
        16: "P",
        17: "Q",
        18: "R",
        19: "S",
        20: "T",
        21: "U",
        22: "V",
        23: "W",
        24: "X",
        25: "Y"
    };


    let title = "";

    if (n <= 26) {
        return charMap[n % 26]
    }

    while (n > 0) {
        let r = n % 26;

        n = Math.floor(n / 26);

        if (r == 0) {
            r = 0;
            n = n - 1;
        }
        title = charMap[r] + title;
    }

    return title;

};

const spreadsheetColName2 = n => {
    if (n < 27) return String.fromCharCode(n + 64);
    var s = '';
    while (n > 0) {
        var temp = n % 26;
        temp = temp == 0 ? 26 : temp;
        s = String.fromCharCode(temp + 64) + s;
        n -= temp;
        n /= 26;
    }
    return s;
}

console.log(spreadsheetColName(26), spreadsheetColName2(26));
console.log(spreadsheetColName(27), spreadsheetColName2(27));
console.log(spreadsheetColName(28), spreadsheetColName2(28));