// leetcode 123. Best Time to Buy and Sell Stock III
// dp
// time: o(n)
// space: o(1)

function maxProfit(prices) {
    const buys = new Array(3).fill(-Infinity);
    const sells = new Array(3).fill(0);
    for (let i=0; i<prices.length; i++) {
        for (let j=1; j<3; j++) {
            buys[j] = sells[j - 1] - prices[i] > buys[j] ? sells[j - 1] - prices[i] : buys[j];
            sells[j] = buys[j] + prices[i] > sells[j] ? buys[j] + prices[i] : sells[j];
        }
    }
    return sells[2];
};
