function listArrayItems(arr) {
    for(i = 0; i < arr.length; i++) {
        //console.log(arr[i])
        console.log(i, arr[i])
    }
}

var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors)



var fruits = []
fruits.push('apple')
fruits.push('watermelon')
fruits.push('banana')
console.log(fruits)

fruits.pop()
console.log(fruits)


function arrayBuilder(one, two, three) {
    var array = []
    array.push(one)
    array.push(two)
    array.push(three)
    console.log(array)
}

arrayBuilder('1st', '2nd', '3rd')