function convertToJSON1(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor
    };
    console.log(JSON.stringify(person));
}
convertToJSON1('George', 'Jones', 'Brown')

