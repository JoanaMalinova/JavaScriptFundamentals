function loadingBar(number) {
    let loadBarPercent = number / 10;
    let loadBarArr = [];
    for (let i = 1; i <= loadBarPercent; i++) {
        loadBarArr.push('%');        
    }
    let loadBarDots = 10 - loadBarPercent;
    for (let j = 0; j < loadBarDots; j++) {
        loadBarArr.push('.');        
    }
    loadBarArr.unshift('[');
    loadBarArr.push(']');
    if( number === 100){
        console.log('100% Complete!');
        console.log(loadBarArr.join(''));
    }else{
        console.log(`${number}% ${loadBarArr.join('')}`);
        console.log('Still loading...');
    }
}
loadingBar(30)
loadingBar(50)
loadingBar(100)