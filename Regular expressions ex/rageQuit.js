function rageQuit(input) {   
    let finalRageMessage = '';
    let pattern = /(?<string>\D+)(?<number>\d+)/g;
    while((matches = pattern.exec(input)) !== null){
        let symbols = matches.groups['string'];
        let times = matches.groups['number'];              
        let currRageMessage = symbols.toUpperCase().repeat(times);
        finalRageMessage += currRageMessage;        
    }
    let setOfUniqueSymbols = new Set(finalRageMessage.split(''));
    let uniqueCount = setOfUniqueSymbols.size;
    console.log(`Unique symbols used: ${uniqueCount}`);
    console.log(finalRageMessage);
}
rageQuit('aSd2&5s@1')