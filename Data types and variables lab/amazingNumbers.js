function amazingNumbers(num){
    let number = ""+ num;
    let sum = 0;
    let numIsAmazing = false;
    for (let i = 0; i < number.length; i++) {
       sum += Number(number[i]);        
    }
    let sumString = ""+sum;
    for (let j = 0; j < sumString.length; j++) {
        let digit = sumString[j]; 
        if(digit === "9") {
           numIsAmazing = true;
           break; 
        }      
    }
    if(numIsAmazing){
        console.log(`${num} Amazing? True`)       
    }else{
        console.log(`${num} Amazing? False`)
    }

}
amazingNumbers(1233)