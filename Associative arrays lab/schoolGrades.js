function schoolGrades(input) {
    let map = new Map();
    for (let currInfo of input) {
        let gradeArr = currInfo.split(' ');
        let name = gradeArr.shift();
        if(map.has(name)) {
            let oldGrade = map.get(name);
            oldGrade.push(...gradeArr);
            map.set(name, oldGrade);
        }else {
            map.set(name, gradeArr);
        }
    }
    let sorted = Array.from(map.entries())
                      .sort((a,b) => a[0].localeCompare(b[0]));
    for( element of sorted){
        let numArr = element[1];
        let sum = 0;
        for(digit of numArr){
            sum += Number(digit);
        }
        let average = sum / numArr.length;
        console.log(`${element[0]}: ${average.toFixed(2)}`)
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6'])
