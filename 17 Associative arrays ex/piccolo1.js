function piccolo(input) {
    let map = new Map();
    for (let entry of input) {
        let [action, carNumber] = entry.split(', ');
        if(action === 'IN'){
            map.set(carNumber,(map.size + 1));
        }else {
            map.delete(carNumber);
        }
    }
    if(map.size > 0){
        let sorted = Array.from(map.keys()).sort();
        sorted.forEach((a) => console.log(`${a}`))
    }else{
        console.log('Parking Lot is Empty')
    }
}