function smallestOfThreeNumbers(n1,n2,n3){
    let smallest = Number.MAX_SAFE_INTEGER;
    let Arr = [];
    Arr.push(n1,n2,n3);
    for (const number of Arr) {
        if(number < smallest){
            smallest  = number;
        }
    }
    return smallest;  

}