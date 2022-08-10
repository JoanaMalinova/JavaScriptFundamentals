function formatGrades(grade){
    let expression;
    if(grade < 3){
        expression = 'Fail';
        console.log('Fail (2)');
        return;
    }else if(grade < 3.5){
        expression = 'Poor';
    }else if(grade < 4.5){
        expression = 'Good';
    }else if(grade < 5.5) {
        expression = 'Very good';
    }else {
        expression = 'Excellent';
    }
    console.log(`${expression} (${grade.toFixed(2)})`);
}
formatGrades(3.33)