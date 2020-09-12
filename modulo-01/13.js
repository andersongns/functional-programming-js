const cart = [
    { name: 'Product 1', qtd: 10, price: 9.99 },
    { name: 'Product 2', qtd: 0, price: 9.99 },
    { name: 'Product 3', qtd: 4, price: 9.99 },
    { name: 'Product 4', qtd: 3, price: 9.99 },
    { name: 'Product 5', qtd: 1, price: 9.99 },
]

const sumQtd = (acc, el) => acc + el.qtd;

const sumQtdAndPrice = (acc, el) => {
    acc.price += el.price;
    acc.qtd += el.qtd;
    return acc;
};

const totQtd = cart.reduce(sumQtd, 0);
const totQtdAndPrice = cart.reduce(sumQtdAndPrice, { qtd: 0, price: 0 });

console.log(totQtd)
console.log(totQtdAndPrice)
