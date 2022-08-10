function memoryGame(mainArr) {
    numberArr = mainArr.shift().split(' ');
    for (let i = 0; i < mainArr.length; i++) {
        if (mainArr[i] === 'end') {
            break;
        }
        let currentTwinsArr = mainArr[i].split(' ');
        let indexFirst = Number(currentTwinsArr[0]);
        let indexSecond = Number(currentTwinsArr[1]);

        if (indexFirst < 0 || indexSecond < 0 ||
            indexFirst > numberArr.length - 1 ||
            indexSecond > numberArr.length - 1 ||
            indexFirst === indexSecond) {
            console.log("Invalid input! Adding additional elements to the board");
            numberArr.splice(numberArr.length / 2, 0, `-${i + 1}a`, `-${i + 1}a`);

        } else {
            if (numberArr[indexFirst] === numberArr[indexSecond]) {
                console.log(`Congrats! You have found matching elements - ${numberArr[indexFirst]}!`);
                numberArr.splice(indexFirst, 1);
                if(indexFirst < indexSecond){
                    numberArr.splice(indexSecond - 1, 1);
                }else{
                    numberArr.splice(indexSecond, 1);
                }                              
            } else {
                console.log('Try again!');
            }
        }
        if (numberArr.length < 1) {
            console.log(`You have won in ${i + 1} turns!`);
            return
        }
    }
    console.log('Sorry you lose :(');
    console.log(numberArr.join(' '))

}
memoryGame([
    "a 2 4 a 2 4",
    "0 3",
    "0 2",
    "0 1",
    "0 1",
    "end"
]
)