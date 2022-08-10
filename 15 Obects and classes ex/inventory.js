function inventory(input) {
    let mainArr = [];
    for (let heroData of input) {
        let heroArr = heroData.split(' / ');
        let name = heroArr[0];
        let level = heroArr[1];
        let inventory = heroArr[2];
        // let [name, level, inventory] = heroData.split(' / ')
        let heroObj = {};
        heroObj.hero= name;
        heroObj.level = level;
        heroObj.items = inventory;
        // let heroObj = {
        //     name: name,
        //     level: level,
        //     items: inventory
        // };
        mainArr.push(heroObj);        
    }
    mainArr.sort((a, b ) => a.level- b.level);
    for (let result of mainArr) {
        console.log(`Hero: ${result.hero}`);
        console.log(`level => ${result.level}`);
        console.log(`items => ${result.items}`);
    }
}
inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
    ]
    )