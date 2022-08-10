function companyUser(input) {
    let list = {};` w46`
    for (let currLine of input) {
        let [company, emplyeeId] = currLine.split(' -> ');
        if (list.hasOwnProperty(company)) {
            if (list[company].includes(emplyeeId)) {
                continue;
            } else {
                let toAdd = list[company].slice();
                toAdd.push(emplyeeId);
                list[company] = toAdd;
            }
        } else {
            list[company] = [];
            list[company].push(emplyeeId)
        }
    }
    let entries = Object.entries(list).sort((a, b) => a[0].localeCompare(b[0]));
    for (let [key, value] of entries) {
        console.log(key);
        value.forEach(element => {
            console.log(`-- ${element}`)
        });
    }

}
companyUser([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
    ]
    
)