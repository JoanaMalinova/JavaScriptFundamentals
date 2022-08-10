function fancyBarcodes(input){
    let count = input.shift();
    let validPattern = /@#+[A-Z][A-Za-z\d]{4,}[A-Z]@#+/;
    let groupPattern = /\d/g;
    for (let currBarcode of input) {
        let match = currBarcode.match(validPattern);
        if(!match){
            console.log('Invalid barcode');
        }else{
            let groupMatches = match.toString().match(groupPattern);
            if(!groupMatches){
                console.log('Product group: 00')
            }else{
                let groupType = groupMatches.join('');
            console.log(`Product group: ${groupType}`);
            }                
        }
    }
}
fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"]

)