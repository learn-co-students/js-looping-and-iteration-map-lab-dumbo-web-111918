// Code your solution in this file.

function lowerCaseDrivers(arr) {
  return arr.map(d => d.toLowerCase());
}

function nameToAttributes(arr) {
  return arr.map(function (d) {
    let name = d.split(" ");
    return {firstName: name[0], lastName: name[1]}
  })
}

function attributesToPhrase(arr) {
  return arr.map(function (d) {
    return `${d.name} is from ${d.hometown}`
  })
}
