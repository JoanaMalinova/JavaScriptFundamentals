function repeatString(word, repeatCount) {
    let result = '';
    for (let i = 0; i < repeatCount; i++) {
        result += word;
    }
    return result;
}
repeatString("abc", 3)