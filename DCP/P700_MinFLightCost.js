/**
 * AirBnB
 * 
 * You are given a huge list of airline ticket prices between different cities around the world on a given day. These are all direct flights. 
 * Each element in the list has the format (source_city, destination, price).

    Consider a user who is willing to take up to k connections from their origin city A to their destination B. 
    Find the cheapest fare possible for this journey and print the itinerary for that journey.

    For example, our traveler wants to go from JFK to LAX with up to 3 connections, and our input flights are as follows:

    [
        ('JFK', 'ATL', 150),
        ('ATL', 'SFO', 400),
        ('ORD', 'LAX', 200),
        ('LAX', 'DFW', 80),
        ('JFK', 'HKG', 800),
        ('ATL', 'ORD', 90),
        ('JFK', 'LAX', 500),
    ]
    Due to some improbably low flight prices, the cheapest itinerary would be JFK -> ATL -> ORD -> LAX, costing $440.
 */

const getCityMap = (flights) => {
    const cityMap = new Map();
    flights.forEach(f => {
        let src = f[0], dst = f[1], fare = f[2];
        if (!cityMap.has(dst)) {
            cityMap.set(dst, []);
        }
        cityMap.get(dst).push([src, fare]);
    });
    return cityMap;
}

const get_cheapest_fare = (src, tgt, maxStops, cityMap, total = 0, stops = 0) => {
    if (stops > maxStops)
        return Number.MAX_SAFE_INTEGER

    if (src == tgt)
        return total

    let newTgtFares = cityMap.get(tgt)
    let possibilities = [];
    newTgtFares.forEach(e => {
        let new_tgt = e[0], fare = e[1];
        let poss = get_cheapest_fare(src, new_tgt, maxStops, cityMap, total + fare, stops + 1)
        possibilities.push(poss)
    })
    return Math.min(...possibilities);
}
const flights = [
    ['JFK', 'ATL', 150],
    ['ATL', 'SFO', 400],
    ['ORD', 'LAX', 200],
    ['LAX', 'DFW', 80],
    ['JFK', 'HKG', 800],
    ['ATL', 'ORD', 90],
    ['JFK', 'LAX', 500],
];
const cityMap = getCityMap(flights);
console.log(get_cheapest_fare("JFK", "LAX", 3, cityMap));
