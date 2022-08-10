function gladiatorInventory(mainArray) {
    let inventory = mainArray.shift().split(' ');
    for (const element of mainArray) {
        let commandArr = element.split(' ');
        let eqPiece = commandArr[1];
        switch (commandArr[0]) {
            case 'Buy':
                if (!inventory.includes(eqPiece)) {
                    inventory.push(eqPiece);
                }
                break;
            case 'Trash':
                if (inventory.includes(eqPiece)) {
                    let eqIndex = inventory.indexOf(eqPiece);
                    inventory.splice(eqIndex, 1);
                }
                break;
            case 'Repair':
                if (inventory.includes(eqPiece)) {
                    let eqIndex = inventory.indexOf(eqPiece);
                    let repaired = inventory.splice(eqIndex, 1);
                    inventory.push(repaired);
                }
                break;
            case 'Upgrade':               
                let upgradeArr = eqPiece.split('-');
                let pieceToBeUpgraded = upgradeArr[0];
                eqIndex = inventory.indexOf(pieceToBeUpgraded);
                if (inventory.includes(pieceToBeUpgraded)) {                   
                    let upgraded = upgradeArr.join(':');
                    inventory.splice(eqIndex + 1, 0, upgraded);
                }
                break;

        }
    }
    console.log(inventory.join(' '))

}
gladiatorInventory(['SWORD Shield Spear',
'Trash Bow',
'Repair Shield',
'Upgrade Helmet-V']

)