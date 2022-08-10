function reverseInPlace(input) {
    let index = input.length - 1; 
    for (let i = 0; i < input.length / 2; i++) {
        let oldEl = input[i];
        input[i] = input[index];
        input[index] = oldEl;
        index --;   
        
    }
    console.log(input.join(' '))

}
reverseInPlace(['abc', 'def', 'hig', 'klm', 'nop'])