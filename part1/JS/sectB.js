/*variables*/

const x = 1
let y = 5

console.log(x, y)

y += 10

console.log(x, y)

y = 'sometext'

console.log(x, y)

// x = 4 (causes error)

/*Arrays*/

const t = [1, -1, 3]

t.push(8)

console.log(t.length)
console.log(t[1], t)

t.forEach(value => {
    console.log(value)
})

const z = [4,8,2]

const z1 = z.map((value)=>value * 2)

console.log(z1)