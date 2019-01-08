// Code your solution in this file.

function lowerCaseDrivers(array) {
  const mappedArray = array.map(function(driver) {
    return driver.toLowerCase();
  })
  return mappedArray;
}

function nameToAttributes(array) {
  const keyValue = array.map(makeNameObj)
  return keyValue;
}


function makeNameObj (fullName) {
    const splitted = fullName.split(" ");
    const first = splitted[0]
    const last = splitted[1]
    return {firstName: first, lastName: last}
}


function attributesToPhrase(array) {
    const hometown = array.map(function(obj) {
      return `${obj.name} is from ${obj.hometown}`
    })
    return hometown;
}
