function heroesOfCodeAndLogicVII(input) {
    let heroCount = input.shift();
    let heroes = {};
    for (let i = 0; i < heroCount; i++) {
        let [hero, hitPoints, mana] = input[i].split(' ');
        heroes[hero] = {
            hitPoints: Number(hitPoints),
            mana: Number(mana)
        };
    }
    input.splice(0, heroCount);
    for (let currAction of input) {
        if (currAction === 'End') {
            break;
        }
        let actionArr = currAction.split(' - ');
        let heroName = actionArr[1];
        if (actionArr.includes('CastSpell')) {
            let manaNeeded = Number(actionArr[2]);
            let spellName = actionArr[3];
            if (heroes[heroName].mana >= manaNeeded) {
                heroes[heroName].mana = heroes[heroName].mana - manaNeeded;
                console.log(`${heroName} has successfully cast ${spellName} and now has ${heroes[heroName].mana} MP!`)
            } else {
                console.log(`${heroName} does not have enough MP to cast ${spellName}!`)
            }
        } else if (actionArr.includes('TakeDamage')) {
            let damage = Number(actionArr[2]);
            let attacker = actionArr[3];
            if (heroes[heroName].hitPoints - damage > 0) {
                heroes[heroName].hitPoints = heroes[heroName].hitPoints - damage;
                console.log(`${heroName} was hit for ${damage} HP by ${attacker} and now has ${heroes[heroName].hitPoints} HP left!`)
            } else {
                delete heroes[heroName];
                console.log(`${heroName} has been killed by ${attacker}!`)
            }

        } else if (actionArr.includes('Recharge')) {
            let amountOfMana = Number(actionArr[2]);
            if (heroes[heroName].mana + amountOfMana >= 200) {
                amountOfMana = 200 - heroes[heroName].mana;
                heroes[heroName].mana = 200;
            } else {
                heroes[heroName].mana = heroes[heroName].mana + amountOfMana;
            }
            console.log(`${heroName} recharged for ${amountOfMana} MP!`)
        } else {
            let amountOfHitPoints = Number(actionArr[2]);
            if (heroes[heroName].hitPoints + amountOfHitPoints >= 100) {
                amountOfHitPoints = 100 - heroes[heroName].hitPoints;
                heroes[heroName].hitPoints = 100;
            } else {
                heroes[heroName].hitPoints = heroes[heroName].hitPoints + amountOfHitPoints;
            }
            console.log(`${heroName} healed for ${amountOfHitPoints} HP!`)
        }
    }
    let heroEntries = Object.entries(heroes);
    for (let [hero, heroInfo] of heroEntries) {
        console.log(hero);
        console.log(`HP: ${heroInfo.hitPoints}`);
        console.log(`MP: ${heroInfo.mana}`)
    }
}
heroesOfCodeAndLogicVII(['2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End']
)