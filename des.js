let x = 10;
//simple function
function Test(){
 console.log(x);
 var x = 20;
 console.log(x);
}
Test();
console.log(x);

//Arrow function
const print =() => {
    console.log(x);
    var x = 30;
    console.log(x);
}
//template literals
const name = "Alice";
const age = 30;
console.log(`My name is "${name}" and I am "${age}" years old.`);
///rest operator
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));    
//closure ,callback hell,promise,async await
//for each, for off for in,rest operator,spread operator,destructuring,template literals,arrow function,hoisting
const fruits = ['apple', 'banana', 'orange'];

fruits.forEach((fruit, index) => {
  console.log(`${index}:${fruit}`);
});
// Output: 
// 0: apple
// 1: banana
// 2: orange
const numbers = [10, 20, 30];

for (const num of numbers) {
  if (num === 30) break;
  console.log(num);
}
// Output: 10, 20
const user = { name: 'Alice', age: 25, role: 'Admin' };

for (const key in user) {
  console.log(`${key}:${user[key]}`);
}
// Output:
// name: Alice
// age: 25
// role: Admin
// Copying and merging arrays
const original = [1, 2];
const combined = [...original, 3, 4]; // [1, 2, 3, 4]

// Copying and merging objects
const baseConfig = { theme: 'dark', numbers: [1] };
const userConfig = { ...baseConfig, layout: 'compact' }; 
// { theme: 'dark', numbers: [1], layout: 'compact' }
function createCounter() {
  let count = 0; // Private variable hidden from the outside world

  return function() {
    count++; // Has access to 'count' because of closure
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
// console.log(count); // ReferenceError: count is not defined