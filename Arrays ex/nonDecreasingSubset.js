function nonDecreasingSubset(array) {
    let newArr = [array[0]];
    let limit = array[0]
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= limit) {
            limit = array[i];
            newArr.push(array[i]);
        }

    }
    console.log(newArr.join(' '));

}
nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24])
nonDecreasingSubset([1, 2, 3, 4])
nonDecreasingSubset([20, 3, 2, 15, 6, 1])