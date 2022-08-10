function sumFirstAndLast(array) {
    let first = Number(array.shift());
    let last = Number(array.pop());
    let sum = first + last;
    console.log(sum);
}
sumFirstAndLast(['20', '30', '40'])