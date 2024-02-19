//Решить используя промисы и async/await. Сделайте 3 промиса, в каждом из которых
// расположена функция setTimeout со случайной задержкой от 1 до 5 секунд.
// Пусть первый промис возвращает число 1, второе - число 2, третий - число 3.
// С помощью Promise.race дождитесь загрузки первого сработавшего промиса и выведите результат
// его работы на экран.

const minSeconds = 1000
const maxSeconds = 5000

function getRandomSeconds (min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
let promiseOne = new Promise( (result, reject) => {
    setTimeout(result, getRandomSeconds(minSeconds, maxSeconds),'1')
})
    .catch((err) => {
        console.log(err)
    })

let promiseTwo = new Promise( (result, reject) => {
    setTimeout(result, getRandomSeconds(minSeconds, maxSeconds),'2')
})
    .catch((err) => {
    console.log(err)
})

let promiseThree = new Promise( (result, reject) => {
    setTimeout(result, getRandomSeconds(minSeconds, maxSeconds),'3')
})
    .catch((err) => {
    console.log(err)
})

Promise.race([promiseOne, promiseTwo, promiseThree]).then((value) =>{
console.log(value)
})

