function condenseArrayToNumber(input) {   
    let currentNum = 0;
    let newNum = 0;       
    while (input.length > 1) {
        let newArr = [];
        for (let i = 0; i < input.length - 1; i++) {            
            currentNum = input[i];

            nextNum = input[i + 1];
            newNum = currentNum + nextNum;

            newArr.push(newNum);
        }
        input = newArr;
       
    }    
    console.log(input[0]);

}
condenseArrayToNumber([5,0,4,1,2])