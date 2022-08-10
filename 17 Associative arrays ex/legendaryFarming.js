function legendaryFarming(input) {
    let materialsObj = {};
    let materialsArr = input.split(' ');    
    for (let i = 0; i < materialsArr.length; i += 2) {    
        let currQuantity = materialsArr[i];
        let currMaterial = materialsArr[i + 1].toLowerCase();
        if(materialsObj.hasOwnProperty(currMaterial)){
            materialsObj[currMaterial] += Number(currQuantity);            
        }else{
            materialsObj[currMaterial] = Number(currQuantity);
        }
        if( materialsObj[currMaterial] >= 250) {
            if(currMaterial === 'shards'){
               console.log("Shadowmourne obtained!");
               materialsObj[currMaterial] -= 250;
               break;
            }else if(currMaterial === 'fragments'){
               console.log("Valanyr obtained!") ;
               materialsObj[currMaterial] -= 250;
               break;
            }else if(currMaterial === 'motes'){
                console.log("Dragonwrath obtained!");
                materialsObj[currMaterial] -= 250;
                break;
            }            
        }     
    }
    let entries = Object.entries(materialsObj);
    let keys = Object.keys(materialsObj);    
    if(!keys.includes('fragments')){
        entries.push(['fragments', 0]);
    }
    if(!keys.includes('shards')){
        entries.push(['shards', 0]);
    }
    if(!keys.includes('motes')){
        entries.push(['motes', 0])
    }
    let keyMaterials= [];
    let junkMaterials = [];
    for (let every of entries) {
        let material = every[0];       
        if(material === 'shards'|| material === 'motes' || material === 'fragments'){
            keyMaterials.push(every);
        }else{
            junkMaterials.push(every);
        }
    }    
    keyMaterials.sort((a,b)=> b[1]- a[1] || a[0].localeCompare(b[0]));
    junkMaterials.sort((a,b) => a[0].localeCompare(b[0]));
    keyMaterials.forEach(element => {
        console.log(`${element[0]}: ${element[1]}`);       
    });
    junkMaterials.forEach(element => {
        console.log(`${element[0]}: ${element[1]}`);
    });
}
legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')