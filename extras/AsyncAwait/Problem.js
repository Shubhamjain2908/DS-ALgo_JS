console.log('preson1: shows ticket');
console.log('preson2: shows ticket');

const promiseWifeBrigingTicket = new Promise((resolve, reject) => {
    setTimeout(() => resolve('ticket'), 3000);
});

const getPopcorn = promiseWifeBrigingTicket.then((t) => {
    console.log('wife: i have the Ticket');
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');

    return new Promise((resolve, reject) => resolve(`${t} popcorn`));
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: I got some Popcorn');
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    return new Promise((resolve, reject) => resolve(`${t} butter`));
});

getButter.then(t => console.log(t));

console.log('preson4: shows ticket');
console.log('preson5: shows ticket');