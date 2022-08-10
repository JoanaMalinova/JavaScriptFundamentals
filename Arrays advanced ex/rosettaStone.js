function rosettaStone(mainArr) {
    //65-90
    let n = Number(mainArr.shift())
    let matrix = [];
    for (let i = 0; i < n; i++) {
        let row = mainArr.shift().split(' ');
        matrix.push(row);      
    }
    let startNum = 0;
    mainArr = mainArr.map((a) => a.split(' ').map(Number));
    
    
    
}
rosettaStone([ '2','59 36',
'82 52',
'4 18 25 19 8',
'4 2 8 2 18',
'23 14 22 0 22',
'2 17 13 19 20',
'0 9 0 22 22' ])
