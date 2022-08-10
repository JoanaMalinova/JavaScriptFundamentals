function addAndSubstract(input) {
    let number = 0;
    let sumOriginal = 0;
    let sumModified = 0;
    let inputL = input.length
    for (let i = 0; i < inputL; i++) {
        number = input[i];
        sumOriginal += number;

        if (number % 2 === 0) {
            number += i;
        } else {
            number -= i;
        }
        sumModified += number;
        input[i] = number;

    }

    console.log(input);
    console.log(sumOriginal);
    console.log(sumModified);

}
addAndSubstract([-5, 11, 3, 0, 2])