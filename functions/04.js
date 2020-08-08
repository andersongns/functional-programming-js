const goodDay = () => {
    console.log('Good day');
}

const goodNight = function () {
    console.log('Good night')
}

function callSomeFunction(fn) {
    fn();
}

callSomeFunction(goodDay);
callSomeFunction(goodNight);