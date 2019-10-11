// rest
const g = (...parms) => {
    console.log(`parms: ${JSON.stringify(parms)}`)
    return parms.reduce( (accum, n) => {
        // console.log(`accum: ${accum}, n: ${n}`)
        return accum + (n * 2)
    }, 0)
}

const b = [1, 2, 3, 4];

console.log(`1 - ${g(...b)}`) // spread
console.log(`2 - ${g(b)}`) // busted ;p
console.log(`3 - ${g(1, 2, 3, 4)}`)


const x = (a, b, c) => a + b + c
// spread
console.log(`4 - ${x(...b)}`)


const obj1 = {
    one: 'one',
    two: 'two',
    three: 'three',
}

const obj2 = {
    four: 'four',
    five: 'five',
    six: 'six',
}

const obj3 = { ...obj1, ...obj2 }

console.log(`${JSON.stringify(obj3)}`)

