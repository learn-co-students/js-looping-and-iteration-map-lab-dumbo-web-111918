// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (elem) {
    return elem.toLowerCase();
  });
}

function nameToAttributes(drivers) {
  return drivers.map(function (driver) {
    let newDriver = {};
    let nameArr = driver.split(" ");
    newDriver.firstName = nameArr[0];
    newDriver.lastName = nameArr[1];
    return newDriver;
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function (driver) {
    return `${driver.name} is from ${driver.hometown}`;
  });
}