function factorialDivision(a, b) {
    let factorialA = 1;
    let facttorialB = 1;
    function factorialMultiplicationA(a) {       
        factorialA *= a;        
        if (a > 1) {
            factorialMultiplicationA(a - 1);
        }
        return factorialA;
    }

    function factorialMultiplicationB(b){
        facttorialB *= b;
        if (b > 1) {
            factorialMultiplicationB(b - 1);
        }
        return facttorialB;
    }
    let result = factorialMultiplicationA(a) / factorialMultiplicationB(b);
    console.log(result.toFixed(2));

}
factorialDivision(6,2)