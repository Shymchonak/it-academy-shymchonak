

const firstNumber = 831679
const secondNumber = 349620
let numberCounter = 0
let numberAndPosCounter =0
firstArray = Array.from(String(firstNumber))
secondArray =Array.from(String(secondNumber))


for (let i =0; i < firstArray.length; i++){

    for(let j =0 ;j < secondArray.length; j++){

        if (Number(firstArray[i]) === Number(secondArray[j])){
            numberCounter += 1
        }
        if ((Number(firstArray[i]) === Number(secondArray[j])) && i === j){
            numberAndPosCounter += 1

        }

    }

}
console.log(`Total numbers are: ${numberCounter}`)
console.log(`Total pos and values are: ${numberAndPosCounter}`)