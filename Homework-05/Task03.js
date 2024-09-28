
const arr = [5, 15, 20, 40]
let sum =0
function getAverage (arrayOfNumbers){

    for (let i=0; i < arrayOfNumbers.length ; i++){
       sum += arrayOfNumbers[i]
    }
    return sum / arrayOfNumbers.length
}


console.log(getAverage(arr))