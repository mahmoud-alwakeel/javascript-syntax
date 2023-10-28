class Animal {
    constructor(color = 'blue', energy = 100) {
        this.color = color
        this.energy = energy
    }
    isActive() {
        if(this.energy > 0) {
            this.energy -= 20
            console.log('Energy is decreasing, currently at:', this.energy)
        } else if (this.energy <= 0) {
            sleep();
          }
    }
    sleep() {
        this.energy += 20
        console.log('Energy is decreasing, currently at:', this.energy)
    }

    getColor() {
        console.log(this.color)
    }
}

class Cat extends Animal {
    constructor(sound = 'purr', canJumpHigh = true, canClimpTree = true, color, energy) {
        super(color, energy)
        this.sound = sound
        this.canJumpHigh = canJumpHigh
        this.canClimpTree = canClimpTree
    }
    makeSound() {
        console.log('sound: ', this.sound)
    }
}

class Bird extends Animal {
    constructor(sound = 'shirp', canFly = true, color, energy) {
        super(color, energy)
        this.sound = sound
        this.canFly = canFly
    }
    makeSound() {
        console.log('sound: ', this.sound)
    }
}

class HouseCat extends Cat {
    constructor(houseCatSound = 'meow', sound, canJumpHigh, canClimpTree, color, energy) {
        super(sound, canJumpHigh, canClimpTree, color, energy)
        this.houseCatSound = houseCatSound
    }
    makeSound(option) {
        if(option) {
            super.makeSound()
        }
        console.log(this.houseCatSound)
    }
}

class tiger extends Cat {
    constructor(tigerSound = 'roar', sound, canJumpHigh, canClimpTree, color, energy) {
        super(sound, canJumpHigh, canClimpTree, color, energy)
        this.tigerSound = tigerSound
    }
    makeSound(option) {
        if(option) {
            super.makeSound()
        }
        console.log(this.tigerSound)
    }
}

class Parrot extends Bird {
    constructor(canTalk, sound,canFly, color, energy) {
       super(sound, energy, canFly, color) 
       this.canTalk = canTalk
       
       
    }
    makeSound(option) {
        if(option) {
            super.makeSound()
        }
        if(this.canTalk) {
            console.log("I'm a talking parrot!")
        }
    }
}

var parroty1 = new Parrot(true)
parroty1.makeSound()
parroty1.getColor()
console.log(parroty1.energy)
parroty1.isActive()

var penguin = new Bird('shreik', false, 'black & white', 90)
console.log(penguin)

var petsy = new HouseCat()

petsy.makeSound(true)
console.log(petsy)

petsy.makeSound(false)
console.log(petsy)

var simba = new tiger()
simba.makeSound(false)
console.log(simba)

simba.makeSound(true)
console.log(simba)