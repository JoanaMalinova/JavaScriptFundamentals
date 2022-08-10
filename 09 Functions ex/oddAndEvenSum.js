function oddAndEvenSum(input){
    let element;
    let sumOdd = 0;
    let sumEven = 0;
    let inputString = input.toString();
    let inputL = inputString.length;
    for (let i = 0; i < inputL; i++) {
        element = Number(inputString[i]); 
        if(element % 2 === 0){
            sumEven += element;
        }else {
            sumOdd += element;
        }           
    }
    let result = `Odd sum = ${sumOdd}, Even sum = ${sumEven}`    
    return result;

}
oddAndEvenSum(1000435)