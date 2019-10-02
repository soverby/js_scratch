const Identity = value => ({
   map: fn => Identity(fn(value))
});

const trace = x => {
    console.log(x);
    return x;
};

const u = Identity(2);

const r1 = u;
const r2 = u.map(x => x);

r1.map(trace);
r2.map(trace);

const f = n => n + 1;
const g = n => n * 2;

const r3 = u.map(x => f(g(x)));
const r4 = u.map(g).map(f);

r3.map(trace);
r4.map(trace);

