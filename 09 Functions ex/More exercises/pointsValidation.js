function pointsValidation(coordinates) {
    let distanceCalculator = (x1, x2, y1, y2) => Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2));
    let distanceTo0Calc = (a, b) => Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    let distance1 = distanceTo0Calc(coordinates[0], coordinates[1]);
    let distance2 = distanceTo0Calc(coordinates[2], coordinates[3]);
    let distance3 = 0;
    if (distance1 === 0) {
        distance3 = distance2;
    } else if (distance2 === 0) {
        distance3 = distance1;
    } else {
        distance3 = distanceCalculator(coordinates[2], coordinates[0], coordinates[3], coordinates[1]);
    }
    let value1 = 'valid';
    let value2 = 'valid';
    let value3 = 'valid';
    let integerChecker = (a) => Number.isInteger(a);
    if (!integerChecker(distance1)) {
        value1 = 'invalid';
    }
    if (!integerChecker(distance2)) {
        value2 = 'invalid';
    }
    if (!integerChecker(distance3)) {
        value3 = 'invalid';
    }
    console.log(`{${coordinates[0]}, ${coordinates[1]}} to {0, 0} is ${value1}`);
    console.log(`{${coordinates[2]}, ${coordinates[3]}} to {0, 0} is ${value2}`);
    console.log(`{${coordinates[0]}, ${coordinates[1]}} to {${coordinates[2]}, ${coordinates[3]}} is ${value3}`);

}
pointsValidation([2, 1, 1, 1])