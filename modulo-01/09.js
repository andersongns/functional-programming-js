const sum = (x, y) => console.log(x + y);

const subtract = (x, y) => console.log(x - y);

const exec = (callback, x, y) => callback(x, y);

exec(sum, 56, 38);
exec(subtract, 182, 27);