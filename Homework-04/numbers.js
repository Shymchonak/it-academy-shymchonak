

const minNumber = 1
const maxNumber = 15
const numberOfParts = 3
let myArray = []
let myDecArray = []
let decSummm = 0
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



//В десятичными числами

function randomDecimalNumber (min, max) {
    let decimal = Math.random() * ((max - min + 1) + min);
    return decimal.toFixed(2)
}

do  {
    decSumm = 0
    myDecArray= []
    for (let i = 0; i< numberOfParts; i++){
        onePart = randomDecimalNumber(minNumber, maxNumber - decSummm)
        myDecArray[i] = onePart
        console.log(myDecArray[i])
        decSummm += Number(myDecArray[i])
        console.log(`eto summa ${decSummm}`)

    }
    console.log(`******************************`)
    console.log(`Number of tries: ${numberOfTry}`)
    numberOfTry++
} while (decSummm !== maxNumber)


console.log(String(myDecArray))

