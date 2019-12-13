/**
 * Amazon
 *
 * MS Excel column titles have the following pattern: A, B, C, ..., Z, AA, AB, ..., AZ, BA, BB, ..., ZZ, AAA, AAB, ... etc.
 * In other words, column 1 is named "A", column 2 is "B", column 26 is "Z", column 27 is "AA" and so forth. Given a positive integer, find its corresponding column name.
    Examples:
        Input: 26
        Output: Z

        Input: 51
        Output: AY

        Input: 52
        Output: AZ

        Input: 676
        Output: YZ

        Input: 702
        Output: ZZ

        Input: 704
        Output: AAB
 */

const spreadsheetColTitle = columnNumber => {
    // To store result (Excel column name) 
    let columnName = [];

    while (columnNumber > 0) {
        // Find remainder 
        let rem = columnNumber % 26;

        // If remainder is 0, then a  
        // 'Z' must be there in output 
        if (rem == 0) {
            columnName.push('Z');
            columnNumber = Math.floor(columnNumber / 26) - 1;
        }
        else // If remainder is non-zero 
        {
            columnName.push(String.fromCharCode((rem - 1) + +'A'.charCodeAt(0)));
            columnNumber = Math.floor(columnNumber / 26);
        }
    }

    // Reverse the string and print result 
    return columnName.reverse().join('');
}

console.log(spreadsheetColTitle(26));  // Z
console.log(spreadsheetColTitle(51));  // AY
console.log(spreadsheetColTitle(52));  // AZ
console.log(spreadsheetColTitle(676));  // YZ
console.log(spreadsheetColTitle(702));  // ZZ
console.log(spreadsheetColTitle(704));  // AAB