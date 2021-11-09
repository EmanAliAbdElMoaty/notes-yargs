const car = {
    name:'BMW',
    color:'Black'
}
// console.log(car)
// console.log(car.name)

// Convert object --> JSON (stringfy)

// const carJson = JSON.stringify(car)

// console.log(carJson)

// // Convert JSON --> Object (parse)

// const carObject = JSON.parse(carJson)
// console.log(carObject)
///////////////////////////////////////////////////////////////////////////////

const fs = require('fs')
// error
// fs.writeFileSync('Trials.json',carObject)

// fs.writeFileSync('Trials.json',carJson)

// console.log(fs.readFileSync('Trials.json').toString())

//////////////////////////////////////////////////////////////////////////////

// Task
/**
 * 1) Create object person name age
 * 2) object --> json
 * 3) write json
 * 4) read
 * 5) json --> object
 * 6) update object
 * 7) write
 */

const person = {
    name:'Omar',
    age:30
}

const personJson = JSON.stringify(person)
// console.log(personJson)

fs.writeFileSync('person.json',personJson)

const dataBuffer = fs.readFileSync('person.json').toString()
console.log(dataBuffer)

const obj = JSON.parse(dataBuffer)
console.log(obj)
obj.name = 'Yassin'
obj.age = 20

const userJson = JSON.stringify(obj)
fs.writeFileSync('person.json',userJson)