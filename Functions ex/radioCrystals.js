function radioCrystals(input) {
    let desiredThickness = input[0];
    let counter = 0;
    let result = 0;
    function transportAndWash(a) {
        a = Math.round(a);
        console.log('Transporting and washing');
    }
    let xRay = (a) => a + 1;
    function cutDownInFour(x, y) {
        if (x / 4 >= y) {
            counter++;
            result = x / 4;
            cutDownInFour(x / 4, y);
        } else {
            console.log(`Cut x${counter}`);
            transportAndWash(result);
            counter = 0;
        }
    }
    function lappesTwentyPer(a, b) {
        if (a - 0.2 * a >= b) {
            counter++;
            result = a - 0.2 * a;
            lappesTwentyPer(a - 0.2 * a, b);
        } else {
            console.log(`Lap x${counter}`);
            transportAndWash(result);
            counter = 0;
        }
    }
    function grindesTwentyMcr(x, y) {
        if (x - 20 >= y) {
            counter++;
            result = x - 20;
            grindesTwentyMcr(x - 20, y);
        } else {
            console.log(`Grind x${counter}`);
            transportAndWash(result);
            counter = 0;
        }
    }
    function etchCrystal(a, b) {
        if (a - 2 >= b - 1) {
            result = a - 2;
            counter++;
            etchCrystal(a - 2, b);
        } else {
            console.log(`Etch x${counter}`);
            transportAndWash(result);
            counter = 0;
        }
    }
    for (let i = 1; i < input.length; i++) {
        let currentThickness = input[i];
        console.log(`Processing chunk ${currentThickness} microns`);
        if (currentThickness / 4 >= desiredThickness) {
            cutDownInFour(currentThickness, desiredThickness);
            currentThickness = result;
        }
        if (currentThickness - 0.2 * currentThickness >= desiredThickness) {
            lappesTwentyPer(currentThickness, desiredThickness);
            currentThickness = result;
        }
        if (currentThickness - 20 >= desiredThickness) {
            grindesTwentyMcr(currentThickness, desiredThickness);
            currentThickness = result;
        }
        if (currentThickness - 2 >= desiredThickness - 1) {
            etchCrystal(currentThickness, desiredThickness);
            currentThickness = result;
        }
        if (currentThickness === desiredThickness - 1) {
            currentThickness = xRay(currentThickness);
            console.log(`X-ray x1`)
        }
        console.log(`Finished crystal ${desiredThickness} microns`)
    }

}
radioCrystals([1000, 4000, 8100])