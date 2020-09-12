const cart = [
    { name: 'Pen', qtd: 3, price: 1.25, isFragile: true },
    { name: 'Pencil', qtd: 5, price: 1.00, isFragile: false },
    { name: 'Book', qtd: 4, price: 29.90, isFragile: false },
    { name: 'Scissors', qtd: 1, price: 3.00, isFragile: true },
    { name: 'Eraser', qtd: 5, price: 1.50, isFragile: false },
]

const byFragileProdutcs = (product) => product.isFragile;

const totPricePerProducts = (product) => product.qtd * product.price;

const avgAllProducts = (acc, el) => {
    return {
        qtd: acc.qtd + 1,
        tot: acc.tot + el,
        avg: acc.tot / acc.qtd,
    }
};

const { avg } = cart.filter(byFragileProdutcs)
                .map(totPricePerProducts)
                .reduce(avgAllProducts, { qtd: 0, tot: 0, avg: 0 });

console.log(avg)
