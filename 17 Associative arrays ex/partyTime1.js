function partyTime1(input) {
    let index = input.indexOf('PARTY');
    input.splice(index, 1);
    let attending = input.slice(index);
    let initialList = input.slice(0, index);   
    let vipList = [];
    let regularList = [];
    initialList.forEach(element => {
        if (Number(element[0])) {
           vipList.push(element);
        } else {
            regularList.push(element);
        }
    });
    for (let guest of attending) {
        if (vipList.includes(guest)) {
            let index = vipList.indexOf(guest);
            vipList.splice(index,1);
        }else if(regularList.includes(guest)){
            let index = regularList.indexOf(guest);
            regularList.splice(index,1);
        }
    }
    console.log(regularList.length + vipList.length);    
    
    vipList.forEach((element => {
        console.log(element)
    }))
    regularList.forEach((element => {
        console.log(element)
    }))
}
partyTime1(['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]
)