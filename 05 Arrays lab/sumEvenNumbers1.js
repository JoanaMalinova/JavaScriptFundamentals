function sumEvenNumbers1(input){
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        let number = Number(input[i]);
        if(number % 2 === 0){
            sum += number;
        }
    }
    console.log(sum)
}
sumEvenNumbers1(['2','4','6','8','10'])