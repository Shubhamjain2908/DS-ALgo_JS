/**
 * Amazon
 * 
 * At a popular bar, each customer has a set of favorite drinks, and will happily accept any drink among this set. 
 * For example, in the following situation, customer 0 will be satisfied with drinks 0, 1, 3, or 6.

    preferences = {
        0: [0, 1, 3, 6],
        1: [1, 4, 7],
        2: [2, 4, 7, 5],
        3: [3, 2, 5],
        4: [5, 8]
    }
    A lazy bartender working at this bar is trying to reduce his effort by limiting the drink recipes he must memorize. 
    Given a dictionary input such as the one above, return the fewest number of drinks he must learn in order to satisfy all customers.

    For the input above, the answer would be 2, as drinks 1 and 5 will satisfy everyone.
 */

const fewestDrinks = (preferences, m, n) => {
    const arr = Array.from(Array(m), () => new Array(n + 1).fill(0))
    //filling the arr
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < preferences[i].length; j++) {
            let ind = preferences[i][j];
            arr[ind][i] = 1;
        }
    }
    //filling the last column of the arr
    for (let i = 0; i < m; i++) {
        let sum = 0;
        for (let j = 0; j < n; j++) {
            sum += arr[i][j];
        }
        arr[i][n] = sum;
    }

    let p = n; // creating a counter variable to track the number of customers left
    let count = 0; // counter variable to track the output

    while (p > 0) {
        let index = 0;
        let maxim = 0;
        // for loop to find the row index which has the maximum sum value
        for (let i = 0; i < m; i++)
            if (arr[i][n] > maxim) {
                maxim = arr[i][n];
                index = i;
            }
        count++; // increasing the count as we found out one drink which serves the maximum number of customers

        p = p - maxim;
        // for loop to eliminate the already counted drinks and customers and to calculate the new sum
        for (let i = 0; i < n; i++) {
            if (arr[index][i] == 1) {
                for (let j = 0; j < m; j++) {
                    if (arr[j][i] == 1) {
                        arr[j][i] = 0;
                        arr[j][n] -= 1;
                    }
                }
            }
        }
    }


    return count;
}

const preferences = {
    0: [0, 1, 3, 6],
    1: [1, 4, 7],
    2: [2, 4, 7, 5],
    3: [3, 2, 5],
    4: [5, 8]
};

console.log(fewestDrinks(preferences, 9, 5));