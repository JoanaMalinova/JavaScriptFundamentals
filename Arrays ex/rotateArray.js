function rotateArray(input) {
    let rotation = Number(input.pop());
    let elToMove = '';
    while (rotation > 0) {
        elToMove = input.pop();
        input.unshift(elToMove);
        rotation--;
    }
    console.log(input.join(" "))

}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15'])
