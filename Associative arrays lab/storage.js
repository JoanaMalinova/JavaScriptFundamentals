function storage(input) {
    let storageSpace = new Map();
    for(productInfo of input){
        let [name, quantity] = productInfo.split(' ');
        if(storageSpace.has(name)){
            let toBeAdded = Number(storageSpace.get(name)) + Number(quantity);            
            storageSpace.set(name, toBeAdded);
        }else{
            storageSpace.set(name, quantity);
        }
    }
    for( let key of storageSpace.keys()) {
        console.log(`${key} -> ${storageSpace.get(key)}`);
    }
}
storage(['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']
)