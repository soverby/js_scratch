const compose = (...fns) => x => fns.reduceRight( (y, f) => f(y), x);

const trace = label => value => {
    console.log(`${ label } : ${ value }`);
    return value;
}

const g = n => n + 1;
const f = n => n * 2;

const h = compose(
    trace(' after f'),
    f,
    trace('after g'),
    g
);

h(20);


