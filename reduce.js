
const r1 = [1, 2, 3].reduce( (acc, n) => acc + n, 0);


console.log(r1);

const f = (...vals) => {
    console.log(`val: ${vals}`)
    return vals.reduce( (acc, v) => {
        console.log(`acc: ${acc}, v: ${v}`)
        return acc + v
    }, 0)
}

console.log(`${f(1, 2, 3, 4)}`)



