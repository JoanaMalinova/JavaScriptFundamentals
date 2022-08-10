function processOddNumbers(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        if(i % 2 !== 0){
            newArr.push(array[i] * 2);
        }        
    }
    console.log(newArr.reverse().join(' '))
}
processOddNumbers([10, 15, 20, 25])