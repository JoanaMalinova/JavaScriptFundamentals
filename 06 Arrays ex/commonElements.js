function commonElements(input1,input2){
    for(let stringElement1 of input1){
        for(let stringElelment2 of input2){
            if(stringElelment2 === stringElement1){
                console.log(stringElelment2)
            }
        }
    }
}
commonElements(['S', 'o', 'f', 't', 'U', 'n', 'i', ' '],
['s', 'o', 'c', 'i', 'a', 'l']

)