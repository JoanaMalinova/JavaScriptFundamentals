function classLaptop() {
    class Laptop {
        constructor(info, quality) {
            this.info = info;
            this.quality = quality;
            this.isOn = false;
            this.info.producer;
            this.info.age;
            this.info.brand;
            this.price = 800 - this.info.age * 2 + this.quality * 0.5;
        }
        turnOn() {
            this.quality -= 1;
            this.price = 800 - this.info.age * 2 + this.quality * 0.5;
            this.isOn = true;
        }
        turnOff() {
            this.quality -= 1;
            this.isOn = false;
            this.price = 800 - this.info.age * 2 + this.quality * 0.5;
        }
        showInfo() {
            let infoJSON = JSON.stringify(this.info);
            return infoJSON
        }
    }
    
}
classLaptop()