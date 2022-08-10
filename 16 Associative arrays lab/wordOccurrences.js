function wordOccurrences(input) {
    let map = new Map();
    for(word of input){
        if(map.has(word)){
            let oldCount = map.get(word);
            let newCount = oldCount + 1;
            map.set(word, newCount);
        }else{
            map.set(word, 1)
        }
    }
    let sorted = Array.from(map.entries()).sort((a,b) => b[1] - a[1]);
    for([key, value] of sorted){
        console.log(`${key} -> ${value} times`);
    }
}
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])
