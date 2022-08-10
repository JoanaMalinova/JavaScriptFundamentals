function evenAndOddSubstarction(input) {
    let sumOdd = 0;
    let sumEven = 0;
    for(let number of input){
        if(number % 2 === 0){
            sumEven += number;
        }else {
            sumOdd += number;
        }
    }
    console.log(sumEven - sumOdd)

}
evenAndOddSubstarction([1,2,3,4,5,6])
evenAndOddSubstarction([3,5,7,9])
evenAndOddSubstarction([2,4,6,8,10])