function cats(input) {
    class Cat {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`)
        }
    }
    for (let currentCat of input) {
        let catArr = currentCat.split(' ')
        let catName = catArr[0];
        let catAge = catArr[1];
        let cat = new Cat(catName, catAge);
        cat.meow();
    }
}
cats(['Mellow 2', 'Tom 5'])