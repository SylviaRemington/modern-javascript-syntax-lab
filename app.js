// Exercise 1 - Applying map()
// Assignment info is as follows:
// a. Use the `map()` method to iterate over the provided `nums` array
//
// b. Use the callback function of the `map()` method you wrote to
//    create a new array where each value is multiplied by 2.
//    Name the new array `numsTimesTwo`.
//
// c. Console log the new array.
//
// Starting code (don't modify this):
// const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

const numsTimesTwo = nums.map((num) => {
    return num*2;
});

console.log(numsTimesTwo);

// ______________________________________________________________

// Exercise 2 - Array destructuring
/*
Array destructuring in JavaScript is a way of unpacking the elements of an array. With array destructuring, we can extract elements from an array and store them in variables with a single line of code.
When we destructure an array, the elements are matched positionally with the variables we define, meaning the order in which we declare variables corresponds with the order of elements in the array.
*/
// a. Given the provided `pizzaToppings` array, use destructuring to extract 
//    the first and second values and place them into variables. Name the 
//    variable that corresponds to the first value `firstIngredient`. Name the 
//    variable that corresponds to the second value `secondIngredient`.
//
// b. Console log the `firstIngredient` and `secondIngredient` variables.
//
// Starting code (don't modify this):
// const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const pizzaToppings = ['Pineapple', 'Olives', 'Anchovies'];

const [firstIngredient, secondIngredient] = pizzaToppings;

console.log(firstIngredient);
// Prints: 'Pineapple' after node app.js in terminal
console.log(secondIngredient);
// Prints: 'Olives'

// ______________________________________________________________

// Exercise 3 - Object Destructuring / Destructuring objects lesson
/*
Destructuring can also be applied to objects. With object destructuring, we can extract properties from an object. Instead of accessing properties through dot or bracket notation, the values of specific properties in an object can be assigned to variables.
*/
// a. Given the provided `car` object, use destructuring to create two
//    variables: `make` and `model` that will hold the respective values.
//
// b. Console log the `make` and `model` variables.

const car = {
  make: 'Audi',
  model: 'Q5',
};

//Object destructuring:
const {make, model} = car;

console.log(make);
//Prints out in terminal: Audi
console.log(model);
//Prints out in terminal: Q5

// ______________________________________________________________

// Exercise 4: Applying the spread operator on arrays
// a. Duplicate the provided `morePizzaToppings` array using the spread 
//    operator and assign it to a variable named `uncontroversialPizzaToppings`.
// 
// b. Console log the `uncontroversialPizzaToppings` variable.

const morePizzaToppings = ['Cheese', 'Sauce'];

const uncontroversialPizzaToppings = [...morePizzaToppings];
console.log(uncontroversialPizzaToppings);
//Prints out new array with: [ 'Cheese', 'Sauce' ]

// ______________________________________________________________

// Exercise 5: Applying the spread operator on objects
// a. Duplicate the provided `anotherCar` object and spread its values into a 
//    new variable named `myCar`.
//
// b. Change the `make` and `model` properties of the `myCar` object to new 
//    values.
//
// c. Console log both objects and observe the results.
//
// Starting code (don't modify this):

const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};

//Duplicating another car & spreading its value into a new array
const myCar = { ...anotherCar };
console.log(myCar);

// Changing the make & model properties
myCar.make = 'Porsche'; //target goals lol for owning this car! lol
myCar.model = 'Macan';
console.log('Duplicated object with changed properties: ', myCar);

// ______________________________________________________________

