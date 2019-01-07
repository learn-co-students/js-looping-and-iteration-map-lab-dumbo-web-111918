// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  let driversArray = drivers.map(function(name){
    return name.toLowerCase();
  });
  return driversArray
}

function nameToAttributes(drivers) {
  let driverstFirstLast = drivers.map(function(name){
      const first = name.split(' ')[0];
      const last = name.split(' ')[1];
    return {firstName: first, lastName: last};
    });
  return driverstFirstLast
}

function attributesToPhrase(drivers) {
  let newArray = drivers.map(function(drivers){
    return `${drivers.name} is from ${drivers.hometown}`;
  });
  return newArray
}
