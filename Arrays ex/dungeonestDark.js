function dungeonestDark(input) {
    let health = 100;
    let coins = 0;
    let inputString = input.toString();
    let newArr = inputString.split('|');
    let newArrString = newArr.join(' ').toString();
    let dungeon = newArrString.split(' ');
    let room = 0;
    for (let i = 0; i < dungeon.length; i += 2) {
        room++;
        switch (dungeon[i]) {
            case 'potion':
                if (health + Number(dungeon[i + 1]) >= 100) {
                    console.log(`You healed for ${100 - health} hp.`);
                    health = 100;
                } else {
                    health += Number(dungeon[i + 1]);
                    console.log(`You healed for ${dungeon[i + 1]} hp.`);
                }

                console.log(`Current health: ${health} hp.`);
                break;
            case 'chest':
                coins += Number(dungeon[i + 1]);
                console.log(`You found ${dungeon[i + 1]} coins.`);
                break;
            default:
                health -= Number(dungeon[i + 1]);
                if (health > 0) {
                    console.log(`You slayed ${dungeon[i]}.`)
                } else {
                    console.log(`You died! Killed by ${dungeon[i]}.`);
                    console.log(`Best room: ${room}`);
                    return;

                }
                break;
        }


    }
    console.log("You've made it!");
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`)
}
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])