function smallestTwoNumbers(array) {

    let smallestArr = [];
    let smallest = Math.min(...array);
    let minIndex = array.indexOf(smallest);
    array.splice(minIndex,1);
    smallestArr.push(smallest);
    let secondSmallest = Math.min(...array);
    smallestArr.push(secondSmallest);  
    console.log(smallestArr.join(' ')); 
    
}
smallestTwoNumbers([30, 15, 50, 5])