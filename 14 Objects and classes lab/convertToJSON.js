function convertToJSON(firstName, secondName, hairColor) {
    let obj = {};
    obj.name = firstName;
    obj.lastName = secondName;
    obj.hairColor = hairColor;
    let person = JSON.stringify(obj);
    console.log(person); 
}
convertToJSON('George', 'Jones', 'Brown')