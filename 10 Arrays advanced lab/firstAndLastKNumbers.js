function firstAndLastKNumbers(array) {
    let numberOfEl = array.shift();
    let firstTwo =array.slice(0,numberOfEl);
    let lastEl = array.length - 1;
    let lastTwo =array.slice(lastEl - (numberOfEl - 1));
    console.log(firstTwo.join(' '));
    console.log(lastTwo.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9])