function passwordValidatior(password) {
    let lengthIsValid = false;
    let charsAreValid = false;
    let digitsAreEnough = false;
    function lengthChecker(password) {
        if (password.length < 6 || password > 10) {
            console.log("Password must be between 6 and 10 characters");
            return;
        } else {
            lengthIsValid = true;
        }
    }

    function charChecker(password) {
        //48 - 57 and 65 - 90 and 97 - 122
        let passwordL = password.length;
        for (let i = 0; i < passwordL; i++) {
            let currentChar = password[i];
            let charToNum = currentChar.charCodeAt();
            if ((charToNum >= 48 && charToNum <= 57) ||
                (charToNum >= 65 && charToNum <= 90) ||
                (charToNum >= 97 && charToNum <= 122)) {
                continue;
            } else;
            console.log("Password must consist only of letters and digits");
            return;
        }
        charsAreValid = true;
    }

    function digitCheker(password) {
        let passwordL = password.length;
        let counter = 0;
        for (let i = 0; i < passwordL; i++) {
            let currentChar = password[i];
            let number = Number(currentChar);
            if (!isNaN(number)) {
                counter++;
            }
        }
        if (counter < 2) {
            console.log("Password must have at least 2 digits");
        } else {
            digitsAreEnough = true;
        }
    }
    lengthChecker(password);
    charChecker(password);
    digitCheker(password);
    if (lengthIsValid && charsAreValid && digitsAreEnough) {
        console.log("Password is valid");
    }
}
passwordValidatior('Pa$s$s')