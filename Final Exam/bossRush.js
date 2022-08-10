function bossRush(input){
    let count = input.shift();
    let pattern = /\|(?<name>[A-Z]{4,})\|:#(?<position>[A-Za-z]+ [A-Za-z]+)#/;
    for (let i = 0; i < count; i++) {
        let currentLine = input[i];
        if((match = pattern.exec(currentLine)) !== null){
            let bossName = match.groups['name'];
            let bossTitle = match.groups['position'];
            console.log(`${bossName}, The ${bossTitle}\n>> Strength: ${bossName.length}\n>> Armor: ${bossTitle.length}`);           

        }else{
            console.log('Access denied!')
        }
    }
}
bossRush(['3',
'|PETER|:#Lead architect#',
'|GEORGE|:#High Overseer#',
"|ALEX|:#Asssistant Game Developer#"
])