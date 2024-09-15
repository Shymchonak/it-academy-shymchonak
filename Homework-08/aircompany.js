
class Aircompany {
    constructor() {
        this.airPark = []
    }
    addPlane(plane){
        this.airPark.push(plane)
    }

    getLoadCapacity(){
        let capacity = 0
        for(let plane of this.airPark) {
            if(plane.planeCategory === 'Cargo'){
                capacity += plane.loadCapacity
            }
        }
        return capacity
    }
    getNumberOfSeats(){
        let seats = 0
        for (let plane of this.airPark){
            if(plane.planeCategory === 'Passenger'){
                seats += plane.numberOfPassengers
            }
        }
        return seats
    }
    //сортировака всех аппаратов по дальности полета
    sortByFlightRange() {
       return this.airPark.sort((a,b) => a.flightRange > b.flightRange ? 1 : -1)
    }
    sortByFlightRangeReverted() {
        return this.airPark.sort((a,b) => a.flightRange > b.flightRange ? -1 : 1)
    }
    //сортировка по количеству посадочных мести
    sortByNumberOfPassengers() {
        let seatsArray = []
        for (let plane of this.airPark){
            if(plane.planeCategory === 'Passenger' || plane.planeCategory === 'Helicopter'){
                seatsArray.push(plane)
            }
        }
        return  seatsArray.sort((a, b) => a.numberOfPassengers > b.numberOfPassengers ? 1 : -1)
    }

    //сортировка по грузоподъемности
    sortByCapacity() {
        let seatsArray = []
        for (let plane of this.airPark){
            if(plane.planeCategory === 'Cargo' || plane.planeCategory === 'Helicopter'){
                seatsArray.push(plane)
            }
        }
        return  seatsArray.sort((a, b) => a.loadCapacity > b.loadCapacity ? 1 : -1)
    }


    //Выводятся аппарты в диспоазоне (выше первого параметра и до 2ого) если 2 не указан - выше 1-ого
    sortByCapacityHigher(lowCapacity, highCapacity = 10000000000000) {
        return this.airPark.filter(plane => plane.loadCapacity <= highCapacity && plane.loadCapacity >= lowCapacity)
    }
    //Выводятся аппарты в диспоазоне (ниже первого параметра и до 2ого) если 2 не указан - ниже 1-ого
    sortByCapacityLower(highCapacity , lowCapacity = 0) {
        return this.airPark.filter(plane => plane.loadCapacity <= highCapacity && plane.loadCapacity >= lowCapacity)
    }


    //Выводятся аппарты в диспоазоне (выше первого параметра и до 2ого) если 2 не указан - выше 1-ого
    sortByFlightRangeHigher(lowFlightRange, highFlightRange = 100000000000){
        return this.airPark.filter(plane => plane.loadCapacity <= highFlightRange && plane.loadCapacity >= lowFlightRange)
    }
    //Выводятся аппарты в диспоазоне (ниже первого параметра и до 2ого) если 2 не указан - ниже 1-ого
    sortbyFlightRangeLower(highFlightRange, lowFlightRange = 0){
        return this.airPark.filter(plane => plane.loadCapacity <= highFlightRange && plane.loadCapacity >= lowFlightRange)
    }


}

module.exports =Aircompany;