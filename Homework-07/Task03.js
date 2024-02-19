//Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды
// выведет случайное число от 1 до 5. Используйте также функцию getNum, чтобы вернуть промис,
// который с задержкой в 5 секунд выведет случайное число от 6 до 10. Создайте async функцию,
// которая с помощью await будет дожидаться результата getNum, затем будет дожидаться результата
// getNum, а затем найдет сумму полученных чисел и выводит на экран.

const minFirst = 1
const maxFirst = 5
const minSecond = 6
const maxSecond = 10
const milliSecondsFirst  = 3000
const milliSecondsSecond = 6000

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function getNum() {
    return new Promise((result, reject) => {
        setTimeout(result, milliSecondsFirst, getRandomNumber(minFirst, maxFirst))

    })
}
function getNumTwo() {
    return  new Promise( (result, reject) => {
            setTimeout(result, milliSecondsSecond,getRandomNumber(minSecond, maxSecond))
        })
}


// async function printFunctionResult () {
//     console.log(await getNum())
// }

async function getSummOfNumber (){
    let firstsumm = await getNum()
    let secondSumm = await getNumTwo()
    console.log(firstsumm)
    console.log(secondSumm)
   let summ =await Promise.all([firstsumm, secondSumm])

    return console.log(summ.reduce((curr, pre) => curr + pre, 0))
   //  return console.log(firstsumm + secondSumm)
}

getSummOfNumber()