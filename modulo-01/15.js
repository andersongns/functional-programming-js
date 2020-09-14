const promise = new Promise((resolve) => {
    return resolve(['Anderson', 'Gilson', 'Nascimento', 'Santos']);
});

const getFirstElement = (array) => array.find(Boolean);
const getFirstLetter = (string) => string.charAt(Boolean);
const toLowerCase = (letter) => letter.toLowerCase();

promise.then(getFirstElement)
       .then(getFirstLetter)
       .then(toLowerCase)
       .then(console.log)