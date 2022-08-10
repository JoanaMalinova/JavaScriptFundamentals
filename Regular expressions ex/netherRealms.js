function netherRealms(input) {
    let splitPattern = /\s*,\s*/g;
    let demons = {};
    let demonArr = input.split(splitPattern);
    for (let currDemon of demonArr) {
        let demonHealthPattern = /[^\d+\-\*\/.]/g;
        let letterMatches = currDemon.match(demonHealthPattern);        
        let demonHealth = 0;
        if(letterMatches){
            for (let currLetter of letterMatches) {
                let asciiValue = currLetter.charCodeAt(0);
                demonHealth += asciiValue;
            }
        }        
        let demonBaseDamagePatt = /[+|-]?\d*\.?\d+/g;
        let numbersMatches = currDemon.match(demonBaseDamagePatt);
        let baseDamage = 0
        if (numbersMatches) {
            for (let currNumber of numbersMatches) {
                baseDamage += Number(currNumber);
            }
            let aditionalDamagePatt = /[*\/]/g;
            let mulltiplyDivideArr = currDemon.match(aditionalDamagePatt);
            if (mulltiplyDivideArr) {
                for (let currChar of mulltiplyDivideArr) {
                    if (currChar === '*') {
                        baseDamage *= 2;
                    } else {
                        baseDamage /= 2;
                    }
                }
            }
        }
        demons[currDemon] = [];
        demons[currDemon].push(demonHealth, baseDamage);
    }
    let entries = Object.entries(demons);
    let sortedByName = entries.sort(([demonName, array], [nextDemon, nextArr]) => demonName.localeCompare(nextDemon))
    sortedByName.forEach(([demon, demArr]) => {
        let health = demArr[0];
        let damage = demArr[1];
        console.log(`${demon} - ${health} health, ${damage.toFixed(2)} damage`)
    });
}
netherRealms('Go-12s+3ho')