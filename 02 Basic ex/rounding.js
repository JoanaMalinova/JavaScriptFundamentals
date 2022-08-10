function rounding(num,precision) {
    if (precision > 15){
        precision = 15;
    }
    let num1 = num.toFixed(precision);
    console.log(Number.parseFloat(num1));

}
rounding(10.5,3)