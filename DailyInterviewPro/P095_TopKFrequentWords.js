/**
 * AirBNB
 * 
 * Given a non-empty list of words, return the k most frequent words. 
 * The output should be sorted from highest to lowest frequency, and if two words have the same frequency, the word with lower alphabetical order comes first. Input will contain only lower-case letters.

    Example: 
    Input: ['daily', 'interview', 'pro', 'pro', 'for', 'daily', 'pro', 'problems'], k = 2
    Output: ['pro', 'daily']
 */

const topKFreqWords = (words, k) => {
    let wordMap = new Map();
    words.forEach(e => wordMap.has(e) ? wordMap.set(e, wordMap.get(e) + 1) : wordMap.set(e, 1));
    let sortedWords = [...wordMap].filter(v => v[1] >= k).sort((a, b) => a > b).sort((a, b) => b[1] - a[1]);
    let ans = [];
    let freq;
    for (let i = 0; i < sortedWords.length; i++) {
        const e = sortedWords[i];
        if (e[1] !== freq) {
            ans.push(e[0]);
            freq = e[1];
        }
    }
    return ans;
}

const words = ['daily', 'interview', 'pro', 'pro', 'for', 'daily', 'pro', 'problems'], k = 2;
console.log(topKFreqWords(words, k));