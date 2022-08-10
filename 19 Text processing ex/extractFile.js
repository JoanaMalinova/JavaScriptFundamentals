function extractFile(input) {
    let splitArr = input.split('\\');
    let file = splitArr.pop();
    let index = file.lastIndexOf('.');
    let fileName = file.substring(0,index);
    let extension = file.substring(index + 1, file.length) ;
    console.log(`File ame: ${fileName}`);
    console.log(`File extension: ${extension}`);
}
extractFile('C:\\Internal\\training-internal\\Template.pptx')