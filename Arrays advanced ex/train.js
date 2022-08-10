function train(mainArr) {
    let trainArr = mainArr.shift().split(' ').map(Number);     
    let maxPass = Number(mainArr.splice(0,1));
    let commandArr = mainArr.slice();    
    for (const command of commandArr) {
        if(!isNaN(Number(command))){
            for (let i = 0; i < trainArr.length ; i ++) {                
                if(Number(command) + trainArr[i] <= maxPass){
                    trainArr[i] = Number(command) + trainArr[i];
                    break;
                }
            }            
        } else{
            let addArr = command.split(' ');
            trainArr.push(addArr[1]);
            
        }        
    }
    console.log(trainArr.join(' '));
}
train(['0 0 0 10 2 4',
'10',
'Add 10',
'10',
'10',
'10',
'8',
'6']
)