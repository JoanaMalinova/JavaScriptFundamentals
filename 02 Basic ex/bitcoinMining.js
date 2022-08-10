function bitcoinMining(input){
    let gold = Number(input[0]);
    let totalMoney = 0;
    let bitcoins = 0;
    let totalBitcoins = 0;
    let counter = 0;
    let index = 1;
    let dayOf1stPurchase = 0;
    let boughtBitcins = false;
    while(!isNaN(gold)) {
        counter ++;
        let money = gold * 67.51;        
        if(counter % 3 === 0){
            money -= 0.3 * money;
        }
        totalMoney += money;
        if(totalMoney >= 11949.16) {
            boughtBitcins = true;
            bitcoins = Math.floor(totalMoney / 11949.16)
            totalBitcoins += bitcoins
            if(bitcoins === totalBitcoins){
                dayOf1stPurchase = counter;
            }
            totalMoney -= 11949.16 * bitcoins;
        }
        money = 0;
        gold = Number(input[index]);
        bitcoins = 0
        index++;


    }
    console.log(`Bought bitcoins: ${totalBitcoins}`);
    if(boughtBitcins){
        console.log(`Day of the first purchased bitcoin: ${dayOf1stPurchase}`)
    }
    console.log(`Left money: ${totalMoney.toFixed(2)} lv.`)

}
bitcoinMining([3124.15, 504.212, 2511.124])