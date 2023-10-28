// Using class instance as another class constructor's property
class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, BikePosition, TreadmillPosition) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(BikePosition, 7)
        this.treadMill = new Treadmill(TreadmillPosition, 5)
    }
}

var wakeelGym = new Gym('24/7', '1st floor', '2nd floor')
console.log(wakeelGym.openHrs)
console.log(wakeelGym.stationaryBike)
console.log(wakeelGym.treadMill)