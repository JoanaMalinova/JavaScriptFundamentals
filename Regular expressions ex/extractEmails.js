function extractEmails(input) {
    let emailPattern = /\s[a-z\d]+[._-]?[a-z|\d]+@[^.][a-z.]+[_\-]?[a-z.]+\.[a-z.]+[_\-]?[a-z.]+\b/gm;
    let matches = input.match(emailPattern);
    matches.forEach(currEmial => {
        console.log(currEmial);
    });
}
extractEmails('Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.')