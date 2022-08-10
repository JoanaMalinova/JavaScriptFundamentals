function gladiatorExpenses(lostFight, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let helmetExpenses = 0;
    let swordExpenses = 0;
    let shieldExpenses = 0;
    let armorExpenses = 0;
    let counter = 0;

    for (let i = 1; i <= lostFight; i++) {

        if (i % 2 === 0) {
            helmetExpenses += helmetPrice;
            if (i % 3 === 0) {
                swordExpenses += swordPrice;
                shieldExpenses += shieldPrice;
                counter++;
                if (counter % 2 === 0) {
                    armorExpenses += armorPrice;
                }
            }
        } else if (i % 3 === 0) {
            swordExpenses += swordPrice;
        }


    }
    console.log(`Gladiator expenses: ${(helmetExpenses + swordExpenses + shieldExpenses +armorExpenses).toFixed(2)} aureus`)
}

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
    
    )