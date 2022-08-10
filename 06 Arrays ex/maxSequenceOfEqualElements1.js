function maxSequenceOfEqualElements(input) {
  let newArr = [];
  let currentCounter = 0;
  let lastCounter = 0;
  let longestArr = [];
  let lastArr = [];
  for (let i = 0; i < input.length; i++) {
    if (input[i] === input[i + 1]) {
      newArr.push(input[i]);
      currentCounter++;

    } else if (input[i] === input[i - 1]) {
      newArr.push(input[i]);
      currentCounter++;

      if (lastCounter >= currentCounter) {
        longestArr = lastArr;
      } else {
        longestArr = newArr;
      }
      lastCounter = currentCounter;
      lastArr = newArr;

      currentCounter = 0;
      newArr = [];
    }

  }
  console.log(longestArr.join(' '));

}

maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])

