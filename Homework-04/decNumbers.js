

const minNumber = 1
const maxNumber = 15
const numberOfParts = 3
let myDecArray = []
let decSumm = 0
let onePart = 0
let numberOfTry = 1



//В десятичными числами

function randomDecimalNumber (min, max) {
    let decimal = Math.random() * ((max - min + 1) + min);
    return decimal.toFixed(2)
}

do  {
    decSumm = 0
    myDecArray= []
    for (let i = 0; i< numberOfParts; i++){
        onePart = randomDecimalNumber(minNumber, maxNumber - decSumm)
        myDecArray[i] = onePart
        console.log(myDecArray[i])
        decSumm += Number(myDecArray[i])
        console.log(`eto summa ${decSumm}`)

    }
    console.log(`******************************`)
    console.log(`Number of tries: ${numberOfTry}`)
    numberOfTry++
} while (decSumm !== maxNumber)


console.log(String(myDecArray))