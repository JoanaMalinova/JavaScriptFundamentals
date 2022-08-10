function smallestTwoNumbers1(array) {
    array.sort((a,b) => a - b);
    let result = array.slice(0,2);
    console.log(result.join(' '))

}
smallestTwoNumbers1(3,15,50,5)