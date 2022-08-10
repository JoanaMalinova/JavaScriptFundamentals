function jansNotation(mainArr) {
    let operandsArr = [];
    for (let i = 0; i < mainArr.length; i++) {
        let element = mainArr[i];
        if (element === Number(element)) {
            operandsArr.push(element);
        } else {
            if (operandsArr.length < 2) {
                console.log('Error: not enough operands!');
                return;
            } else {
                let firstNum = operandsArr[operandsArr.length - 2];
                let secondNum = operandsArr[operandsArr.length - 1];
                let newNum = 0;
                switch (element) {
                    case '+': newNum = firstNum + secondNum; break;
                    case '-': newNum = firstNum - secondNum; break;
                    case '*': newNum = firstNum * secondNum; break;
                    case '/': newNum = firstNum / secondNum; break;
                }
                operandsArr.splice(operandsArr.length - 2, 2, newNum);
            }
        }
    }
    if (operandsArr.length > 1) {
        console.log('Error: too many operands!');
    } else {
        console.log(operandsArr.join(''));
    }
}
jansNotation([-1,
    1,
    '+',
    101,
    '*',
    18,
    '+',
    3,
    '/']
   
   


)