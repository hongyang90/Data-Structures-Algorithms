function buySellStocks(prices){
    let result = 0;
    for (let i=1; i<prices;i++){
        if (prices[i] > prices[i-1]){
            result += prices[i]-prices[i-1];
        }
    }
    return result;
}