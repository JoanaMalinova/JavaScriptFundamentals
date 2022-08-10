function theLift(mainArr) {
    let queue = Number(mainArr.shift());
    let liftArr = mainArr[0].split(' ').map(Number);    
    for (let i = 0; i < liftArr.length; i++) {        
        let wagon = liftArr[i];        
        if (wagon === 4) {
            continue;
        }
        let newWagon = 0;
        let freeSpace = 4 - wagon;
        if (freeSpace > queue) {
            newWagon = queue + wagon;
            liftArr.splice(i, 1, newWagon);
            queue = 0;
            break;
        } else {
            newWagon = 4;
            queue -= freeSpace;
            liftArr.splice(i, 1, newWagon);
        }
    }
    if(queue > 0){
        console.log(`There isn't enough space! ${queue} people in a queue!`)
        
        console.log(liftArr.join(' '));
    }else if(queue === 0 && liftArr[liftArr.length - 1] === 4){
        console.log(liftArr.join(' '));
    }else {
        console.log('The lift has empty spots!')       
        console.log(liftArr.join(' '));
    }

}
theLift([
    "20",
    "0 2 0"
   ]
   
)