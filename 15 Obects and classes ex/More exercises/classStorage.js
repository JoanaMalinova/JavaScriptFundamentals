function classStorage() {
    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.totalCost = 0;
            this.storage = {};
        }
        addProduct(product) {
            if(this.capacity - product.quantity < 0){
                this.capacity = 0;                
                this.storage[product.name] = product;
                this.storage[product.name].quantity = product.quantity - this.capacity;
            }else{
                this.storage[product.name] = product;
                this.capacity -= product.quantity;
            }            
            this.totalCost += product.price * product.quantity;
        }
        getProducts() {
            let result = [];
            for (let key of Object.keys(this.storage)) {
                let current = JSON.stringify(this.storage[key]);
                result.push(current);
            }
            return result.join(`\n`)
        }
    }
    let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
    let productTwo = { name: 'Tomato', price: 0.90, quantity: 30 };
    let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    console.log(storage.getProducts());
    console.log(storage.capacity);
    console.log(storage.totalCost);

}
classStorage()