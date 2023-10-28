class Train {
    constructor(color, lightsOn) {
        this.color = color
        this.lightsOn = lightsOn
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn
    }
    lightStatus() {
        console.log('lights on ? ', this.lightsOn)
    }
    getSelf(){
        console.log(this)
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this)
        console.log("proto");
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn)
        this.passengers = passengers
        this.highSpeedOn = highSpeedOn
    }

    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn
        console.log('High speed status?', this.highSpeedOn)
    }

    // polymorphism
    toggleLights() {
        super.toggleLigths();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('blue', false)
console.log(myFirstTrain)

console.log("----- train4 -----")
var train4 = new Train('red', false)
train4.toggleLights()
train4.lightStatus()
train4.getSelf()
train4.getPrototype()



var highSpeedTrain1 = new HighSpeedTrain(200, false, 'green', false)
highSpeedTrain1.getSelf()
highSpeedTrain1.getPrototype()