function secretChat(input){
    let secretMessage = input.shift();
    for (let currLine of input) {
        if(currLine === 'Reveal'){
            break;
        }
        let commandArr = currLine.split(':|:');
        if(commandArr.includes('InsertSpace')){
            let index = commandArr[1];
            let messageArr = secretMessage.split('');
            messageArr.splice(index,0,' ');
            secretMessage = messageArr.join('');
            console.log(secretMessage);

        }else if(commandArr.includes('Reverse')){
            let substring = commandArr[1];
            if(secretMessage.includes(substring)){
                secretMessage = secretMessage.replace(substring,'');
                let substringArr = substring.split('').reverse();
                secretMessage += substringArr.join('');
                console.log(secretMessage);
            }else{
                console.log('error');
            }
        }else{
            let substring =commandArr[1];
            let replacement =commandArr[2];
            while(secretMessage.includes(substring)){
                secretMessage = secretMessage.replace(substring,replacement);
            }
            console.log(secretMessage);
        }
    }
    console.log(`You have a new text message: ${secretMessage}`)
}
secretChat([
  'Hiware?uiy',
  'ChangeAll:|:i:|:o',
  'Reverse:|:?uoy',
  'Reverse:|:jd',
  'InsertSpace:|:3',
  'InsertSpace:|:7',
  'Reveal'
]

  )