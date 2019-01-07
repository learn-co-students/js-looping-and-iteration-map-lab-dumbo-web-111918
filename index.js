// Code your solution in this file.

function lowerCaseDrivers (drivers) {

    let result = drivers.map((el)=> {
        return el.slice(0,1).toLowerCase() + el.slice(1);
    });
    console.log(result)
    return result;

}

//lowerCaseDrivers(['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']);
function nameToAttributes (drivers) {
    let result = drivers.map((el)=>{
        return `${el.firstName} ${el.lastName }`
    });
    return result;
}

// console.log(nameToAttributes([
//     { firstName: 'Bobby', lastName: 'Smith' },
//     { firstName: 'Sammy', lastName: 'Watkins' },
//     { firstName: 'Sally', lastName: 'Jenkins' },
//     { firstName: 'Annette', lastName: 'Sawyer' },
//     { firstName: 'Sarah', lastName: 'Hucklebee' },
//     { firstName: 'bobby', lastName: 'ridge' }
// ]))


function attributesToPhrase (drivers) {
    let result = drivers.map((el) => {
        return `${el.name} is from ${el.hometown}`
    });
    return result;
}

console.log(attributesToPhrase ([
    { name: 'Bobby', hometown: 'Pittsburgh' },
    { name: 'Sammy', hometown: 'New York' },
    { name: 'Sally', hometown: 'Cleveland' },
    { name: 'Annette', hometown: 'Los Angeles' },
    { name: 'Bobby', hometown: 'Tampa Bay' }
]))

// array of drivers as JavaScript objects and returns a string saying "<NAME OF DRIVER> is from <HOMETOWN>" for each JavaScript object in the array. Note that between the < and > we are looking for the value stored in the name and hometown object attributes, not the strings "DRIVER" or "HOMETOWN".