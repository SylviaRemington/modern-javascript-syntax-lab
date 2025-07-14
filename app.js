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









// ______________________________________________________________




