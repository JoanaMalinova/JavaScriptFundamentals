function wordTrucker(input){
    let searchedFor = input.shift().split(' ');
    let map = new Map();
    for(let word of searchedFor){
        map.set(word, 0);
    }
    for(let word of input){
        if(map.has(word)){
            let newCount  = map.get(word) + 1;
            map.set(word, newCount);
        }
    }
    let sorted = Array.from(map.entries()).sort((a,b) => b[1] - a[1]);
    sorted.forEach((a) => console.log(`${a[0]} - ${a[1]}`));
}
wordTrucker([
    'this sentence', 
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
    ]
    )