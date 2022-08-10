function printCertificate(grade,nameArr){
    function printHeader() {
        console.log('~~~-   {@}   -~~~');
        console.log('~- Certificate -~');
        console.log('~~~-  ~---~  -~~~');
    }
    function pass(grade) {
        return grade >= 3;
      }
    function printName(nameArr) {
        console.log(nameArr[0] + ' ' + nameArr[1]);
    }
    function formatGrades(grade){
        let expression = '';
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
            expression = 'Excellent'
        }
        console.log(`${expression} (${grade.toFixed(2)})`);
    }  
    if(pass(grade)){
        printHeader();
        printName(nameArr);
        formatGrades(grade);
      } else {
        let msg = `${nameArr[0]} ${nameArr[1]} does not qualify`;
        console.log(msg);
      }    
    
}
printCertificate(2, ['Peter', 'Carter'])