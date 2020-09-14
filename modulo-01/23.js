function Product(name, price, discount = 0.15) {
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.finalPrice = function () {
        return (this.price * (1 - this.discount)).toFixed();
    }
    let private = true;
}

Product.prototype.log = function(){
    console.log(`name: ${this.name}`)
}

const p1 = new Product('Caneta', 8.59);
const p2 = new Product('Lapis', 3.59);

p1.log();
p2.log();