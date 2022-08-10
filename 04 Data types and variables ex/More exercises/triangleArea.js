function triangleArea(sideA,sideB,sideC) {
//Area = Square root of√s(s - a)(s - b)(s - c)
let halfPerimeter = (sideA + sideB +sideC) / 2;
let area = Math.sqrt(halfPerimeter * (halfPerimeter - sideA) * (halfPerimeter - sideB) * (halfPerimeter - sideC));
console.log(area)

}
triangleArea(2,
    3.5,
    4
    )