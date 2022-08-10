function bombNumbers(numArr, bombArr) {
    let sum = 0;
    let bombNum = bombArr[0];
    let power = bombArr[1];   
    for (let i = 0; i < numArr.length; i ++) {
        let number = numArr[i]
        if (number === bombNum) {            
            let startIndex = i - power;
            let numsDeleted = 2 *power + 1;;
            if(i - power < 0){
                startIndex = 0;
                if(i + power > numArr.length){
                    numsDeleted = numArr.length;
                }else{
                    numsDeleted = power + 1 + i ;
                }
                
            }else if(i + power > numArr.length){                
                numsDeleted = power + 1 + numArr.length - i;
                              
            }           
            numArr.splice(startIndex, numsDeleted);
            i = 0;        
        }
    }
    for (const left of numArr) {
        sum += left;
    }
    console.log(sum);
}
bombNumbers([1,3,1,1,1,1,3,1,2],
    [3, 3]   
     
    )