function passwordReset(input) {
    let passwordRaw = input.shift();
    for (let command of input) {
        if (command === 'Done') {
            break;
        }
        let commandArr = command.split(' ');
        if (command === 'TakeOdd') {
            let passwordArr = passwordRaw.split('');
            passwordRaw = passwordArr.filter((a, index) => index % 2 !== 0).join('');
            console.log(passwordRaw);
        } else if (command.includes('Cut')) {
            let cutIndex = Number(commandArr[1]);
            let cutLength = Number(commandArr[2]);
            let substring = passwordRaw.substring(cutIndex, cutIndex + cutLength);
            passwordRaw = passwordRaw.replace(substring, '');
            console.log(passwordRaw);
        } else {
            let substringToReplace = commandArr[1];
            let replacement = commandArr[2];
            if (!passwordRaw.includes(substringToReplace)) {
                console.log('Nothing to replace!');
            } else {
                while (passwordRaw.includes(substringToReplace)) {
                    passwordRaw = passwordRaw.replace(substringToReplace, replacement);
                }
                console.log(passwordRaw)
            }
        }
    }
    console.log(`Your password is: ${passwordRaw}`)
}
passwordReset(["up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy",
"TakeOdd",
"Cut 18 2",
"Substitute ! ***",
"Substitute ? .!.",
"Done"]
)
// •	"Substitute {substring} {substitute}"
// o	If the raw password contains the given substring, replaces all of its occurrences with the substitute text given and prints the result.
// o	If it doesn't, prints "Nothing to replace!".
