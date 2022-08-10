function schoolLibrary(mainArr) {
    let shelfArr = mainArr.shift().split('&');
    mainArr.pop();
    for (let i = 0; i < mainArr.length; i++) {
        let commandArr = mainArr[i].split(' | ');
        let command = commandArr[0]
        switch (command) {
            case 'Add Book':
                if (!shelfArr.includes(commandArr[1])) {
                    shelfArr.unshift(commandArr[1]);
                }
                break;
            case 'Take Book':
                if (shelfArr.includes(commandArr[1])) {
                    let indexToRemove = shelfArr.indexOf(commandArr[1]);
                    shelfArr.splice(indexToRemove, 1);
                }
                break;
            case 'Swap Books':
                let book1 = commandArr[1];
                let book2 = commandArr[2];
                if (shelfArr.includes(book1) && shelfArr.includes(book2)) {
                    let index1 = shelfArr.indexOf(book1);
                    let index2 = shelfArr.indexOf(book2);
                    shelfArr.splice(index1, 1, book2);
                    shelfArr.splice(index2, 1, book1);
                }
                break;
            case 'Insert Book':
                if (!shelfArr.includes(commandArr[1])) {
                    shelfArr.push(commandArr[1]);
                }
                break;
            case 'Check Book':
                let index = commandArr[1];
                if (index < shelfArr.length && index >= 0) {
                    console.log(shelfArr[index]);
                }
                break;
        }
    }
    console.log(shelfArr.join(', '));

}
schoolLibrary(['Don Quixote&The Great Gatsby&Moby dick',
    'Add Book | Ulysses',
    'Take Book | Don Quixote',
    'Insert Book | Alice in wonderland',
    'Done'])