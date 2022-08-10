function treasureFinder(input){
    let key = input.shift();
    let index = input.indexOf('find');
    input = input.slice(0,index);    
    let keyValue = key.split(' ');
    keyValue = keyValue.map((a) => Number(a));
    let resultArr = [];
    for (let currLine of input) {
        let result = '';
        let index = 0;
        for (let i = 0; i < currLine.length; i++) {
            let currChar = currLine[i];
            let resultCharValue = currChar.charCodeAt(0) - keyValue[index];
            result += String.fromCharCode(resultCharValue);           
            if(index === keyValue.length - 1){
                index = 0;
            }else{
                index ++;
            }
        }
        resultArr.push(result);
    }
    for (let currInfo  of resultArr) {
        let firstAndSymbol = currInfo.indexOf('&');
        let secondAndSymbol = currInfo.lastIndexOf('&')
        let type = currInfo.substring(firstAndSymbol + 1, secondAndSymbol);        
        let indexOfLeftArrowBracket = currInfo.lastIndexOf('<');
        let indexOfRightArrowBracket  = currInfo.lastIndexOf('>');
        let coordinates = currInfo.substring(indexOfLeftArrowBracket + 1, indexOfRightArrowBracket);
        console.log(`Found ${type} at ${coordinates}`)
    }   
}
treasureFinder(['1 4 2 5 3 2 1',
`Ulgwh"jt$ozfj!'kqqg(!bx"A3U237GC`,
"tsojPqsf$(lrne'$CYfqpshksdvfT$>634O57YC",
"'stj)>34W68Z@",
'find']


)