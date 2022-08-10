function aMinorTask(input) {
    let resourses = {};
    for (let i = 0; i < input.length; i += 2) {
        let currResourse = input[i];
        let currQuantity = input[i + 1];
        if(resourses.hasOwnProperty(currResourse)){
            let newQuantity = Number(currQuantity) + resourses[currResourse];
            resourses[currResourse] = newQuantity;
        }else{
            resourses[currResourse] = Number(currQuantity);
        }       
    }
    for (let key in resourses) {
       console.log(`${key} -> ${resourses[key]}`)
    }
}
aMinorTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ]
)
