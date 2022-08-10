function santasSecretHelper(input) {
    let key = input.shift();
    for (let currLine of input) {
        if (currLine === 'end') {
            break;
        }
        let newCode = '';
        for (let currChar of currLine) {
            let newChar = String.fromCharCode(currChar.charCodeAt(0) - Number(key));
            newCode += newChar;
        }
        let pattern = /@(?<name>[a-z]+)[^@\-!:>]*!(?<childStatus>[(N|G)])!/gi;
        if ((matches = pattern.exec(newCode)) !== null) {
            let childName = matches.groups['name'];
            let status = matches.groups['childStatus'];
            if (status === 'G') {
                console.log(childName);
            }
        }
    }
}
santasSecretHelper(['3',
    "N}eideidmk$'(mnyenmCNlpamnin$J$",
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end']

)