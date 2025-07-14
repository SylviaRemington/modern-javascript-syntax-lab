// import name from './exportingFile.js';
// console.log(name);
// Prints: Matt when do this in terminal: node importingFile.js

import name, { computer, age, job } from './exportingFile.js';

console.log(name, computer, age, job);
// Prints: 'Matt', 'MacBook Pro', 43, 'programmer'
// node importingFile.js prints: Matt MacBook Pro 43 programmer

