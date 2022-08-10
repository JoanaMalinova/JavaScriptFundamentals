function sorting(array) {
    newArr = array.sort((a, b) => a - b);
    let resultArr = [];
    let arrayL = array.length
    for (let i = 0; i < arrayL / 2; i++) {
        let smallest = newArr.shift();
        let biggest = newArr.pop();
        if (!smallest) {
            resultArr.push(biggest);
        } else if (!biggest) {
            resultArr.push(smallest);
        } else {
            resultArr.push(biggest, smallest);
        }
    }
    console.log(resultArr.join(' '));

}
sorting([34, 2, 32, 45, 690, 6, 32, 7, 19, 47, -17])