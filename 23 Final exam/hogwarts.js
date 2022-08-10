function hogwarts(input) {
    let spell = input.shift();
    for (let currCommand of input) {
        if (currCommand === 'Abracadabra') {
            break;
        }
        let commandArr = currCommand.split(' ');
        switch (commandArr[0]) {
            case 'Abjuration':
                spell = spell.toUpperCase();
                console.log(spell);
                break;
            case 'Necromancy':
                spell = spell.toLowerCase();
                console.log(spell);
                break;
            case 'Illusion':
                let index = Number(commandArr[1]);
                let replacementLetter = commandArr[2];
                if (!spell[index]) {
                    console.log('The spell was too weak.')
                } else {
                    let firstPart = spell.substring(0, index);
                    let secondPart = spell.substring(index + 1, spell.length);
                    spell = firstPart + replacementLetter + secondPart;
                    console.log('Done!')
                }
                break;
            case 'Divination':
                let substringToReplace = commandArr[1];
                let replacementString = commandArr[2];
                if (spell.includes(substringToReplace)) {
                    while (spell.includes(substringToReplace)) {
                        spell = spell.replace(substringToReplace, replacementString);
                    }
                    console.log(spell);
                }
                break;
            case 'Alteration':
                let substring = commandArr[1];
                if (spell.includes(substring)) {
                    spell = spell.replace(substring, '');
                    console.log(spell);
                }
                break;
            default:
                console.log('The spell did not work!')
                break;
        }
    }
}
hogwarts(['SwordMaster',
    'Target Target Target',
   'Abjuration',
    'Necromancy',
   'Alteration master',
    'Abracadabra'])