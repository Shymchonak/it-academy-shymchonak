

let maxNumber = 0
let originArray = [100,306,10005,105,709]

//1й способ
function getMaxNumberOfArray (array){
    for (let i = 0; i < array.length; i++){
        if (array[i+1] > array[i] && array[i+1] > maxNumber){
            maxNumber = array[i+1]
        } else if (array[i] > maxNumber){
            maxNumber = array[i]
        }
    }
    return maxNumber
}

console.log (getMaxNumberOfArray(originArray))


//2й    способ

function getMaxNumber(Array){
    return Math.max.apply(null, Array)
}
console.log (getMaxNumber(originArray))