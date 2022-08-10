function specialNumbers(n) {

    for (let i = 1; i <= n; i++) {
        let number = i.toString()
        let sum = 0;
        for (let j = 0; j < number.length; j++) {
            sum += Number(number[j]);                     
        }
        console.log(sum === 5|| sum === 7|| sum === 11? `${number} -> True`: `${number} -> False` )  
        
    }
}
specialNumbers(20)