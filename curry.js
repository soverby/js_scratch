
// funct that accepts f and arr (init empty) returns
// funct that accepts object spread of args of f returns
// funct that accepts one arg?
const curry =
    (f, arr = []) => {
        console.log(arr)
        return (...args) => {
            console.log(...args);
            return (a => a.length === f.length ? f(...a) : curry(f, a))
    ([...arr, ...args]) }}

const fadd = (a, b, c) =>  a + b + c;

const fcomposed = curry(fadd);

// console.log(fcomposed);

// const form1 = fcomposed(1, 2, 3);
// const form2 = fcomposed(1, 2)(3);
const form3 = fcomposed(3)(4)(5);

// console.log(form1);
// console.log(form2);
// console.log(form3);

