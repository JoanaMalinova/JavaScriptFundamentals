function addressBook(input) {
    let adBook = {};
    for (const currInfo of input) {
        let [name, adress] = currInfo.split(':');
        adBook[name] = adress;    
    }
    let entries = Object.entries(adBook);
    entries.sort((a,b) => a[0].localeCompare(b[0]))
    for (const [key, value] of entries) {
        console.log(`${key} -> ${value}`)
    }
}
addressBook(['Bob:Huxley Rd',
'John:Milwaukee Crossing',
'Peter:Fordem Ave',
'Bob:Redwing Ave',
'George:Mesta Crossing',
'Ted:Gateway Way',
'Bill:Gateway Way',
'John:Grover Rd',
'Peter:Huxley Rd',
'Jeff:Gateway Way',
'Jeff:Huxley Rd']
 ) 

