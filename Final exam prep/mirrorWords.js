function mirrorWords(input) {
    let pattern =/([@#])(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/g;
    let text = input[0];
    let validCounter = 0;
    let result = [];
    let noMatches = true;
    let noMirrorPairs = true;     
    while((matches = pattern.exec(text))!== null){        
        noMatches = false;
        validCounter++;
        let firstWord = matches.groups['first'];
        let secondWord = matches.groups['second'];
        let firstReversed = firstWord.split('').reverse().join('');
        if(firstReversed === secondWord){
            noMirrorPairs = false;            
            let currResult = `${firstWord} <=> ${secondWord}`;
            result.push(currResult)
        }
    } 
    if(noMatches){
        console.log('No word pairs found!');
    }else{
        console.log(`${validCounter} word pairs found!`);
    }
    if(noMirrorPairs){        
        console.log('No mirror words!');
    }else{        
        console.log('The mirror words are:')
        console.log(result.join(', '))
    }
}
mirrorWords([
    '#po0l##l0op# @bAc##cAB@ @LM@ML@ #xxxXxx##xxxXxx# @aba@@ababa@' 
    ]
    )