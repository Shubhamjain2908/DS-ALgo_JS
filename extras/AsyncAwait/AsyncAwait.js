console.log('preson1: shows ticket');
console.log('preson2: shows ticket');

// unlike regular function 'async' function always returns Promise
// 'await' can only be used inside an 'async' function
const preMovie = async () => {
    
    const promiseWifeBrigingTicket = new Promise((resolve, reject) => {
        setTimeout(() => resolve('ticket'), 3000);
    });
    
    const getPopcorn = new Promise(resolve => resolve('popcorn'));

    let ticket = await promiseWifeBrigingTicket;
    
    console.log(`wife: i have the ${ticket}`);
    console.log('husband: we should go in');
    console.log('wife: no i am hungry');
    
    let popcorn = await getPopcorn;

    console.log(`husband: I got some ${popcorn}`);
    console.log('husband: we should go in');
    console.log('wife: I need butter on my popcorn');

    const addButter = new Promise(resolve => resolve('butter'));

    let butter = await addButter;
    console.log(`husband: I got some ${butter} on popcorn`);
    console.log('husband: anything else darling?');
    console.log('wife: lets go we are getting late');
    console.log('husband: thank you for the reminder *grins*');

    return ticket;
}

preMovie().then(m => console.log(`preson4: shows ${m}`));

console.log('preson4: shows ticket');
console.log('preson5: shows ticket');