// Code your solution in this file.
const drivers = ['Bobby','Sammy','Sally','Annette','Sarah','Bobby'];

function lowerCaseDrivers(arr) {
    const lowerCaseArr = arr.map(function(el){
        return el.toLowerCase();
    })
    return lowerCaseArr;
}

function nameToAttributes(arr) {
    return arr.map(function(el) {
      let first = el.split(" ")[0];
      let last = el.split(" ")[1];
      return {firstName: first, lastName: last}
    })
  }

  function attributesToPhrase(obj) {
    return obj.map(function(el) {
       return ( `${el.name} is from ${el.hometown}`)
    })
  }
