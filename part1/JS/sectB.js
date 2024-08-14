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
    names: {
        first: 'Hector',
        last: 'Bellerin',
    },
    grades: [2, 3, 5, 3],
    dept: 'SPPU',
}

console.log(obj3)
console.log(obj1.name)

obj1.address = "Wendywood"
obj1['secret number'] = 12341

console.log(obj1)


/*Functions*/

const sum = (num1, num2) => {
    console.log("Numbers : ", num1, " & ", num2)


    return num1 + num2
}

const result = sum(4, 9)
console.log("The sum of two numbers: ", result)

const square = num1 => {
    return num1 * num1
}

const res = square(7)
console.log("Square of number : ", res)

const arr = [3, 6, 8, 2, 5]
const arrSquare = arr.map(t => t * t)


/*Object methods and "this"*/

const arto = {
    name:"INdiana Jones",
    age:72,
    education:"Master's",
    greet:function(){
        console.log('Hello, my name is ',this.name)
    },
}

arto.greet();