function lastKNumbersSequence(n,k) {
    let newArr = [1];    
    for (let i = 0; i < n - 1; i++) {
       let sliceLeft = i + 1 - k;
       if(i + 1 - k < 0){
        sliceLeft = 0;
       }
       let sliced = newArr.slice(sliceLeft ,i + 1)
       let sum = 0;
       for (const element of sliced) {
            sum += element;
       }
       newArr.push(sum);        
    }
    console.log(newArr.join(' '));

}
lastKNumbersSequence(6,3)