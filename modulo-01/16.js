setTimeout(function () {
    console.log('Calling callback...');
    setTimeout(function () {
        console.log('Calling callback...');
        setTimeout(function () {
            console.log('Calling callback...');
        }, 2000);
    }, 2000);
}, 2000);

const waintingFor = (time = 2000) => {
    return new Promise((resolve) => {
        setTimeout (() => {
            resolve('Finally');
        },time);
    })
}

waintingFor(3000).then(console.log)