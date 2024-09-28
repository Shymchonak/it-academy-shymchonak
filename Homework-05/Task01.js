const currentDate = new Date()


let dateSource = new Date (Date.UTC(2000,0,1))



let fridaysList = []

function fridaysCounter (sourceDate) {
    for (sourceDate; sourceDate < currentDate;sourceDate.setDate(sourceDate.getDate()+1)){

        if (sourceDate.getDay() === 5 && sourceDate.getDate() === 13){
            fridaysList.push(String(sourceDate))
        }
    }
    return fridaysList
}
fridaysCounter(dateSource)

console.log(fridaysList)

console.log(`Number of Fridaysis: ${fridaysList.length}`)