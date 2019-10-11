

const h = ({ g, h, a}) => {
    console.log(`g: ${g}, h: ${h}, a: ${a}`)
    return {
        g, h, a,
    }
}

console.log(`${JSON.stringify(h({
    b: 'b',
    c: 'c',
    a: 'a',
    d: 'd',
    g: 'g',
    h: 'h',
  }))}`)



