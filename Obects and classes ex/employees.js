function employees(input) {
    let listObj = {};
    for (let name of input) {
        let personalNumber = name.length;
        listObj.name = name;
        listObj.personalNumber = personalNumber;       
        console.log(`Name: ${name} -- Personal Number: ${personalNumber}`);
    }  
}
employees([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
    ]
    )