function coffeeLover(mainArr) {
    let coffeeListArr = mainArr.shift().split(' ');
    let commandCount = mainArr.shift();
    for (let i = 0; i < commandCount; i++) {
        let commandArr = mainArr[i].split(' ');
        let currCommand = commandArr[0];
        switch(currCommand){
            case 'Include' :
               coffeeListArr.push(commandArr[1]);
                break;
            case 'Remove' :
                let removeCount = Number(commandArr[2]);
                if(removeCount > coffeeListArr.length){
                    continue;
                }
                if(commandArr[1] === 'first'){
                    coffeeListArr.splice(0,removeCount);
                }else {
                    coffeeListArr.splice(-removeCount,removeCount);
                }
                break;
            case 'Prefer' :
                let firstIndex = Number(commandArr[1]);
                let secondIndex = Number(commandArr[2]);
                let allowedLength = coffeeListArr .length;
                if(firstIndex < allowedLength && secondIndex < allowedLength && firstIndex >= 0 && secondIndex >= 0){
                    let movedCoffee = coffeeListArr[firstIndex];
                    coffeeListArr.splice(firstIndex,1,coffeeListArr[secondIndex]);
                    coffeeListArr.splice(secondIndex,1,movedCoffee);
                }
                break;
            case 'Reverse' :
                coffeeListArr.reverse();
                break;
        }
    }
    console.log(`Coffees:`);    
    console.log(coffeeListArr.join(' '));

}
coffeeLover(['Arabica Liberica Charieriana Magnistipula Robusta Bulkcoffee Strongcoffee',
'5',
'Include Turkishcoffee',
'Remove first 2',
 'Remove last 1',
 'Prefer 3 1',
 'Reverse'
])