function theImitationGame(input) {
    let message = input.shift();
    for (let command of input) {
        if (command === 'decode') {
            break;
        }
        let commandArr = command.split('|');
        if (commandArr.includes('Move')) {
            let letterCount = commandArr[1];
            let secondPart = message.substring(0, letterCount);
            let firstPart = message.substring(letterCount, message.length);
            message = firstPart + secondPart;
        } else if (commandArr.includes('Insert')) {
            let index = commandArr[1];
            let char = commandArr[2];
            let firstPart = message.substring(0, index);
            let secondPart = message.substring(index, message.length);
            message = firstPart + char + secondPart;            
        } else {
            let partToReplace = commandArr[1];
            let replacement = commandArr[2];
            while (message.includes(partToReplace)) {
                message = message.replace(partToReplace, replacement);
            }
        }
    }
    console.log(`The decrypted message is: ${message}`)    

}
theImitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode',
])