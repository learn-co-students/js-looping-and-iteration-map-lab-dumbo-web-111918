// Code your solution in this file.

function lowerCaseDrivers(drivers){
  return drivers.map(function(element){
    return element.toLowerCase();
 });
}

function nameToAttributes(drivers){

	return drivers.map(function(element) {
    const words = element.split(" ");
    const obj = {};
    const firstName = "";
    const lastName = "";
    obj['firstName'] = words[0];
    obj['lastName'] = words[1];
    return obj;
	});
}

function attributesToPhrase(drivers){
	return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
	});
}
