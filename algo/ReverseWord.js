function reverseWords(string) {
    var arr = string.split(' ');
    for (let i = 0; i < arr.length; i++) {
        const rev = reverseWord(arr[i]);
        arr[i] = rev;
    }
    return arr.join(' ');
}

const reverseWord = function (word) {
    var revWord = '';
    for (let i = word.length; i >= 0; i--) {
        revWord += word.charAt(i);
    }
    return revWord;
}

console.log(reverseWords('Shubham jain is a good programmer!!'))