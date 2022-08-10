function starEnigma(input) {
    let planetCount = Number(input.shift());
    let decrypted = [];
    for (let i = 0; i < planetCount; i++) {
       let currMessage = input[i];
       let starPatttern = /[star]/gi;
       let starMatches = currMessage.match(starPatttern);
       let desipher = 0;
       if(starMatches) {
           desipher = starMatches.length;
       }     
       let currDecryptedMessage = '';
       for (let currChar of currMessage) {
           let currValue = currChar.charCodeAt(0);
           let newValue = currValue - desipher;
           let newChar = String.fromCharCode(newValue);
           currDecryptedMessage += newChar;
       }
       decrypted.push(currDecryptedMessage); 
    }
    let attackedPlanets = [];
    let destroyedPlanets = [];
    for (let currMessage of decrypted) {
        let planetPattern = /@(?<planetName>[A-Za-z]+)[^@\-!:>]*:\d+[^@\-!:>]*!(?<attackType>[AD]{1})![^@\-!:>]*->\d+/gm;
        while((planetMatch = planetPattern.exec(currMessage)) != null){
            let planet = planetMatch.groups['planetName'];            
            let attack = planetMatch.groups['attackType'];           
            if(attack === 'A'){
                attackedPlanets.push(planet);
            }else {
                destroyedPlanets.push(planet);
            }
        }
    }
    attackedPlanets = attackedPlanets.sort((a, b) => {
        return a.localeCompare(b)
    })
    destroyedPlanets = destroyedPlanets.sort((a,b) => {
        return a.localeCompare(b)
    })
    console.log(`Attacked planets: ${attackedPlanets.length}`);
    attackedPlanets.forEach(planet => {
        console.log(`-> ${planet}`);
    });
    console.log(`Destroyed planets: ${destroyedPlanets.length}`)
    destroyedPlanets.forEach(planet => {
        console.log(`-> ${planet}`);
    })
}
starEnigma(['2',
'STCDoghudd4=63333$D$0A53333',
'EHfsytsnhf?8555&I&2C9555SR']
)