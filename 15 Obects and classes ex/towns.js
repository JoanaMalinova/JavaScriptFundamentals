function towns(input) {
    let townObj = {};
    for (let townInfo of input) {
        let townData = townInfo.split(' | ');
        let town = townData[0];
        let latitude = Number(townData[1]).toFixed(2);
        let longitude = Number(townData[2]).toFixed(2);
        townObj.town = town;
        townObj.latitude = latitude;
        townObj.longitude = longitude;
        console.log(townObj)
    }
}
towns(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625']
)