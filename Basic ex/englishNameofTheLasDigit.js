function englishNameofTheLastDigit(num) {
    let number = num.toString();
    let digit = number.charAt(number.length-1);
    let println ='';

    switch(digit) {
        case "1":
            println = "one"
            break;
        case '2':
            println = "two";
            break;
        case '3':
            println = 'three';
            break;
        case '4':
            println = 'four';
            break;
        case '5':
            println = 'five';
            break;
        case '6':
            println = 'six';
            break;
        case '7':
            println = 'seven';
            break;
        case '8':
            println = 'eight';
            break;
        case '9':
            println = 'nine';
            break;
        case '0':
            println = 'zero';
            break;

    }
    console.log(println)
}
englishNameofTheLastDigit(1643)
