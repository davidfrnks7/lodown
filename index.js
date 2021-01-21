'use strict';

// YOU KNOW WHAT TO DO //

/**
 * identity: The identity function takes in any function and returns it unchanged.
 * 
 * @param {*} value: The value going inside of identity.
 * 
 * @returns {*}: returns the value unchanged.
 */

function identity(value) {
    // Return the value unchaged.
    return value;
}

module.export.identity = identity;

/**
 * typeOF: The tyopeOf function takes in any value and returns a string
 * that describes the type of value that was passed into it.
 * 
 * @param {*} value: The value going inside of typeOf.
 * 
 * @ returns: {string}: returns a string that describes the data type of
 * the paramater
 */
 
function typeOf(value) {
    if (typeof(value) === "string") {
        return "string";
    } else if (Array.isArray(value)) {
        return "array";
    } else if (!Array.isArray(value) && !(value instanceof Date) && typeof value === "object" && value !== null) {
        return "object";
    } else if (value === undefined) {
        return "undefined";
    } else if (typeof value === "number") {
        return "number";
    } else if (typeof value === "boolean") {
        return "boolean";
    } else if (value === null) {
        return "null";
    } else if (typeof value === "function") {
        return "function";
    } else if (value instanceof Date) {
        return "date";
    }
}

module.export.typeOf = typeOf;

/**
 * first: Designed to give the first nth amount of values in an array or the first value
 * if no amount of values are specified.
 * 
 * @param {array} array: Teh array passed into first.
 * @paran {number} number: The number of values to be returned.
 * 
 * @return {array}: An array of the first nth values of the given array. An empty 
 * array if no array waws given or a negative value was given. The last value if no number
 * was given, but an array was given.
 */
 
function first(array, number) {
    // Checking that the value is an array, that it has contents, and that the number is a positive intiger.
    if (!Array.isArray(array) || number < 0 || array.lengtrh > 0) {
        // If the array is empty, the number is a negaive, or the value was not an array then we return am empty array.
        return [];
    // Checking if the number is greater than the total amount of items in the array.
    } else if (number > array.length) {
        // If the number given is greater than the amount of values in the array then we are returning the entire array.
        return array;
    // Double checking that ta number was given and is greater than one.
    } else if (number !== undefined && number > 1) {
        /**
         * If a number above 1 was given that is not greater than the amount of values in the array then we are retuning
         * that amount of values.
         */
        return array.slice(0, number);
    } else {
        // If the item was an array, has contents, but no number was given then then only the first index of the array is returned.
        return array[0];
    }
}

module.export.first = first;

/**
 * last: Designed to give the last nth amount of values in an array or the last value
 * if no amount of values are specified.
 * 
 * @param {array} array: The array passed into last.
 * @paran {number} number: The number of values to be returned.
 * 
 * @return {array}: An array of the last nth values of the given array. An empty 
 * array if no array waws given or a negative value was given. The last value if no number
 * was given, but an array was given.
 */
 
function last(array, number) {
    // Checking that the value is an array, that it has contents, and that the number is a positive intiger.
    if (!Array.isArray(array) || number < 0 || array.lengtrh > 0) {
        // If the array is empty, the number is a negaive, or the value was not an array then we return am empty array.
        return [];
    // Checking if the number is greater than the total amount of items in the array.
    } else if (number > array.length) {
       // If the number given is greater than the amount of values in the array then we are returning the entire array.
        return array;
    // Double checking that ta number was given and is greater than one.
    } else if (number !== undefined && number > 1) {
        /**
         * If a number above 1 was given that is not greater than the amount of values in the array then we are retuning
         * that amount of values starting from the end.
         */
        return array.slice(-number);
    } else {
        // If the item was an array, has contents, but no number was given then then only the last index of the array is returned.
        return array[array.length - 1];
    }
}

module.export.last = last;

/**
 * indexOf: Is designed to give the index of the first instance of a target value
 * inisde of an array.
 * 
 * @param {array} array: The array that will be searched inside.
 * @aaray {*} target: The target value to search for inside of the array.
 * 
 * @returned {number}: A number that will be the index of the first instance of the
 * gicen target value or -1 if the target value was not found or an array was not given.
 */
 
function indexOf(array, target) {
    // Checking that the value is an array, that it has contents, and that a target value is given.
    if (!Array.isArray(array) || target === undefined) {
        // If the array is empty or no target vlaue is given then -1 is returned.
        return -1;
    // Checking if the number is greater than the total amount of items in the array.
    } else {
        // Loop through the array using a for loop.
        for (let i = 0; i <= array.length - 1; i++) {
            // Each iteration of the loop we check if the current value is the target value.
            if (array[i] === target) {
                // When the target value is found the index of the value is given.
                return i;
            }
        }
        
        // If the loop ends then the target is not in the array an d-1 is returned.
        return -1;
    }
}


module.export.indexOf = indexOf;

/**
 * contains: Desgined to check if an array has a spesific value.
 * 
 * @param {array} array: The array that will be searched inside.
 * @param {*} target: The value that will be searched fpr inside of the array.
 * 
 * @return {bool}: A boolean will be returned to signify if the target value was found
 * within the array.
 */
 
