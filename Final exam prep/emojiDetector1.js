function emojiDetector1(input) {
    let validPattern = /[^:*]?(?<fisrtPart>\*{2}|:{2})(?<valuePart>[A-Z][a-z]{2,})\1[^:*]?/g;
    let coolPattern = /\d/g;
    let coolMatches = input[0].match(coolPattern);
    let coolThreshold = coolMatches.reduce((a, b) => Number(a) * Number(b));
    let validEmojis = validPattern.exec(input[0]);
    let emojiCount = 0;
    let emojiArr = [];
    console.log(`Cool threshold: ${coolThreshold}`);
    while (validEmojis) {
        emojiCount++;
        let totalValue = 0;
        let lettersOnly = validEmojis.groups['valuePart'];
        let firstAndLastPart = validEmojis.groups['fisrtPart'];
        let currEmoji = firstAndLastPart + lettersOnly + firstAndLastPart;        
        for (let currLetter of lettersOnly) {
            let value = currLetter.charCodeAt(0);
            totalValue += value;
        }
        if (totalValue >= coolThreshold) {
            emojiArr.push(currEmoji);
        }
        validEmojis = validPattern.exec(input[0]);
    }
    console.log(`${emojiCount} emojis found in the text. The cool ones are:`);
    emojiArr.forEach(element => {
        console.log(element);
    });
}
emojiDetector1(["In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**"])