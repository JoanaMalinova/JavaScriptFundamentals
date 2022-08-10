function equalNeighbors(matrix) {
    let array = matrix[0];
    let counter = 0;    
    for (let j = 0; j < matrix.length; j++) {
        let lastEl = '';
        let currentArr = matrix[j]
        for (let i = 0; i < currentArr.length; i++) {
            let currentEl = currentArr[i];
            if (currentEl === lastEl) {
                counter++;
            }
            lastEl = currentEl;
        }        
    }
    for (let k = 0; k < matrix.length - 1; k++) {
        let currentArr = matrix[k];
        let nextArr = matrix[k + 1]
       for (let l = 0; l < array.length; l++) {        
         if(currentArr[l] == nextArr[l]){
            counter ++;
         }
       }        
    }
    return counter;    
    
}
equalNeighbors([['test', 'yo', 'yo', 'ho'],
['well', 'done', 'no', '6'],
['not', 'done', 'yet', '5']]

)