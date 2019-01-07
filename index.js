function lowerCaseDrivers(array) {
  return array.map(function(element) {
    return element.toLowerCase();
  });
}

function nameToAttributes(array) {
  return array.map(function(element){
    let arr = element.split(" ");
    return {firstName: arr[0], lastName: arr[1]};
  });
}

function attributesToPhrase(collection) {
  return collection.map(function(element) {
    return `${element["name"]} is from ${element["hometown"]}`
  });
}
