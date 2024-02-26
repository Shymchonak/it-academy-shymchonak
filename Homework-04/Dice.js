

const numberOfTosses = 3
const diceFaces = 6
let firstPlayerScore = 0
let secondPlayerScore = 0
let stars = '************************************'
let i = 1

//одно подрасывание кубика
function Toss (minFace, maxFaces) {
    return Math.floor(Math.random() * (maxFaces - minFace + 1) + minFace);
}


//Подбрасываение кубика по очереде 2мя игоками заданное количество раз
function diceGame (tosses) {
    for (i ; i <= tosses; i++) {
        console.log (stars)
        console.log (`1st Player Turn`)
        console.log(`${i} Player try`)
       let firstPlayerTry= Toss(1, diceFaces)
        firstPlayerScore += firstPlayerTry
        console.log(firstPlayerTry)
        console.log (`2nd Player Turn`)
        console.log(`${i} Player try`)
        let secondPlayerTry= Toss(1, diceFaces)
        secondPlayerScore += secondPlayerTry
        console.log(secondPlayerTry)
    }
    return  firstPlayerScore, secondPlayerScore

}
// вызов функци подбрасывания кубиков игроками щаднное кличество раз
diceGame(numberOfTosses)
console.log(stars)
console.log(`Final 1st player score is: ${firstPlayerScore}`)
console.log(`Final 2nd player score is: ${secondPlayerScore}`)


console.log(stars)
//выявление попедителя после подбрасывания кубика игроками
if (firstPlayerScore < secondPlayerScore){
    console.log('2nd player WON');
}   else if (firstPlayerScore > secondPlayerScore){
    console.log(`1st Player WON`);
}   else {
    console.log(`It's a DRAW!!`);
}