function contains(array, target) {
    /**
     * Using indexOf we are checking if the output of it is greater than -1. If it is then it has the target value
     * and true is retrned. If it isn't then the target value is not inside the array and false is returned.
     */
    return ( (indexOf(array, target) > -1) ? true : false );
}

module.export.conatins = contains;

/**
 * each: Designed to iterate through a collection, Array or Object, and invokes
 * a callback function for each iteration.
 * 
 * @param {Array or Object} collection: The collection over which to iterate.
 * @param {Function} action: The Function to be applied to each value in the 
 * collection
 */
 
function each(collection, action) {
   if (Array.isArray(collection)) {
      for (var i = 0; i < collection.length; i++) {
           action(collection[i], i, collection);
       }
   } else {
       for (let key in collection) {
          action(collection[key], key, collection);
       }
   }
}
module.exports.each = each;

/**
 * unique: Designed to take in an array and remove all the duplicate values from it.
 * 
 * @param {array} array: They array passed into unique.
 * 
 * @return {array]: A new array that will have all the dulpicate values of the given
 * array removed from it.
 */
 
function unique(array) {
    // Creating an array for our output data.
    let output = [];
    
    // Looping through the given array.
    for (let i = 0; i < array.length; i++) {
        // Checking if the first instance of the value we are on is equal to the current idex we are on...
        if (indexOf(array, array[i]) === i) {
            //... then we push it into the array
            output.push(array[i]);
        }
    }
    // Return the output
    return output;
}

module.exports.unique = unique;

/**
 * filter: Designed to iterate through an array and pass each element and index into a callback funtion
 * and return an array conatining all value that returned true when the callback funtion is invoked.
 * 
 * @param {array} array: The array to be piterate through.
 * @paran {function} func: The function that will have each element and index of the array passed into it.
 * 
 * @return {array}: An array that will have every element that passed the test of the callback function.
 */
 
function filter(array, func) {
    let output = [];

    // Checking if an array was given
    if ( Array.isArray(array) ) {
        // Using each I am invoking the callback function through an anonymous function.
        each(array, function(e, i, a) {
            // Every time true is returned from the callback function we push that element into the output array.
            ( ( func(e, i, a) )? output.push(e) : null );
        });
    }
    
    return output;
}

module.exports.filter =  filter;

/**
 * reject: Designed to iterate through an array and pass each element and index into a callback funtion
 * and return an array conatining all value that returned false when the callback funtion is invoked.
 * 
 * @param {array} array: The array to be piterate through.
 * @paran {function} func: The function that will have each element and index of the array passed into it.
 * 
 * @return {array}: An array that will have every element that failed the test of the callback function.
 */
function reject(array, func) {
    let output = [];
    
    // Checking if an array was given
    if ( Array.isArray(array) ) {
        // Using each I am invoking the callback function through an anonymous function.
        each(array, function(e, i, a) {
            // Every time false  is returned from the callback function we push that element into the output array.
            ( ( func(e, i, a) ) ? null : output.push(e) );
        });
    }
    
    return output;
}

module.exports.reject = reject;

/**
 * partition: Designed to iterate through an array amd pass the element and idex of into a callback function
 * for each iteration then seperate the values into an array where the first nested array will have every
 * value that passed a test of the callback function and the second nested array will have every value that
 * failed the test of the callback functiuon.
 * 
 * @param {array} arrat: The array to iterate through.
 * @param {func} function: The function that will have and element and index passed into it for each interation.
 * 
 * @return {array}: An array with two nested arrays where the first nested array will have every nvalue that
 * passed a test of the callback function and the second nested array will have every value that failed the test
 * of the callback functiuon.
 */

function partition(array, func) {
    // Making two nested arrays for the output [ [true values], [false values]] 
    let output =[[], []];
    
    // Invoking filter and passing in an anonymous function
    filter(array, function(e, i, a) {
        /**
         * That anonymous function is invoking the callback function and passing in the expected arguements.
         * 
         * For every time the function is true we are pushing that item into the first nested array and
         * every time the function is false we are pushing that item into the second nested array.
         */
        ( func(e, i, 1) ? output[0].push(e) : output[1].push(e) );
    });
    
    // Returning the contents of output.
    return output;
}

module.exports.partition = partition;

/**
 * map: Designed iterate over a collection and invoke a callback funtion for each interation and passing an
 * array's indexes and elements or an object's keys and values then returning an array of new values the callback
 * function returned at each iteration.
 * 
 * @param {Array or Object} collection: The collection to be inetrated through.
 * @param {function} func: The function that will act on the elements of the collection for each interation.
 * 
 * @return {array}: An array with the values that returned when the arguements were passed into the callback
 * function at each iteration of the objecy.
 */
 
function map (collection, func) {
    // Creating an array for the output.
    let output = [];

    each(collection, function(e, i, a) {
        output.push( func(e, i, a) );
    });
    
    // Returning the contents of output.
    return output;
}

module.exports.map = map;

