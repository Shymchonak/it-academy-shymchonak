
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
            if(plane.planeCategory === 'Passanger'){
                seats += plane.numberOfPassengers
            }
        }
        return seats
    }

    sortByFlightRange() {
       return this.airPark.sort((a,b) => a.flightRange > b.flightRange ? 1 : -1)
    }

    sortByCapacityHigher(lowCapacity, highCapacity = 10000000000000) {
        return this.airPark.filter(plane => plane.loadCapacity <= highCapacity && plane.loadCapacity >= lowCapacity)
    }
    sortByCapacityLower(highCapacity , lowCapacity = 0) {
        return this.airPark.filter(plane => plane.loadCapacity <= highCapacity && plane.loadCapacity >= lowCapacity)
    }

    sortByFlightRangeHigher(lowFlightRange, highFlightRange = 100000000000){
        return this.airPark.filter(plane => plane.loadCapacity <= highFlightRange && plane.loadCapacity >= lowFlightRange)
    }
    sortbyFlightRangeLower(highFlightRange, lowFlightRange = 0){
        return this.airPark.filter(plane => plane.loadCapacity <= highFlightRange && plane.loadCapacity >= lowFlightRange)
    }

}

module.exports =new Aircompany();