const label = 'Promise Composition'

const composePromises = (...ms) => (
    ms.reduce( (f, g) => {
        console.log(`f: ${f}, g: ${g}`)
        return x => g(x).then(f)
    })
)

const trace = label => value => console.log(`${label}: ${value}`)

const g = n => Promise.resolve(n + 1)
const f = n => Promise.resolve(n * 2)
const i = n => Promise.resolve(n + 5)

const h = composePromises(g, f, i)

h(20).then(trace(label))