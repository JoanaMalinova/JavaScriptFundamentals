function printAndSum(start,end) {
    let sum = 0;
    let println = '';
    for (let i = start; i <=end; i++) {
        sum += i;
        println += "" + i + " ";

        
    }
    console.log(println);
    console.log("Sum: "+sum);

}
printAndSum(5,10)