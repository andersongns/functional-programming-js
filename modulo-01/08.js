const getNumbers = (x) => (y) => (z) => (sum) => sum(x, y, z)

const sumThreeNumbers = function (x, y, z) {
    console.log(x + y + z)
}

const subtractThreeNumbers = function (x, y, z) {
    console.log(x - y - z)
}

const multiplyThreeNumbers = function (x, y, z) {
    console.log(x * y * z)
}

const numbers = getNumbers(1)(2)(3)

numbers(sumThreeNumbers)
numbers(subtractThreeNumbers)
numbers(multiplyThreeNumbers)