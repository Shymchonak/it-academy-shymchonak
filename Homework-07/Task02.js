//Сделайте функцию getNum, которая возвращает промис, который с задержкой в 3 секунды выведет
// случайное число от 1 до 5. Создайте async функцию, которая с помощью await будет дожидаться
// результата getNum, затем возводить его в квадрат и выводить на экран



const minNumber = 1
const maxNumber = 5
const milliSeconds = 3000

function getRandomNumber (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}


function getNum() {
    return new Promise( (result, reject) => {
    setTimeout(result, milliSeconds,getRandomNumber(minNumber, maxNumber))
})
}



async function getSqurOfNumber (){
    let result = await getNum()
    console.log((result))
    return console.log( result * result )
}

getSqurOfNumber()