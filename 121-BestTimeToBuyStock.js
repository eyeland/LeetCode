//<---WRONG SOLUTION PASS 50% Test ---->

// var maxProfit = function(prices) {
//     let low = prices[0]
//     let high = prices[1]
//     for(let i = 1; i < prices.length; i++) {
//         if (low > prices[i]) low = prices[i]
//         if (prices[i + 1]) if (high < prices[i + 1]) high = prices[i + 1]
//     }
    
//     return high - low ? high - low : 0
// };


//Dynamic 
function maxProfit(prices) {

    let buy = prices[0]
    prices[0] = 0
    let profit = 0
    for (let i = 1; i < prices.length; i++) {

        if(buy > prices[i]){
            buy = prices[i]
            prices[i] = 0
        } else {
            profit = Math.max(prices[i]-buy, profit);
        }
    }
    return profit;
}


