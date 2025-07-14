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

const anotherCar = {
  make: 'Toyota',
  model: 'RAV4',
};

//Duplicating another car & spreading its value into a new array
const myCar = { ...anotherCar };
console.log(myCar);

// Changing the make & model properties
myCar.make = 'Porsche'; //target & life goals for owning this car! lol
myCar.model = 'Macan';
console.log('Duplicated object with changed properties: ', myCar);

// For clarity and answering 5c.
// Original Version 
console.log(anotherCar);

// Duplicated Spread Version with Changed Properties
console.log(myCar);

// ______________________________________________________________

// Exercise 6: Dynamic keys in objects
/*
Variables and expressions can be used as dynamic keys in an object by using bracket notation. Dynamic keys can be used to create, access, and modify properties in an object. Dynamic keys enhance our ability to access data.
This approach is handy in scenarios where key names are not known ahead of time or when they need to be computed on the fly. It also allows for more concise and readable code, avoiding the need for additional steps when assigning properties to objects.
*/
// a. Define a variable named `propertyName` and assign a string (like 
//    'username', 'age', or 'email') to it.
// 
// b. Create an object named `userProfile`. 
// 
// c. Use `propertyName` as a dynamic key in `userProfile`. Assign it a 
//    relevant value.
//
// d. Console log the `userProfile` object to see the result.

const propertyName = 'username';

const userProfile = {
    [propertyName]: 'Sylvia Remington',
};

console.log(userProfile);
// Prints out in terminal: { username: 'Sylvia Remington' }

// ______________________________________________________________

// Exercise 7: Import and Export
/* This exercise was completed by initializing node project in terminal,
adding a new line to json package, creating two new exporting and importing files,
adding exporting and importing code to appropriate files, adding addtl values
to the exporting and importing js files, and then testing it out via console.log.
*/

// ______________________________________________________________

// Exercise 8: Default parameters
// a. Create a function with two parameters, `noun` and `adjective`.
// 
// b. Give `noun` a default value of "cat" and `adjective` a default value of 
//    "orange".
//
// c. The function should log a sentence 'The cat is orange.' by default, but 
//    should substitute the appropriate parameters when it is supplied with 
//    arguments.

function twoParameters(noun = 'cat', adjective = 'orange') {
    console.log(`The ${noun} is ${adjective}.`);
};
twoParameters(); //uses the default I initially have
twoParameters('dog', 'brown'); // creates new info with new parameter info as strings

// ______________________________________________________________

// Exercise 9: The Ternary Operator
// a. Convert the following `if...else` statement into a ternary:
//
//    if (pizza === 'tasty') {
//      console.log('yum');
//    } else {
//      console.log('yuck');
//    }

const pizza = 'tasty';

let tastiness = pizza === 'tasty' ? 'yum' : 'yuck';
console.log(tastiness);

// What I did above is classic ternary using the format that the assignment showed.
// It's readable and stores result in a variable for reuse.

// Addtl versions could use as well:
// Direct Console Log with no variable version:
// console.log(pizza === 'tasty' ? 'yum' : 'yuck');

// Ternary Operator with separate logs:
// pizza === 'tasty' ? console.log('yum') : console.log('yuck');

// Or the following addtl versions that I looked up online for other ways to write this code for better reuse and possibly for use with other conditions:
/*
Using A Function Version:
const pizza = 'tasty';
const tasteOfPizza = (p) => console.log(p === 'tasty' ? 'yum' : 'yuck');
judgePizza(pizza); 

Another Function Version:
const pizza = 'tasty';
const findOutTastiness = (p) => p === 'tasty' ? 'yum' : 'yuck';
console.log(findOutTastiness(pizza));

Object Lookup which is an alternative to ternary (research this one more):
const pizza = 'tasty';
const reactions = { tasty: 'yum', default: 'yuck' };
console.log(reactions[pizza] || reactions.default);
(according to online sources, this one above is supposed to me scaleable for many conditions.)
*/

/*
More info on the ternary operator:

The ternary operator gives us a way to handle conditional logic in a single line of code. Ternaries can be viewed as a more concise version of an if...else statement. It can also simplify assigning a value to a variable based on a condition.

A ternary consists of three parts:

Condition: A boolean expression evaluated for truthiness, placed before the ?.
True Expression: The value assigned to the variable if the condition is true, located immediately after the ?.
False Expression: The value assigned to the variable if the condition is false, following the :.
*/

// ______________________________________________________________

// Boolean Gates - Review Stuff - I just realized that this wasn't part of the exercise after I went through guessing.
// Guess what the values of the variables will be...

// const result1 = 'bar' && 'foo';
// will print 'foo' since both are true

// const result2 = false || 243;
// will print 243 since 243 is the first truthy value (and the false is falsy)

// const result3 = 42 && false;
// this will print false since false is the first falsy value encountered

// const result4 = myVar || 3000;
// Since myVar isn't defined, it will be falsy and the first truthy printed will be 3000

// console.log('result1:', result1);
// console.log('result2:', result2);
// console.log('result3:', result3);
// console.log('result4:', result4);

// ______________________________________________________________

