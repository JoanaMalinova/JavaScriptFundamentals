function houseParty(array) {
    let listArr = [];
    for (const element of array) {
        let attendanceArr = element.split(' ')
        let name = attendanceArr[0]
        if(attendanceArr.includes('not')){
            if(listArr.includes(name)){
               let index = listArr.indexOf(name);
               listArr.splice(index,1);
            }else{
                console.log(`${name} is not in the list!`);
            }
        }else{
            if(listArr.includes(name)){
                console.log(`${name} is already in the list!`);
            }else{
                listArr.push(name);
            }
        }        
    }
    console.log(listArr.join('\n'));
}
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']

)