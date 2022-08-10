function distanceBetweenPoints(x1, y1, x2, y2) {
    let diff = 0;
    diff = Math.sqrt(Math.pow((Math.abs(y2 - y1)), 2) + Math.pow((Math.abs(x2 - x1)), 2));
    console.log(diff)
}
distanceBetweenPoints(2.34, 15.66, -13.55, -2.9985)