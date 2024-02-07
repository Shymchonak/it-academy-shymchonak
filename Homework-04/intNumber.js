

const minNumber = 1
const maxNumber = 150
const numberOfParts = 10
let myArray = []
let summ = 0
let onePart = 0
let numberOfTry = 1
function randomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
do  {
    summ = 0
    myArray= []
    for (let i = 0; i< numberOfParts; i++){
        onePart = randomNumber(minNumber, maxNumber - summ)
        myArray[i] = onePart
        console.log(myArray[i])
        summ += myArray[i]
        console.log(`eto summa ${summ}`)

    }
    console.log(`******************************`)
    console.log(`Number of tries: ${numberOfTry}`)
    numberOfTry++
} while (summ !== maxNumber)

console.log(String(myArray))