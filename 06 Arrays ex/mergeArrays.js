function mergeArrays(array1,array2) {
    let element3 = '';
    let arrayMerged = [];
    let arrayL = array1.length
    for (let i = 0; i < arrayL; i++) {
        let element1 = array1[i];
        let element2 = array2[i];
        if(i % 2 === 0){
            element3 = Number(element1) + Number(element2);
        }else {
            element3 = element1 + element2;
        }
        arrayMerged.push(element3);
    }
    console.log(arrayMerged.join(' - '));


}
mergeArrays(['13', '12312', '5', '77', '4'],
['22', '333', '5', '122', '44'])
