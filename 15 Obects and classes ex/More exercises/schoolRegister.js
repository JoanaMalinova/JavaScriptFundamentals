function schoolRegister(input) {
    let mainList = [];
    let listObj = {};
    for (let studentInfo of input) {
        let studentObj = {};
        let studentArr = studentInfo.split(', ');
        studentObj.name = studentArr[0].split(': ')[1];
        studentObj.grade = Number(studentArr[1].split(': ')[1]) + 1;
        studentObj.avScore = Number(studentArr[2].split(': ')[1]);
        mainList.push(studentObj);
    }
    let filtered = mainList.filter((a) => a.avScore >= 3)
    let sorted = filtered.sort((a, b) => a.grade - b.grade);
    for (let listInfo of sorted) {
        if (listObj.hasOwnProperty(listInfo.grade)) {
            listObj[listInfo.grade].push(listInfo.name, listInfo.avScore);
        } else {
            listObj[listInfo.grade] = [listInfo.name, listInfo.avScore];
        }
    }
    for (let key in listObj) {
        let array = listObj[key];
        console.log(`${key} Grade`);
        let names = array.filter((a, index) => index % 2 === 0);
        let scores = array.filter((a, index) => index % 2 !== 0);
        let sum = 0;
        for (let score of scores) {
            sum += Number(score);
        }
        let average = sum / scores.length;
        console.log(`List of students: ${names.join(', ')}`);
        console.log(`Average annual score from last year: ${average.toFixed(2)}`);
        console.log('')

    }
}

schoolRegister([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
] )