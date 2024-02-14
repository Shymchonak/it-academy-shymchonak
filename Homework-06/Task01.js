
let array = []
const startNumber = 1
const elementsNumber = 7
function getFibonaci(n) {
    return n <= 1 ? n : getFibonaci(n - 1) + getFibonaci(n - 2);
}

function arrayOfFibonaci (start, numberOfElements) {
    for (let i = start; i < (start + numberOfElements); i++){
        array.push(getFibonaci(i))
    }
    return  array
}

console.log(arrayOfFibonaci(startNumber,elementsNumber))