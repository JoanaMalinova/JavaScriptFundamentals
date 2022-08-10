function arratManipulations(mainArray) {
    let arrayStr = mainArray.shift();
    let array = arrayStr.split(' ');    
    let commandStr = mainArray.join(' ');   
    let commandArr = commandStr.split(' ');
    for (let i = 0; i < commandArr.length; i += 2) {
        if(commandArr[i - 2] === 'Insert'){
            continue;
        }        
        switch(commandArr[i]){
            case 'Add': array.push(commandArr[i + 1]); break;
            case 'Remove': array = array.filter(x => Number(x) !== Number(commandArr[i + 1])); break;
            case 'RemoveAt': array.splice(Number(commandArr[i + 1]), 1);break;
            case 'Insert':array.splice(Number(commandArr[i + 2]), 0,commandArr[i + 1]);break;
        }          
    }
    console.log(array.join(' ')) ; 
}
arratManipulations(['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']
)