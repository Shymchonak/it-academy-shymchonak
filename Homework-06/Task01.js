

const startNumber = 7
const elementsNumber = 12
function getFibonaci(n) {
    return n <= 1 ? n : getFibonaci(n - 1) + getFibonaci(n - 2);
}

function arrayOfFibonaci (start, numberOfElements) {
    let array = []
    for (let i = start; i < (start + numberOfElements); i++){
        array.push(getFibonaci(i))
    }
    return  array
}

console.log(arrayOfFibonaci(1,3))

console.log(arrayOfFibonaci(4,7))

console.log(arrayOfFibonaci(6,12))