/**
 * pluck: Designed to iterate over an array of objects and return an array that has every value of a target property.
 * 
 * @param {array} array: An array of objects that will be iterated through.
 * @param {string} prop: The target property that will be searched for during the iteration.
 * 
 * @return {array}: An array that has the values of the target paramater that was passed into pluck.
 */
 
function pluck(array, prop) {
    // We are using the final result of map
    return map(array, function(e, i, a) {
        // That will give us a new array conatining the values of the target property.
        return array[i][prop];
    });
}

module.exports.pluck = pluck;

/**
 * every: Designed to iterate over a collection and for every iteration a callback function is invoked and an array's
 * indexes and elements or an object's keys and values are passed into it. If every iterations passed a test that the callback
 * funtion is checking for then true is returned. If any test on the callback funtion fails then false is returned.
 * 
 * @param {Aray or Object} collection: The collection to iterate through.
 * @param {function} func: The function that will test each element of the collection.
 * 
 * @return {boolean}: True if every element passes the test of the callback function. False if any element fails the test of the callback
 * fucntion.
 */
 
function every(collection, func) {
    // Creating a flag varaible that has a default state of true.
    let flag = true;
    
    // Checking if function was passed.
    if (func) {
        // If we have a function then we are going to use each and pass in an anonymouse function.
        each(collection, function(e, i, a) {
            // If any test of the callback function returns false
            if (!func(e, i, a) && typeof func(e, i, a) === "boolean") {
                // Flag is changed to false.
                flag = false;
            }
        });
    } else {
        // If we don't have a function then we are going to
        each(collection, function(e, i, a) {
            // Check if each element is a truthy value.
            if (!e) {
                // If any value is a falsy value then flag is changed to false.
                flag = false;
            }
        });
    }
    
    // Flag is returned.
    return flag;
}

module.exports.every = every;

/**
 * some: Designed to iterate over a collection and for every iteration a callback function is invoked and an array's
 * indexes and elements or an object's keys and values are passed into it. If at least one iterations passed a test
 * that the callback funtion is checking for then true is returned. If all of the test on the callback funtion fails
 * then false is returned.
 * 
 * @param {Aray or Object} collection: The collection to iterate through.
 * @param {function} func: The function that will test each element of the collection.
 * 
 * @return {boolean}: True if at least one element passes the test of the callback function. False no element passes
 * the test of the callback fucntion.
 */
 
function some(collection, func) {
    // Creating a flag varaible that has a default state of false.
    let flag = false;
    
    // Checking if function was passed.
    if (func) {
        // If we have a function then we are going to use each and pass in an anonymouse function.
        each(collection, function(e, i, a) {
            // If any test of the callback function returns true
            if (func(e, i, a) && typeof func(e, i, a) === "boolean") {
                // Flag is changed to true.
                flag = true;
            }
        });
    } else {
        // If we don't have a function then we are going to
        each(collection, function(e, i, a) {
            // Check if any element is a trutjy value.
            if (e) {
                // If any value is a truthy value then flag is changed to false.
                flag = true;
            }
        });
    }
    
    // Flag is returned.
    return flag;
}

module.exports.some = some;

/**
 * reduce: Designed to iterate through the array and either pass in a seed or the first element of the array into a 
 * callback function and then pass the returned value of the callback function into every subsequint iteration along with the
 * array's elment and index.
 * 
 * @param {array} array: The array to iterate through.
 * @param {function} func: The function that will be invoked for every iteration.
 * @param {*} seed: An optional seed that reduce will start with. If no seed is given then the first element of the array
 * will be used in it's place.
 * 
 * @return {*}: The final value that will be the product of the function that acted on every elment of the given array.
 */
 
 function reduce(array, func, seed) {
    // Checking if seed in defiled.
    if (seed !== undefined) {
        // Making a variable that starts with the value of seed.
        let prev = seed;
        
        // Invoking each and passing in an anonymouse function.
        each(array, function(e, i ,a){
            // Each loop we are updating the prev variable with the value the callback function returns  and passsinf the current value of prev into it..
            prev = func(prev, e, i);
        });
        
        // Returning the final result.
        return prev;
    }  else {
        // Declaring a prev variable.
        let prev;
        
        // Invoking each and passing in an anonymouse function.
        each(array, function(e, i ,a){
            // Checking if prev was defined.
            if (!prev) {
                // If it isn't then we assign it the value of, what should be, the first index of the array.
                prev = e;
            // If prev has a value.
            } else {
                // We are updating it with the return value of the callback function and passing the current value of prev into it.
                prev = func(prev, e, i);
            }
        });
        
        // Returning the final value.
        return prev;
    }
}

module.exports.reduce = reduce;

/**
 * extend: Desgined to take in at least 2 objects and add every key/value pair into the first object.
 * 
 * @param {object} obj1: The object that will have all the key/value pairs of the subsiquent objects added into.
 * @param {object} obj2: Any number of aditional objects that will have their key/value pairs added to the first
 * object.
 * 
 * @return {object}: The updated version of the first object.
 */
 
 function extend(obj1, ...obj2) {
    return Object.assign(obj1, ...obj2);
}

module.exports.extend = extend;