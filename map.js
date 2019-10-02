
const map = f => arr => arr.map(f);

const mult = m => n => n * m;

const double = mult(2);
const triple = mult(3);

const doubler = map(double);
const tripler = map(triple)

const baseArr = [1, 2, 3, 4 ];

console.log(doubler(baseArr));
console.log(tripler(baseArr));


