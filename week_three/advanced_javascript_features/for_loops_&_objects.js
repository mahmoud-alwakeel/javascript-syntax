// learning the difference between (for) and (for in) and (for of)
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2))

const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3))

const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));

var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}
const obj1 = {a: 1, b: 2, c: 3};
for (const value of Object.values(obj1)) { 
  console.log(value); 
}

const obj = {a: 1, b: 2, c: 3};
const keys = Object.keys(obj);
 
for (let i = 0; i < keys.length; i++) {
  console.log(keys[i]);
}