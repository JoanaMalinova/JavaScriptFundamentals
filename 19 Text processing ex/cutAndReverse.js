function cutAndReverse(input){
    let inputHalfLength = input.length / 2;
    let firstPart = input.substring(0, inputHalfLength);
    let secondPart = input.substring(inputHalfLength, input.length);
    let fisrtReversed = '';
    let secondReversed = '';
    for (let i = firstPart.length - 1; i >= 0; i--) {
      fisrtReversed += firstPart[i];
      secondReversed += secondPart[i];        
    }
    console.log(fisrtReversed);
    console.log(secondReversed);
}
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI')