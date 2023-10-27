let color = 'red'

if(color == 'red') {
    let color = 'blue'
    //console.log(color)
}
console.log(color)


var globalVar = 77

function scopeTest() {
    var localVar = 88
}

console.log(localVar)