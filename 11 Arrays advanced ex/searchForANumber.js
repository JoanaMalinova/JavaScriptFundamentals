function searchForANumber(array1, array2) {
    let elToTake = array2.shift();
    let elToDelete = array2.shift();
    let wantedNum = array2.shift();
    let counter = 0;
    let splicedArr = array1.splice(0,elToTake);
    splicedArr.splice(0,elToDelete);
    for (const element of splicedArr) {
        if(element === wantedNum){
            counter ++;
        }
    }
    console.log(`Number ${wantedNum} occurs ${counter} times.`);
    
}
searchForANumber([7, 1, 5, 8, 2, 7],
    [3, 1, 5]
    
    )