function sayGood(someThing){
    return function(name){
        console.log(`Good ${someThing} to ${name}`)
    }
}

const to = sayGood('day');
to('Anderson');

sayGood('day')('Santos');
