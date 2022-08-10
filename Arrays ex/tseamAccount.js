function tseamAccount(input) {
    let games = input.shift();
    let gamesArr = games.split(' ');
    let inputString = input.join(' ');
    let commandArr = inputString.split(' ');
    for (let i = 0; i < commandArr.length; i += 2) {
        if (commandArr[i] === 'Play!') {          
            break;
        }
        switch (commandArr[i]) {
            case 'Install':
                if (!gamesArr.includes(commandArr[i + 1])) {
                    gamesArr.push(commandArr[i + 1]);
                }
                break;
            case 'Uninstall':
                if (gamesArr.includes(commandArr[i + 1])) {
                    let index = gamesArr.indexOf(commandArr[i + 1]);
                    gamesArr.splice(index, 1);
                }
                break;
            case 'Update':
                if (gamesArr.includes(commandArr[i + 1])) {
                    let index = gamesArr.indexOf(commandArr[i + 1]);
                    gamesArr.splice(index, 1);
                    gamesArr.push(commandArr[i + 1]);
                }
                break;
            case 'Expansion':
                let temp = commandArr[i + 1];
                let tempArr = temp.split('-');
                if (gamesArr.includes(tempArr[0])) {
                    let game = tempArr[0];
                    let index = gamesArr.indexOf(tempArr[0]);
                    gamesArr[index] = game + ' ' + tempArr.join(':');                   
                }
                break;
        }
    }
    console.log(gamesArr.join(' '));
}
tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!','Blabla','Game']

)