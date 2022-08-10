function test(array) {
    array.splice(-3,3);
    console.log(array.join(' '))
}
test([1,2,3,4,5,6])