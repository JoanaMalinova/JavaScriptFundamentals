function winningTicket2(input) {
    let splitPattern = /\s*,\s*/g;
    let ticketArr = input.split(splitPattern);
    let pattern = /@{6,}|#{6,}|\${6,}|\^{6,}/;
    for (let currTicket of ticketArr) {
        if(currTicket.length !== 20){
            console.log('invalid ticket');
            continue;
        }
        let leftHalf = currTicket.substring(0, 10);
        let rightHalf = currTicket.substring(10, 20 );
        let leftMatch = leftHalf.match(pattern);
        let rightMatch = rightHalf.match(pattern);
        if(leftMatch && rightMatch){
            let leftWinSymbol = leftMatch.join('')[0];
            let rightWInSymbol = rightMatch.join('')[0];           
            if(leftWinSymbol === rightWInSymbol && leftMatch[0].length === 10 && rightMatch[0].length === 10){
                console.log(`ticket "${currTicket}" - 10${leftWinSymbol} Jackpot!`);
            }else if(leftWinSymbol === rightWInSymbol){
                let winnerLength = 0;
                if(leftMatch[0].length > rightMatch[0].length){
                    winnerLength = rightMatch[0].length;
                }else{
                    winnerLength = leftMatch[0].length;
                }
                console.log(`ticket "${currTicket}" - ${winnerLength}${leftWinSymbol}`)
            }else{
                console.log(`${currTicket}" - no match`);
            }
        }else{
            console.log(`ticket "${currTicket}" - no match`);
        }        
    }
}
winningTicket2('$$$$$$$$$$$$$$$$$$$$, aabb  , th@@@@@@eemo@@@@@@ey')