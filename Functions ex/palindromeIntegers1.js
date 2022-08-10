function palindromeIntegers(input) {
    let currentChar;
    let reciprocalChar;    
    for (const number of input) {
        let isPalindrome = true;
        let strOfNum = number.toString();
        let j = strOfNum.length - 1;
        for (let i = 0; i <= (strOfNum.length - 1) / 2; i++, j--) {
            currentChar = strOfNum[i];
            reciprocalChar = strOfNum[j];
            if (currentChar !== reciprocalChar) {
                isPalindrome = false;
                console.log(isPalindrome);                
                break;
            }
        }
        if (isPalindrome) {
            console.log(isPalindrome)
        }
    }
}
palindromeIntegers([32,2,232,1010])