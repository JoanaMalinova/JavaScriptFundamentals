function softUniStudents2(input) {
    let courses = {};
    for (let courseInfo of input) {
        if (courseInfo.includes(':')) {
            let [name, capacity] = courseInfo.split(': ');
            if (courses[name]) {
                courses[name].capacity += Number(capacity);
            } else {
                courses[name] = {
                    capacity: Number(capacity),
                    students: []
                };
            }
        } else {
            let studentInfo = courseInfo.split(' ');
            let userCredit = studentInfo[0];
            let email = studentInfo[3];
            let course = studentInfo[5];
            let indexOfOpScope = userCredit.indexOf('[');
            let userName = userCredit.substring(0, indexOfOpScope);
            let credit = userCredit.substring(indexOfOpScope + 1, userCredit.length - 1);
            if (courses[course] && courses[course].capacity >= 1) {
                courses[course].students.push({
                    userName,
                    credit: Number(credit),
                    email
                })
                courses[course].capacity -= 1;
            }
        }
    }
    let coursesEntries = Object.entries(courses);  
    let sortedByStudentCount = coursesEntries.sort((a, b) => b[1].students.length - a[1].students.length);
    for (let [name, courseInfo] of sortedByStudentCount) {
        console.log(`${name}: ${courseInfo.capacity} places left`);
        let sortedBystudentCredits = courseInfo.students.sort((a, b) => b.credit - a.credit)
        sortedBystudentCredits.forEach(element => {
            console.log(` --- ${element.credit}: ${element.userName}, ${element.email}`)
        });
    }
}
softUniStudents2(['JavaBasics: 15',
'user1[26] with email user1@user.com joins JavaBasics',
'user2[36] with email user11@user.com joins JavaBasics',
'JavaBasics: 5',
'C#Advanced: 5',
'user1[26] with email user1@user.com joins C#Advanced',
'user2[36] with email user11@user.com joins C#Advanced',
'user3[6] with email user3@user.com joins C#Advanced',
'C#Advanced: 1',
'JSCore: 8',
'user23[62] with email user23@user.com joins JSCore']
)