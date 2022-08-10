function activationKeys(input) {
    let rawActivationKey = input.shift();
    for (let command of input) {
        let commandArr = command.split('>>>');
        if (command === 'Generate') {
            break;
        }
        if (commandArr[0] === 'Contains') {
            let substring = commandArr[1];
            if (rawActivationKey.includes(substring)) {
                console.log(`${rawActivationKey} contains ${substring}`)
            } else {
                console.log('Substring not found!')
            }
        } else if (commandArr[0] === 'Flip') {
            let letterCase = commandArr[1];
            let startIndex = commandArr[2];
            let endIndex = commandArr[3];
            let firstPart = rawActivationKey.substring(0, startIndex);
            let finalPart = rawActivationKey.substring(endIndex, rawActivationKey.length);
            let substring = rawActivationKey.substring(startIndex, endIndex);
            if (letterCase === 'Upper') {
                substring = substring.toUpperCase();
            } else {
                substring = substring.toLowerCase();
            }
            rawActivationKey = firstPart + substring + finalPart;
            console.log(rawActivationKey);
        } else {
            let startIndex = commandArr[1];
            let endIndex = commandArr[2];
            let substring = rawActivationKey.substring(startIndex, endIndex);
            rawActivationKey = rawActivationKey.replace(substring, '');
            console.log(rawActivationKey);
        }
    }
    console.log(`Your activation key is: ${rawActivationKey}`);
}
activationKeys((["abcdefghijklmnopqrstuvwxyz",
    "Slice>>>2>>>6",
    "Flip>>>Upper>>>3>>>14",
    "Flip>>>Lower>>>5>>>7",
    "Contains>>>def",
    "Contains>>>deF",
    "Generate"])
)