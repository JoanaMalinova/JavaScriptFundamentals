function sequences1(input){
    let sortedMatrix = [];
    let resultMatrix = []
    for (let currLine of input) {        
        let currArr = JSON.parse(currLine);
        let copy = currArr.slice();      
        let sorted = copy.sort((a,b)=> a - b).toString();
        if(!sortedMatrix.includes(sorted)){
           resultMatrix.push(currArr);           
        }
        sortedMatrix.push(sorted);
    }
    let sortedByLength = resultMatrix.sort((a,b) => a.length - b.length);
    sortedByLength.forEach(element => {
        element = element.sort((a,b) => b - a);
        console.log('['+element.join(', ')+']');
    });
}
sequences1(["[7.14, 7.180, 7.339, 80.099]",
"[7.339, 80.0990, 7.140000, 7.18]",
"[7.339, 7.180, 7.14, 80.099]"]

)