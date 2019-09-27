/**
 * Apple
 *
 * You are given an array. Each element represents the price of a stock on that particular day.
 * Calculate and return the maximum profit you can make from buying and selling that stock only once.

    For example: [9, 11, 8, 5, 7, 10]

    Here, the optimal trade is to buy when the price is 5, and sell when it is 10, so the return value should be 5 (profit = 10 - 5 = 5).
 */

const maxProfit = (array) => {
    let maxProfit = -1, buyPrice = 0, sellPrice = 0, changeBuyPrice = true;
    for (let i = 0; i < array.length - 1; i++) {
        const e = array[i];
        if (changeBuyPrice) {
            buyPrice = e;
        }
        sellPrice = array[i + 1];
        if (sellPrice < buyPrice) {
            changeBuyPrice = true;
        } else {
            const tempProfit = sellPrice - buyPrice;
            maxProfit = Math.max(maxProfit, tempProfit);
            changeBuyPrice = false;
        }
    }
    return maxProfit;
}

const arr = [9, 11, 8, 5, 7, 10];
console.log(maxProfit(arr));