function serializeString(array){
    let input = array[0];
    let result = {};
    for (let i = 0; i < input.length; i++) {        
        let currChar = input[i];
        if(currChar === '~'){
            continue;
        }       
        result[currChar] = [];
        result[currChar].push(i);
        input = input.replace(currChar,'~');
        while(input.includes(currChar)){
            let index = input.indexOf(currChar);
            result[currChar].push(index);
            input = input.replace(currChar,'~');
        }     
    }
    let entries = Object.entries(result);
    for (let [char, indexes]  of entries) {
        console.log(`${char}:${indexes.join('/')}`)
    }
}
serializeString(["avjavamsdmcalsdm"])