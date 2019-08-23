// let p = new Promise((resolve, reject) => {
//     let a = 1 + 1;
//     if (a === 2) {
//         resolve('Success');
//     } else {
//         reject('Failed');
//     }
// });

// p.then((message) => console.log('This is resolve: ', message))
//     .catch((message) => console.log('This is reject: ', message));

const userLeft = false;
const userWatchingCatMeme = false;

console.log('===============Using Callbacks===============');

// Tradiotional callback functions
function watchTutorialCallback(callback, errorCallback) {
    if (userLeft) {
        errorCallback({
            name: 'User Left',
            message: ':('
        })
    } else if (userWatchingCatMeme) {
        errorCallback({
            name: 'User Watching Cat Meme',
            message: 'WebDevSimplified < Cat'
        })
    } else {
        callback('Thumbs up & subscribe');
    }
}

watchTutorialCallback((message) => {
    console.log('Success: ' + message)
}, (error) => {
    console.log(error.name + ' ' + error.message)
});

console.log('===============Using Promises===============');

// Using Promise
function watchTutorialPromise() {
    return new Promise((resolve, reject) => {
        if (userLeft) {
            reject({
                name: 'User Left',
                message: ':('
            })
        } else if (userWatchingCatMeme) {
            reject({
                name: 'User Watching Cat Meme',
                message: 'WebDevSimplified < Cat'
            })
        } else {
            resolve('Thumbs up & subscribe');
        }
    });
}

watchTutorialPromise().then((message) => {
    console.log('Success: ' + message)
}).catch((error) => {
    console.log(error.name + ' ' + error.message)
});

const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
});

const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
});

const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
});

const promiseArr = [recordVideoOne, recordVideoTwo, recordVideoThree];

// Waits for all promises to complete
Promise.all(promiseArr).then((messageArr) => {
    console.log(messageArr);
});

// Returns as soon as first promise is resolved
Promise.race(promiseArr).then((message) => {
    console.log(message);
});