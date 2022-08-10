function melrahShake(input) {
    let pattern = input.pop();
    let text = input.shift();
    while (text.includes(pattern)) {
        text = text.replace(pattern, '');
        if (text.includes(pattern)) {
            let firstIndexOfLast = text.lastIndexOf(pattern);
            let lastIndexOfLast = firstIndexOfLast + pattern.length;
            let firstPart = text.substring(0, firstIndexOfLast);
            let secondPart = text.substring(lastIndexOfLast, text.length);
            text = firstPart + secondPart;
            let charToRemoveFromPattern = pattern[Math.floor(pattern.length / 2)];
            pattern = pattern.replace(charToRemoveFromPattern, '');
            console.log('Shaked it.')
        }          
    }
    console.log('No shake.')
    console.log(text);
}
melrahShake(['##mtm!!mm.mm*mtm.#',
'mtm']

)