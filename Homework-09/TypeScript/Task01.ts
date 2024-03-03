

interface Person {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
}

let personOne:Person = {
    name: 'Max Mustermann',
    age: 25,
    occupation: 'Chimney sweep',
    car: 'VW'
}

let personTwo: Person = {
    name: 'Kate Müller',
    age: 23,
    occupation: 'Astronaut',
    children: 2
}

console.log(personTwo)
console.log(personOne)


// const users  = [
//     {
//         name: 'Max Mustermann',
//         age: 25,
//         occupation: 'Chimney sweep',
//         car: 'VW'
//     },
//     {
//         name: 'Kate Müller',
//         age: 23,
//         occupation: 'Astronaut',
//         children: 2
//     }
// ];
