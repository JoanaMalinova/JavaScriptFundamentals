function arenaTier(input) {
    let gladiatorPool = {};    
    for (let currLine of input) {
        if(currLine === 'Ave Cesar'){
            break;
        }else if (currLine.includes('vs')) {
            let splited = currLine.split(' ');
            let gladiatorOne = splited[0];
            let gladiatorTwo = splited[2];
            if (gladiatorPool.hasOwnProperty(gladiatorOne) && gladiatorPool.hasOwnProperty(gladiatorTwo)) {
                let glOneTechniques = Object.keys(gladiatorPool[gladiatorOne]);
                let glTwoTechniques = Object.keys(gladiatorPool[gladiatorTwo]);
                for (let currTechnique of glOneTechniques) {
                    if (glTwoTechniques.includes(currTechnique) && currTechnique !== 'totalSkill') {
                        if (gladiatorPool[gladiatorOne].totalSkill > gladiatorPool[gladiatorTwo].totalSkill ) {
                            delete gladiatorPool[gladiatorTwo];
                        } else {
                            delete gladiatorPool[gladiatorOne];
                        }
                       break;                       
                    };
                }
            }
        } else {
            let [name, technique, skill] = currLine.split(' -> ');
            if (gladiatorPool.hasOwnProperty(name)) {
                if(gladiatorPool[name][technique]){
                    if(gladiatorPool[name][technique] < Number(skill)){
                        gladiatorPool[name][technique] = Number(skill);
                        gladiatorPool[name].totalSkill += Number(skill);
                    }
                }else{
                    gladiatorPool[name][technique] = Number(skill);
                    gladiatorPool[name].totalSkill += Number(skill);
                }             
            } else {
                gladiatorPool[name] = {
                    [technique]: Number(skill),
                    totalSkill: Number(skill)
                };
            }
        }
    }
    let entries = Object.entries(gladiatorPool);  
    let sortedBySkillandName = entries.sort((a, b) => b[1].totalSkill - a[1].totalSkill || a[0].localeCompare(b[0])) ;                                     
    for (let [gladiatorName, techniqueAndSkill]  of sortedBySkillandName) {        
        let currTotalSkill = techniqueAndSkill['totalSkill'];
        delete techniqueAndSkill['totalSkill'];
        let sortedByTechnique = Object.entries(techniqueAndSkill).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
        console.log(`${gladiatorName}: ${currTotalSkill} skill`);
        sortedByTechnique.forEach(element => { console.log(`- ${element[0]} <!> ${element[1]}`) });
    }
}
arenaTier(
    [   'Eter -> Duck -> 750',
        'Julius -> Shield -> 150',
        'Gladius -> Heal -> 250',
        'Gladius -> Support -> 250',
        'Gladius -> Shield -> 250',
        'Peter vs Gladius',
        'Gladius vs Julius',
        'Gladius vs Maximilian',
        'Ave Cesar'
        ]
        
)