function binaryToDecimal(binaryNum) {
    let binaryString = ''+ binaryNum;
    let decimal = 0;
    let power = binaryString.length-1;
    
    for (let i = 0; i < binaryString.length; i++) {
       
        decimal += Number(binaryString[i]) * Math.pow(2,power);
        power --;
    }
    console.log(decimal);

}
binaryToDecimal('11110000')
