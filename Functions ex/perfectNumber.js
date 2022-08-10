function perfectNumber(n) {
    let sum = 0;
    function divisorFinder(n) {
        let divisorArr = [];
        for (let i = 1; i < n; i++) {
            if (n % i === 0) {
                divisorArr.push(i);
            }
        }
        return divisorArr
    }
    function perfectSumFinder(n) {
        for (const number of divisorFinder(n)) {
            sum += number;
        }
        return sum;
    }

    if (n === perfectSumFinder(n)) {
        console.log('We have a perfect number!');
    } else {
        console.log("It's not so perfect.")
    }

}
perfectNumber(1236498)