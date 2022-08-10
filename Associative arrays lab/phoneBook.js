function phoneBook(input) {
    let phBook = {};
    for (let currContact of input) {
        let [name, number] = currContact.split(' ');
        phBook[name] = number;        
    }
    for (const key in phBook) {
        console.log(`${key} -> ${phBook[key]}`)
    }

}
phoneBook(['Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112',
        'Tim 0876566344']
)