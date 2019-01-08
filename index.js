// Code your solution in this file.
function lowerCaseDrivers(drivers) {
const newDriver = drivers.map(function(driverName) {
   return(driverName.toLowerCase()
   )

  })
  return newDriver
}

function nameToAttributes(drivers) {
  return drivers.map(function(driverName) {
    const firstName = driverName.split(" ")[0]
    const lastName = driverName.split(" ")[1]
    return { firstName: firstName, lastName: lastName}
  })


}

function attributesToPhrase(drivers) {
    return drivers.map(function(driver){

      const name = driver.name
      const hometown = driver.hometown
      console.log(name, hometown)
      return `${name} is from ${hometown}`
    })

}
