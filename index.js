//This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
// function findMatching (list, string) {

//     //use filter to find all parts of array that match string in function
//     let answer = list.filter(function (name) {

//         //change all names to lowercase to account for different cases
//         return name.toLowerCase() === string.toLowerCase();
//     });

//     return answer;
// }

//re-write with arrow function/clean-up
function findMatching (list, string) {

    return list.filter(name => name.toLowerCase() === string.toLowerCase());
}


//This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.

function fuzzyMatch(list, string) {
    
    //filter to find array match that start wtih string passed in 
    return list.filter( letter => letter.toLowerCase().indexOf(string.toLowerCase()) === 0);

    //indexOf returns the index withing calling string. take index of the string passed in and see if it === 0. If index is 0 it means the letter is at the beginning of the array match

}


//This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

function matchName(drivers, string) {

    //filter to find the objects with the name that matches the string argument 
    return drivers.filter(driver => driver.name === string );
}

