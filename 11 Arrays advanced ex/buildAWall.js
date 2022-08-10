function buildAWall(array) {
    concreatTotal = 0;
    let concreateArr = [];
    let sectionArr = array.map(Number);    
    while (sectionArr[0] < 30) {
        let concreatPerDay = 0;
        sectionArr = sectionArr.filter((x) => x < 30);        
        for (let i = 0; i < sectionArr.length; i ++) {            
                let newSection = sectionArr[i] + 1;               
                sectionArr.splice(i, 1, newSection);
                concreatPerDay += 195;            
        }
        concreateArr.push(concreatPerDay);        
        concreatTotal += concreatPerDay;  
        sectionArr = sectionArr.filter((x) => x < 30);     
    }    
    let priceOfConcreate = concreatTotal * 1900;  
    if(concreateArr[0] === undefined){
        console.log(0);
    }else{
        console.log(concreateArr.join(', '));
    }    
    console.log(priceOfConcreate + ' ' + 'pesos');
}
buildAWall([29,28])