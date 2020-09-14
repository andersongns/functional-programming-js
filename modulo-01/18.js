const generateNumberBetween = (min, max, time) => {
    if (min > max) [max, min] = [min, max];
    return new Promise(resolve => {
        setTimeout(() => {
            const factor = max - min + 1;
            const random = parseInt(Math.random() * factor) + min;
            resolve(random);
        }, time);
    })
}

const generateNumberAll = () => {
    return Promise.all([
        generateNumberBetween(1,60, 4000),
        generateNumberBetween(1,60, 5000),
        generateNumberBetween(1,60, 6000),
        generateNumberBetween(1,60, 7000),
        generateNumberBetween(1,60, 8000),
        generateNumberBetween(1,60, 9000),
        generateNumberBetween(1,60, 10000),
        generateNumberBetween(1,60, 3000),
    ])
};

generateNumberAll().then(numbers => console.log(numbers))

const generateNumberRace = () => {
    return Promise.race([
        generateNumberBetween(1,60, 4000),
        generateNumberBetween(1,60, 5000),
        generateNumberBetween(1,60, 6000),
        generateNumberBetween(1,60, 7000),
        generateNumberBetween(1,60, 8000),
        generateNumberBetween(1,60, 9000),
        generateNumberBetween(1,60, 10000),
        generateNumberBetween(1,60, 3000),
    ])
};

generateNumberRace().then(number => console.log(number));