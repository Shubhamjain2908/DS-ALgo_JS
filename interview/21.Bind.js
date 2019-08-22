/**
 * The bind() method creates a new function that, when called, has its this keyword set to the provided value
 */

var pokemon = {
    firstname: 'Pika',
    lastname: 'Chu ',
    getPokeName: function () {
        var fullname = this.firstname + ' ' + this.lastname;
        return fullname;
    }
};

var pokemonName = function () {
    console.log(this.getPokeName() + 'I choose you!');
};

var logPokemon = pokemonName.bind(pokemon); // creates new object and binds pokemon. 'this' of pokemon === pokemon now

logPokemon(); // 'Pika Chu I choose you!

//========================================================================================================//

this.distance = 10000;

const roadTrip1 = {
    distance: 3000,
    getDistance: function (unit, caption) {
        console.log(this);
        return this.distance + unit + ', ' + caption;
    }
}

const roadTrip2 = {
    distance: 5000,
}

// const getTripDistance = roadTrip1.getDistance;

// console.log(getTripDistance()); // 10000

const getTripDistance2 = roadTrip1.getDistance.bind(roadTrip1, 'km');

console.log(getTripDistance2('left to go')); // 3000

const getTripDistance3 = roadTrip1.getDistance.bind(roadTrip2);

console.log(getTripDistance3(' mile', 'right to go')); // 3000