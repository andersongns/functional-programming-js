const doOrNot = (value, percent) => {
    return new Promise((resolve, reject) => {
        if (Math.random() < percent) {
            reject('Do wrong');
        }
        resolve(value);
    });
}


doOrNot('try', 0.1)
    .then(console.info)
    .catch(console.error);