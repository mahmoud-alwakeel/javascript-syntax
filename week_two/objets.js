// objects literals an the dot notation
var user = {}
user.age = 22
user.specialization = "software engineer"
//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
assistantManager.health = 55
console.log(assistantManager)
console.log(assistantManager.socialSkills)


// object literals and the bracket notation

var house2 = {};
// wrapped each property's key as a string
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); // {rooms: 4, color: 'pink', priceUSD: 12345}


// can both access and update properties on objects using either the dot notation,
// or the brackets notation, or a combination of both
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); // {color: "green", speed: 100}

// With the brackets notation, I can add space characters inside property names
car["number of doors"] = 4;
console.log(car); // {color: 'green', speed: 100, number of doors: 4}


// there's one really useful thing that bracket notation has but is not available in the dot notation: 
// It can evaluate expressions.
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}