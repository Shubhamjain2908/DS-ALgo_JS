/**
 * Function to find Maximum possible profit of the day
 * @param {Array} pricesArr
 * @returns {int} maxProfit || -1
 */
function maxStockProfit(pricesArr) {
    let maxProfit = -1;
    let buyPrice = 0;
    let sellPrice = 0;

    let changeBuyPrice = true;

    for (let i = 0; i < pricesArr.length; i++) {
        if (changeBuyPrice) {
            buyPrice = pricesArr[i];
        }
        sellPrice = pricesArr[i + 1];
        if (sellPrice < buyPrice) {
            changeBuyPrice = true;
        } else {
            const tempProfit = sellPrice - buyPrice;
            maxProfit = tempProfit > maxProfit ? tempProfit : maxProfit;
            changeBuyPrice = false;
        }
    }
    return maxProfit;
}

console.log(maxStockProfit([32, 46, 26, 38, 40, 48, 42])); // 22