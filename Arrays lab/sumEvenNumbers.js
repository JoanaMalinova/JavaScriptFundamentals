function sumEvenNumbers(input) {
    let sum = 0;
    for(let number of input){
        number = Number(number);
        if(number % 2 === 0 ){
            sum += number;
        }
    }
    console.log(sum);
}
sumEvenNumbers(['3','5','7','9'])