function Product(name, price, discount = 0.15) {
    this.name = name;
    this.price = price;
    this.discount = discount;
    this.finalPrice = function () {
        return (this.price * (1 - this.discount)).toFixed();
    }
    let private = true;
}

const p1 = new Product('Caneta', 8.59);
const p2 = new Product('Lapis', 3.59);

console.log(p1.finalPrice());
console.log(p2);