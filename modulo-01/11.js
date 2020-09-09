const cart = [
    { name: 'Product 1', qtd: 10, price: 9.99 },
    { name: 'Product 2', qtd: 0, price: 9.99 },
    { name: 'Product 3', qtd: 4, price: 9.99 },
    { name: 'Product 4', qtd: 3, price: 9.99 },
    { name: 'Product 5', qtd: 1, price: 9.99 },
]

const getName = item => item.name;
const getTotals = item => item.qtd * item.price;

const products = cart.map(getName);
const sum = cart.map(getTotals);

console.log(products)
console.log(sum)