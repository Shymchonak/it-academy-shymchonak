
const number = '321123'
let answer = ''
function getHalfsSumms (number) {
    let firstSumm = 0
    let secondSumm = 0
    let firstHalf = number.slice(0, number.length / 2)
    let secondHalf = number.slice( number.length / 2, number.length)
    let firstArray = firstHalf.split('')
    let secondArray  = secondHalf.split('')
    for (let i =0; i < number.length / 2; i++){
       firstSumm += Number(firstArray[i])
       secondSumm += Number(secondArray[i])
    }
    if (firstSumm > secondSumm){
        answer = "yes" }
        else if (firstSumm < secondSumm) {
          answer = "No"
        } else { answer ="They are equals"
    }
    return answer
}

console.log(getHalfsSumms(number))