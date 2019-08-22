function harmlessRansomNote(noteText, magazineText) {
    var noteArr = noteText.split(' ');
    var magazineArr = magazineText.split(' ');
    var noteObj = {};

    noteArr.forEach(word => {
        if (!noteObj[word]) {
            noteObj[word] = 0;
        }
        noteObj[word]++;
    });
    magazineArr.forEach(word => {
        if (noteObj[word]) {
            noteObj[word]--;
            if (noteObj[word] == 0) {
                delete noteObj[word];
            }
        }
    });
    return Object.entries(noteObj).length === 0;
}

var v = harmlessRansomNote('this is a secret note for you from a secret admirer', 'puerto rico is a place of great wonder and excitement it has many secret waterfall locations that i am an admirer of you must hike quite a distance to find the secret places as they are far from populated areas but it is worth the effort a tip i have for you is to go early in the morning when it is not so hot out also note that you must wear hiking boots this is one of the best places i have ever visited');

console.log(v);