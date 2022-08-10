function ages(num) {
    let person = '';
    if (num < 0) {
        person = 'out of bounds'
    } else if (num <= 2) {
        person = 'baby';
    } else if (num <= 13) {
        person = 'child';
    } else if (num <= 19) {
        person = 'teenager';
    } else if (num <= 65) {
        person = 'adult';
    } else if (num >= 66) {
        person = 'elder'
    }
    console.log(person)
}
ages(100)