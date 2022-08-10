function oddOccurrences(input) {
    let map = new Map(); 
    let sentenceArr = input.split(' ');
    for (let word of sentenceArr) {
        let lowered = word.toLowerCase();
        if(map.has(lowered)){
           let newCount = map.get(lowered) + 1;
           map.set(lowered, newCount);
        }else{
            map.set(lowered, 1);
        }
    }    
    let filtered = Array.from(map.entries()).filter((a) => a[1] % 2 !== 0);
    let resultArr =[]
    filtered.forEach((a) => {
        resultArr.push(a[0]);
    })
   
    console.log( resultArr.join(' '));
}
oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')