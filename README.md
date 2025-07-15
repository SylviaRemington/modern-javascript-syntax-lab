# Modern JavaScript Syntax Lab

## Introduction
- Over the last decade, JavaScript has seen significant changes in its syntax to make it more user-friendly, responding to developers’ needs. These updates have become standard in popular frameworks like React, Vue, and Angular.

- These changes primarily enhance coding efficiency rather than add new functionality to the language.

## Learning goals
- This lab is your opportunity to dive into modern JavaScript syntax. Understanding this contemporary style is beneficial, but a solid grasp of traditional JavaScript is essential. It lays a strong foundation not only for JavaScript but also for learning other programming languages. Remember, not all languages offer such syntax shortcuts.

- As a developer, you will encounter languages with unique characteristics, but many, including JavaScript, share foundational concepts. Mastering modern JavaScript syntax without relying on it as a crutch is crucial. This approach ensures you’re well-prepared to adapt to different programming languages without starting from scratch.

## Lab structure
Each Review section will briefly explain of a modern JavaScript concept, followed by an exercise to complete.

<hr>

## The map() iterator method of arrays
- An array’s map() method returns a new array with the results of calling a function on every element in an existing array.

- Put another way, map() creates a new array where each element in the original array has been transformed by the action specified in the map() method’s callback function without altering the original array.

- map() returns a new array with altered values. It does not change the original array.


## Array destructuring
- Array destructuring in JavaScript is a way of unpacking the elements of an array. With array destructuring, we can extract elements from an array and store them in variables with a single line of code.

- When we destructure an array, the elements are matched positionally with the variables we define, meaning the order in which we declare variables corresponds with the order of elements in the array.


## Object destructuring
- Destructuring can also be applied to objects. With object destructuring, we can extract properties from an object. Instead of accessing properties through dot or bracket notation, the values of specific properties in an object can be assigned to variables.

- Unlike array destructuring, where elements are matched based on their position, the variables created in object destructuring, such as const { name, role }, must match the names of existing properties in the object.


## Applying the spread operator on arrays
- The spread operator (...) allows us to duplicate or combine arrays. Instead of manually copying elements from one array to another using loops, the spread operator allows us to copy the elements of one array into another directly.


## Applying the spread operator on objects
- The spread operator can also be used to copy objects.


## Dynamic keys in objects
- Variables and expressions can be used as dynamic keys in an object by using bracket notation. Dynamic keys can be used to create, access, and modify properties in an object. Dynamic keys enhance our ability to access data.

- This approach is handy in scenarios where key names are not known ahead of time or when they need to be computed on the fly. It also allows for more concise and readable code, avoiding the need for additional steps when assigning properties to objects.

## Import and Export
- The import and export syntax allows us to share code between different files in JavaScript. This is a more modern and native approach compared to the require and module.exports syntax used in CommonJS.

- With export, you can make functions, objects, or primitives available for use in other files.

### There are two main types of exports:

### Named exports: For exporting multiple items from a file:

- export const myNumber = 123;
- export const myString = 'Hello';

### Default exports: For exporting a single item from a file:

- export default function superCoolFunction() {
-  /* ... */
- }
- It’s possible to mix default and named exports in a single module, but it’s a best practice to stick to one style for consistency and clarity. 
- Named exports are often preferred over default exports.


## Default Parameters
- Default parameters are just that - default values for parameters. These defaults are applied when no value is passed for those parameters during a function call.


## The Ternary Operator
- The ternary operator gives us a way to handle conditional logic in a single line of code. Ternaries can be viewed as a more concise version of an if...else statement. It can also simplify assigning a value to a variable based on a condition.

### A ternary consists of three parts:

- Condition: A boolean expression evaluated for truthiness, placed before the ?.
- True Expression: The value assigned to the variable if the condition is true, located immediately after the ?.
- False Expression: The value assigned to the variable if the condition is false, following the :.


## Boolean Gates / Logical Operators of && and ||
- Logical operators such as && (AND) and || (OR) play an interesting role when used outside of if...else statements. In this context, they can be used to evaluate and return values directly based on the truthiness or falsyness of the values involved.

### The && operator

- The && operator evaluates expressions from left to right and returns the first falsy value it encounters. If all values are truthy, it returns the last value.

- Remember, in JavaScript, falsy values include '' (empty strings), 0, null, undefined, NaN, and false. Everything else is considered truthy.

### The || operator

- The || operator evaluates expressions from left to right and returns the first truthy value it encounters. If all values are falsy, it returns the last value.

### Addtl boolean gates info:
- In modern JavaScript, a common pattern is to assign a default value to variables if no specific value is provided. This technique is instrumental in settings where configurations might be optional. For example, users might not set their language or theme preferences on a website, and you’d want to fall back to some default settings.


## Optional Chaining
- Optional chaining is a way to access deeply nested properties in an object safely. This approach helps us avoid errors when we attempt to access undefined or null properties.