// Code your solution in this file.
function lowerCaseDrivers(array) {
    return array.map(driver => driver.toLowerCase())
}

function nameToAttributes(array) {
    // const firstNames = array.map(person => person[0])
    // const lastNames = array.map(person => person[1])
    // let result = []
    // for (let i = 0; i < firstNames.length; i++) {
    //     result.push({firstName: firstNames[i], lastName: lastNames[i]})
    // }
    return array.map(driver => ({firstName: driver.split(" ")[0], lastName: driver.split(" ")[1]}))
}


function attributesToPhrase(array){
    return array.map(driver => `${driver.name} is from ${driver.hometown}`)
}


// const drivers = ["Mary Smith", "Bob Jones", "Cool Person", "James Brown", "Adam Supe"]

// nameToAttributes(drivers)

