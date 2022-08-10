function arrayRotation(input,rotations){
    for (let i = 1; i <= rotations; i++) {        
        let firstElement = input[0];
        for (let i = 0; i < input.length - 1; i++) {
           let currentEl = input[i + 1];
           input[i] = currentEl;
        }
        input[input.length - 1] = firstElement;
        
    }
    console.log(input.join(' '))

}
arrayRotation([32, 21, 61, 1], 4)
arrayRotation([2, 4, 15, 31], 5)