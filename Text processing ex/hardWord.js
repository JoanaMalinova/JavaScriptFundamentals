function hardWord(input) {
    let letter = input[0];
    let letterArr = letter.split(' ');
    let wordsArr = input[1];
    for (let i = 0; i < letterArr.length; i++) {
        let currWord = letterArr[i];
        if (currWord.includes('_')) {
            let start = currWord.indexOf('_');
            let end = currWord.lastIndexOf('_');
            let emptySpace = currWord.substring(start, end + 1)
            wordsArr.forEach(element => { if(element.length === emptySpace.length){
                let newWord = currWord.replace(emptySpace, element);
                letterArr.splice(i, 1, newWord);
            }                
            });          
        }
    }
    console.log(letterArr.join(' '));
}
hardWord(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.', ['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']])