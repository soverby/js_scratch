const mapper = (fn) => (acc, item, index, arr) => {
    return acc.concat(fn(item, index, arr));
};

const map = fn => arr => arr.reduce(mapper(fn), []);

const square = n => n * n;

mapSquare = map(square);

console.log(mapSquare([1, 2, 3]));
console.log(mapSquare([2, 4, 6]));

