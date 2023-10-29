// Task 1: Code a Person class
class Person {
    constructor(name = 'tom', age = 20, energy = 100) {
        this.name = name
        this.age = age
        this.energy = energy
    }
    sleep() {
        this.energy += 10
    }
    doSomethingFun() {
        this.energy -= 10
    }
}
// Task 2: Code a Worker class
class Worker extends Person {
    constructor(name, age, energy, xp = 0, hourlyWage = 10) {
        super(name, age, energy)
        this.xp = xp
        this.hourlyWage = hourlyWage
    }
    goToWork() {
        this.xp += 10
    }
}
// Task 3: Code an intern object, run methods
function intern() {
    let intern1 = new Worker('Bob', 21, 110, 0, 10)
    return intern1
}
const intern1 = intern();
console.log(intern1);

// Task 4: Code a manager object, methods
function manager() {
    let manager1 = new Worker('alice', 30, 120, 100, 30)
    manager1.doSomethingFun()
    return manager1
}
const manager1 = manager();
console.log(manager1);