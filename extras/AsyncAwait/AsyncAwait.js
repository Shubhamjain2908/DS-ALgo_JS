console.log('preson1: shows ticket');
console.log('preson2: shows ticket');

// unlike regular function 'async' function always returns Promise
// 'await' can only be used inside an 'async' function
const preMovie = async () => {
    
    const promiseWifeBrigingTicket = new Promise((resolve, reject) => {
        setTimeout(() => reject('ticket'), 3000);
    });
    
    const getPopcorn = new Promise(resolve => resolve('popcorn'));

    const getCandy = new Promise(resolve => resolve('candy'));
    
    const getCoke = new Promise(resolve => resolve('coke'));

    let ticket;
    
    try {
        ticket = await promiseWifeBrigingTicket;
        let [popcorn, candy, coke] = await Promise.all([getPopcorn, getCandy, getCoke]);

    console.log(`${popcorn}, ${candy}, ${coke}`);

    } catch (err) {
        ticket = 'sad face';
    }

    return ticket;
}

preMovie().then(m => console.log(`preson4: shows ${m}`));

console.log('preson4: shows ticket');
console.log('preson5: shows ticket');