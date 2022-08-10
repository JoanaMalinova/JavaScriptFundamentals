function thePyramidOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let gold = 0;
    let lapisLazuli = 0;
    let steps = 0;
    for (let i = base; i > 0; i -= 2) {
        steps += 1;
        if (i === 1 || i === 2) {
            gold = i * i * increment;
            break;
        } else if (steps % 5 === 0) {
            lapisLazuli += (4 * i - 4) * increment;
        } else {
            marble += (4 * i - 4) * increment;
        }
        stone += (i - 2) * (i - 2) * increment;

    }
    let height = steps * increment;
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height)}`)

}
thePyramidOfKingDjoser(23, 0.5)