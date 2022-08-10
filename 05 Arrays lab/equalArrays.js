function equalArrays(numberArray1, numberArray2) {
    let index = 0;
    let arraysAreDifferent = false;
    let sum = 0;
   for (let i = 0; i < numberArray1.length; i++) {
     if (numberArray1[i] !== numberArray2[i]){
         index = i;         
         arraysAreDifferent = true;
         break;
     }
     sum += Number(numberArray1[i]);
   }
   if(arraysAreDifferent){
       console.log(`Arrays are not identical. Found difference at ${index} index`)
   }else {
       console.log(`Arrays are identical. Sum: ${sum}`)

   }
}
equalArrays(['1'], ['10'])