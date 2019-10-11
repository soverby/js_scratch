
let obj = {
    a: 'a',
    b: 'b',
    c: {
        d: 'd'
    }
}

let copy = Object.assign({}, obj)

console.log(`copy: ${JSON.stringify(copy)}`)

obj.c.d = '12';

console.log(`copy: ${JSON.stringify(copy)}`)
