
interface User {
    name: string,
    age: number,
    occupation: string,

}

interface Admin {
    name: string,
    age: number,
    role: string,
}

type PersonTask02 = User | Admin;


const persons: PersonTask02[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

