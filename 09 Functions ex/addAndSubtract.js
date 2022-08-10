function addAndSubtract(n1,n2,n3){
    function add(n1,n2){
        let result = n1 + n2;
        return result;
    }
    function subtract(n1,n2,n3){
        let result = add(n1,n2) - n3;
        return result;
    }
    let result = subtract(n1,n2,n3);
    return result;
}


substract(3,4,5)