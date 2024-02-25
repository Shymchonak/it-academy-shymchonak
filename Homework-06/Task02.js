

const sourceArray = [1, 2, 3, 4, 5]

const inputArray =  [ 'a', 'b', 'c']


//1й вариан которы почему-то вставляет элементы в обратном порядке
// function perviVariant (position, whereinput, whatinput){
//
//       whatinput.map((elem) => whereinput.splice(position,0,elem))
//     return  whereinput
// }

//2й Вариант
function vtoroyVariant (position, whatInput, whereInput){

    whereInput.splice(position,0,whatInput)
    return  whereInput.flat()
}
//
// console.log(perviVariant(2, sourceArray, inputArray))
console.log(vtoroyVariant(2,inputArray, sourceArray))