const trace = label => value => console.log(`${label} : ${value}`)

const Id = value => ({
    // functor mapping
    map: f => Id.of(f(value)),
    // Monad - Id chaining
    flatMap: f => f(value),
    toString: `Id(${value})`
})

// Identity
Id.of = x => Id(x)

// of(x).f(b) = f(x).of(b)

const f = n => n * 2;
const g = n => n + 1;

console.log(`${Id.of(3).map(f).toString === Id.of(f(3)).toString}`)

const x = 5;

// Left identity
// unit(x).flatMap(f) ==== f(x)
trace('Id monad left identity')
     ([ Id(x).flatMap(f), f(x) ]);

// Right identity
// m.flatMap(unit) ==== m
trace('Id monad right identity')
     ([Id(x).flatMap(Id.of).toString, Id(x).toString ]);


console.log(`${Id(x).flatMap(g)}`)

// Associativity
// m.flatMap(f).flatMap(g) ==== // m.flatMap(x => f(x).flatMap(g)

// trace('Id monad associativity')([
// Id(x).flatMap(g).flatMap(f),
//     Id(x).flatMap(x => g(x).flatMap(f)).toString
// ])

