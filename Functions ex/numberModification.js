function numberModification(number) {
    let sum = 0;
    let numToString = number.toString();
    let numToStringL = numToString.length
    for (let i = 0; i < numToStringL; i++) {
        let char = numToString[i];
        let digit = Number(char);
        sum += digit;        
    }
    if(sum / numToStringL < 5 ){
        number = number.toString();
        numberModification(number + 9);
    }else{
        console.log(number);
    }

}
numberModification(101)
numberModification(5835)