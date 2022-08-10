function matrix(dimension) {
   
    for (let i = 0; i < dimension; i++) {
        let Arr = [];
        for (let j = 0; j < dimension; j++) {
           Arr.push(dimension);  
        } 
        console.log(Arr.join(' '))     
    }
}
matrix(7)