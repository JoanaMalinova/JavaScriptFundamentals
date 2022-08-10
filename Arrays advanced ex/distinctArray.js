function distinctArray(array) {   
    let newArr = [];
    let arrayL = array.length;
    for (let i = 0; i < arrayL; i++) {
        let currentEl = array.shift();
        while(array.includes(currentEl)){
            let index = array.indexOf(currentEl);
            array.splice(index,1);
        }  
        newArr.push(currentEl);               
    
    }
    console.log(newArr.join(' '));  

}
distinctArray([7, 8, 9, 7, 2, 3, 4, 1, 2])
distinctArray([1, 2, 3, 4])
distinctArray([20, 8, 12, 13, 4, 4, 8, 5])