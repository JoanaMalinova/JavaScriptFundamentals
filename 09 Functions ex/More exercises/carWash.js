function carWash(commandArr) {
    let value = 0;
    for (const command of commandArr) {
        switch(command){
            case 'soap': value += 10; break;
            case 'water': value += 0.2 * value; break;
            case 'vacuum cleaner': value += 0.25 * value; break;
            case 'mud': value -= 0.1 * value; break;
        }
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`)

}
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"])