const waintingFor = (time = 2000) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Finally');
        }, time);
    })
}

const main = async () => {
    const result = await waintingFor(3000)
    console.log(result);
}

main();

