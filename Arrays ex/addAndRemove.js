function addAndRemove(input) {
    let number = 0;
    let newArr = [];
    for (const command of input) {
        number += 1;
        switch (command) {
            case 'add': newArr.push(number); break;
            case 'remove': newArr.pop(); break;
        }
    }
    if (newArr[0] === undefined) {
        console.log('Empty');
    } else {
        console.log(newArr.join(' '));
    }
}
addAndRemove(['add', 'add', 'add', 'add'])
addAndRemove(['add', 'add', 'remove', 'add', 'add'])
addAndRemove(['remove', 'remove', 'remove'])