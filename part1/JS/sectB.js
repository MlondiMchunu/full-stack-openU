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

const z = [4, 8, 2]

const z1 = z.map((value) => '<li>' + value * 2 + '</li>')

console.log(z1)

//destructuring assignment
const t1 = [1, 2, 3, 4, 5, 6, 7, 8]

const [first, second, third, ...rest] = t1

console.log(second)
console.log(rest)

/*Objects */

const obj1 = {
    name: 'Mlo',
    age: 29,
    education: 'BE',
}

const obj2 = {
    name: 'Full Stack',
    level: 'intermediate studies',
    size: 5,
}

const obj3 = {
    names:{
        first:'Hector',
        last:'Bellerin',
    },
    grades: [2,3,5,3],
    dept:'SPPU',
}

