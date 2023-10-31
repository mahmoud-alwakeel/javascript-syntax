//Using the spread operator, it's easy to concatenate arrays:
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
// this will print the two arrays inside an array
const fruitsAndBerries = [fruits, berries]
console.log(fruitsAndBerries)

// while using rest the 2 arrays will be concatenated

const concatenateFruitsAndBerries = [...fruits, ...berries]
console.log(concatenateFruitsAndBerries)

// It's also easy to join objects:  
const flying = {
    wings: 2
}

const car = {
    wheels: 4
}

const flyingCar = {
    ...flying, ...car
}
console.log(flyingCar)

// Add new members to arrays without using the push() method
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

// Convert a string to an array using the spread operator
const greeting = "good morning"

const arrayOfchars = [...greeting]

console.log(arrayOfchars)

// Copy either an object or an array into a separate one

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}

car1.speed = 201

console.log(car1.speed, car2.speed)

// You can copy an array into a completely separate array
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits1]
fruits1.pop()
console.log(fruits1, "not", fruits2)

