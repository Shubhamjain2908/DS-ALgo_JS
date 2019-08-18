function caesarCipher(str, num) {
    num = num % 26;
    var lowerCaseString = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var newString = '';

    for (let i = 0; i < lowerCaseString.length; i++) {
        const currentLetter = lowerCaseString[i];
        if (currentLetter === ' ') {
            newString += currentLetter;
            continue;
        }
        const currentIndex = alphabet.indexOf(currentLetter);
        var newIndex = currentIndex + num;
        if (newIndex > 25) {
            newIndex = newIndex - 26;
        } else if (newIndex < 0) {
            newIndex = 26 + newIndex;
        }
        if (str[i] === str[i].toUpperCase()) {
            newString += alphabet[newIndex].toUpperCase();
        } else {
            newString += alphabet[newIndex];
        }
    }
    return newString;
}

var s = caesarCipher('zoo keeper', 2);
console.log(s);