function palindromeIntegers(input) {
   for (const currentNum of input) {
       let currentStr = currentNum.toString();
       let reversedStr = currentStr.split('').reverse().join('');
       if(currentStr === reversedStr){
            console.log(true);
       }else{
           console.log(false);
       }
   }     
}
palindromeIntegers([32,2,232,1010])