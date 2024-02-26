const person = {
    name: 'fff',
    lastName: 'sdfsf',
    age: 17
}

const child = {
    ...person,
    toys: 'spiderman'
}

console.log(child)
//
// person.isMaried = true
//
// console.log(person)
// console.log(child)
//
// const kid = person;
//
// console.log(kid)
//
// kid.car = 'bmw'
//
// console.log(person)
// console.log(kid)


//decomposition

person.car = 'Audi'
const {name, lastName, car, age, ...rest} = person

console.log(name)
console.log(lastName)
console.log(car)
console.log(age)

person.isToys = true

const {isToys} =person
console.log(isToys)

let arr = [10 ,20 ,30 ,40, 50]

const [first, second, third, ...restArr] = arr

console.log(first)
console.log(second)
console.log(third)
