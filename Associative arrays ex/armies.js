function armies(input) {
    let warlords = {}
    for (let currLine of input) {
        if (currLine.includes('arrives')) {
            let split = currLine.split(' ');
            split.pop();
            let nameOfWarlord = split.join(' ');
            warlords[nameOfWarlord] = {};
            warlords[nameOfWarlord].totalArmyCount = 0;
        } else if (currLine.includes(':')) {
            let [nameOfWarlord, army] = currLine.split(': ');
            if (warlords.hasOwnProperty(nameOfWarlord)) {
                let [armyName, armyCount] = army.split(', ');
                warlords[nameOfWarlord][armyName] = Number(armyCount);
                warlords[nameOfWarlord].totalArmyCount += Number(armyCount);
            }
        } else if (currLine.includes('+')) {
            let [armyName, armyCount] = currLine.split(' + ');
            let warlordEntries = Object.entries(warlords);
            for (let [warlordName, currWarInfo] of warlordEntries) {
                if (currWarInfo.hasOwnProperty(armyName)) {
                    warlords[warlordName][armyName] += Number(armyCount);
                    warlords[warlordName].totalArmyCount += Number(armyCount);                   
                }
            }
        } else {
            let split = currLine.split(' ');
            split.pop();
            let nameOfWalord = split.join(' ');
            delete warlords[nameOfWalord];
        }
    }
    let warlordsEntries = Object.entries(warlords);   
    let sortedByTotalArmyCount = warlordsEntries.sort((a,b) => b[1].totalArmyCount - a[1].totalArmyCount);    
    for (let [warlord, warlordInfo] of sortedByTotalArmyCount) {
        console.log(`${warlord}: ${warlordInfo.totalArmyCount}`);
        delete warlordInfo['totalArmyCount'];
        let warlordInfoEntries = Object.entries(warlordInfo);
        let sortedByArmyCount = warlordInfoEntries.sort((a,b) => b[1] -a[1])
        for (let [armyName, armyCount] of sortedByArmyCount) {
            console.log(`>>> ${armyName} - ${armyCount}`)
        }
    }
}
armies(['Rick Burr arrives', 'Fergus: Wexamp, 30245', 'Rick Burr: Juard, 50000', 'Findlay arrives', 
'Findlay: Britox, 34540', 'Wexamp + 6000', 'Juard + 1350', 'Britox + 4500', 
'Porter arrives', 'Porter: Legion, 55000', 'Legion + 302', 'Rick Burr defeated', 'Porter: Retix, 3205'])