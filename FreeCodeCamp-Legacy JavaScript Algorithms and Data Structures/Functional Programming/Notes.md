# Functional Programming

---

## Table of Contents

1. [Learn About Functional Programming](#learn-about-functional-programming)
2. [Understand Functional Programming Terminology](#understand-functional-programming-terminology)
3. [Understand the Hazards of Using Imperative Code](#understand-the-hazards-of-using-imperative-code)
4. [Avoid Mutations and Side Effects Using Functional Programming](#avoid-mutations-and-side-effects-using-functional-programming)
5. [Pass Arguments to Avoid External Dependence in a Function](#pass-arguments-to-avoid-external-dependence-in-a-function)
6. [Refactor Global Variables Out of Functions](#refactor-global-variables-out-of-functions)
7. [Use the `map` Method to Extract Data from an Array](#use-the-map-method-to-extract-data-from-an-array)
8. [Implement `map` on a Prototype](#implement-map-on-a-prototype)
9. [Use the `filter` Method to Extract Data from an Array](#use-the-filter-method-to-extract-data-from-an-array)
10. [Implement the `filter` Method on a Prototype](#implement-the-filter-method-on-a-prototype)
11. [Return Part of an Array Using the `slice` Method](#return-part-of-an-array-using-the-slice-method)
12. [Remove Elements from an Array Using `slice` Instead of `splice`](#remove-elements-from-an-array-using-slice-instead-of-splice)
13. [Combine Two Arrays Using the `concat` Method](#combine-two-arrays-using-the-concat-method)
14. [Add Elements to the End of an Array Using `concat` Instead of `push`](#add-elements-to-the-end-of-an-array-using-concat-instead-of-push)
15. [Use the `reduce` Method to Analyze Data](#use-the-reduce-method-to-analyze-data)
16. [Use Higher-Order Functions `map`, `filter`, or `reduce` to Solve a Complex Problem](#use-higher-order-functions-map-filter-or-reduce-to-solve-a-complex-problem)
17. [Sort an Array Alphabetically Using the `sort` Method](#sort-an-array-alphabetically-using-the-sort-method)
18. [Return a Sorted Array Without Changing the Original Array](#return-a-sorted-array-without-changing-the-original-array)
19. [Split a String into an Array Using the `split` Method](#split-a-string-into-an-array-using-the-split-method)
20. [Combine an Array into a String Using the `join` Method](#combine-an-array-into-a-string-using-the-join-method)
21. [Apply Functional Programming to Convert Strings to URL Slugs](#apply-functional-programming-to-convert-strings-to-url-slugs)
22. [Use the `every` Method to Check that Every Element in an Array Meets a Criteria](#use-the-every-method-to-check-that-every-element-in-an-array-meets-a-criteria)
23. [Use the `some` Method to Check that Any Elements in an Array Meet a Criteria](#use-the-some-method-to-check-that-any-elements-in-an-array-meet-a-criteria)
24. [Introduction to Currying and Partial Application](#introduction-to-currying-and-partial-application)

---

## 1. Learn About Functional Programming
Functional programming is a style of programming where solutions are simple, isolated functions, without any side effects outside of the function scope: `INPUT -> PROCESS -> OUTPUT`.

Functional programming is about:
- **Isolated functions** - No dependence on the state of the program (e.g., global variables).
- **Pure functions** - The same input always gives the same output.
- **Limited side effects** - Mutations to the program's state are carefully controlled.

**Example:**
```javascript
// Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];
  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line
```

---

## 2. Understand Functional Programming Terminology
The FCC Team now wants two types of tea: **green tea** and **black tea**. We'll modify `getTea` to accept a function as a parameter for flexibility.

### Key Terminology:
- **Callbacks**: Functions passed into another function to decide its invocation (e.g., `filter`'s callback).
- **First-class functions**: Functions that can be assigned to variables, passed as arguments, or returned like any other value.
- **Higher-order functions**: Functions that take/return other functions.
- **Lambda**: Functions passed into or returned from another function.

---

## 3. Understand the Hazards of Using Imperative Code
Functional programming avoids bugs by being **declarative** (telling *what* to do) rather than **imperative** (telling *how* to do it).

**Example:**  
Instead of a `for` loop (imperative), use `map` (declarative) to avoid "Off By One" errors.

**Scenario:**  
Tracking browser tabs with OOP:
- A `Window` object has an array of open tabs.
- Functions like `tabOpen()`, `tabClose()`, and `join()` modify the array.
- Imperative code risks unintended mutations.

---

## 4. Avoid Mutations and Side Effects Using Functional Programming
**Problem:**  
In the previous challenge, `splice` mutated the original array, causing bugs.

**Principle:**  
- Avoid mutations (changes to data) and side effects.
- Use **pure functions** (no side effects).

**Example:**
```javascript
// The global variable
let fixedValue = 4;

function incrementer() {
  return fixedValue + 1; // Pure function (but depends on global state).
}
```

---

## 5. Pass Arguments to Avoid External Dependence
**Improvement:**  
Explicitly pass dependencies as arguments.

**Why?**  
- Easier testing.
- Clearer inputs/outputs.
- Predictable behavior.

**Example:**
```javascript
function incrementer(fixedValue) {
  return fixedValue + 1; // No global dependency.
}
```

---

## 6. Refactor Global Variables Out of Functions
**Two Key Principles:**
1. **No alterations** - Return new objects/arrays instead of modifying existing ones.
   - `const newArr = [...arr]` (creates a copy, not a reference).
2. **Declare dependencies** - Depend only on function arguments, not globals.

**Example:**
```javascript
// Global variable
var bookList = ["The Hound of the Baskervilles", "..."];

// Adds a book (returns new array)
function add(arr, bookName) {
  let newArr = [...arr];
  newArr.push(bookName);
  return newArr;
}

// Removes a book (returns new array)
function remove(arr, bookName) {
  let newArr = [...arr];
  if (newArr.indexOf(bookName) >= 0) {
    newArr.splice(newArr.indexOf(bookName), 1);
  }
  return newArr;
}

// Usage
var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics...');
console.log(bookList); // Original remains unchanged.
```

----

## 7. Use the `map` Method to Extract Data from an Array
Functional programming emphasizes pure functions and avoiding side effects. A core principle is treating functions as **first-class objects**—they can be passed as arguments, returned from other functions, or stored in variables/objects.

### Key Concept: `Array.prototype.map()`
- Iterates over each array item and returns a **new array** (original remains unchanged).
- Takes a **callback function** as an argument, which receives three parameters:
  1. Current element being processed.
  2. Index of the element *(optional)*.
  3. Original array *(optional)*.

### Example: Extract User Names
```javascript
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

// Use map to extract names (using only the first callback argument)
const names = users.map(user => user.name);
console.log(names); // Output: ['John', 'Amy', 'camperCat']
```

### Why Use `map`?
- **No mutation**: Original array (`users`) is unmodified.
- **Declarative**: Focus on *what* (extract names) rather than *how* (loop mechanics).
- **Flexible**: Callback can leverage all three arguments if needed (e.g., `(user, idx, arr) => ...`).

### Comparison: Imperative vs. Functional
```javascript
// Imperative (for loop)
let names = [];
for (let i = 0; i < users.length; i++) {
  names.push(users[i].name);
}

// Functional (map)
const names = users.map(user => user.name); // Cleaner and safer
```

---

## 8. Implement `map` on a Prototype
The `map` method returns a new array of the same length without modifying the original array (assuming the callback is pure). To understand it deeply, let’s implement our own version.

### Custom `myMap` Implementation:
```javascript
Array.prototype.myMap = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    newArray.push(callback(this[i], i, this)); // Current item, index, original array
  }
  return newArray;
};
```

### Key Points:
- **Pure function**: Does not alter the original array (`this`).
- **Callback arguments**: Processes `(element, index, array)`.
- **Use case**: Replicating `map`’s behavior with a `for` loop or `forEach`.

### Example Usage:
```javascript
const numbers = [1, 2, 3];
const squared = numbers.myMap(num => num * num);
console.log(squared); // Output: [1, 4, 9]
```

---

## 9. Use the `filter` Method to Extract Data from an Array
`filter` creates a new array with elements that pass a test (callback returns `true`). Like `map`, it’s **non-mutating**.

### How `filter` Works:
1. **Callback arguments**: 
   - Current element (required).
   - Index (optional).
   - Original array (optional).
2. **Returns**: New array with elements where the callback returns a [truthy](https://developer.mozilla.org/en-US/docs/Glossary/Truthy) value.

### Example: Filter Users Under 30
```javascript
const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersUnder30 = users.filter(user => user.age < 30);
console.log(usersUnder30); 
// Output: [{ name: 'Amy', age: 20 }, { name: 'camperCat', age: 10 }]
```

### Comparison: `filter` vs Imperative Approach
```javascript
// Imperative (for loop)
let under30 = [];
for (let i = 0; i < users.length; i++) {
  if (users[i].age < 30) under30.push(users[i]);
}

// Functional (filter)
const under30 = users.filter(user => user.age < 30); // Cleaner and declarative
```

### Key Differences from `map`:
- **Purpose**: `map` transforms all elements; `filter` selects a subset.
- **Returned Array**: `filter`’s output may be shorter than the original.

---

## 10. Implement the `filter` Method on a Prototype
To understand how `filter` works internally, let's create our own version (`myFilter`).

### Custom Implementation:
```javascript
Array.prototype.myFilter = function(callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    if (Boolean(callback(this[i], i, this))) { // Check if callback returns truthy
      newArray.push(this[i]);
    }
  }
  return newArray;
};
```

### Example Usage:
```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.myFilter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]
```

### Key Points:
- **Non-mutating**: Original array remains unchanged.
- **Callback args**: `(element, index, array)`.
- **Truthy check**: Uses `Boolean()` to validate the callback's return value.

---

## 11. Return Part of an Array Using the `slice` Method
`slice` extracts a portion of an array without modifying the original.

### Syntax:
```javascript
array.slice(startIndex, endIndex); // endIndex is non-inclusive
```

### Example:
```javascript
const arr = ["Cat", "Dog", "Tiger", "Zebra"];
const subset = arr.slice(1, 3); // ["Dog", "Tiger"]
```

### Default Behavior:
- **No arguments**: Copies the entire array (`arr.slice()`).
- **One argument**: Slices from `startIndex` to end.

---

## 12. Remove Elements Using `slice` Instead of `splice`
Unlike `splice` (which mutates), `slice` is a non-mutating alternative.

### Problem with `splice`:
```javascript
const cities = ["Chicago", "Delhi", "Islamabad", "London"];
cities.splice(3, 1); // Mutates: removes "London"
```

### Solution with `slice`:
```javascript
function nonMutatingSplice(cities) {
  return cities.slice(0, 3); // Returns first 3 elements
}
```

### Output:
```javascript
["Chicago", "Delhi", "Islamabad"]; // Original array remains intact
```

---

## 13. Combine Two Arrays Using `concat`
`concat` merges arrays into a new array without mutation.

### Example:
```javascript
function nonMutatingConcat(original, attach) {
  return original.concat(attach);
}

const first = [1, 2, 3];
const second = [4, 5];
console.log(nonMutatingConcat(first, second)); // [1, 2, 3, 4, 5]
```

### Key Benefit:
- **Immutable**: Neither `first` nor `second` is modified.

---

## 14. Add Elements with `concat` Instead of `push`
`push` mutates; `concat` does not.

### Mutating Example (Avoid):
```javascript
const arr = [1, 2, 3];
arr.push(4); // Modifies original array
```

### Functional Alternative:
```javascript
const arr = [1, 2, 3];
const newArr = arr.concat(4); // New array: [1, 2, 3, 4]
```

---

## 15. Use `reduce` to Analyze Data
`reduce` processes an array into a single value.

### Basic Usage:
```javascript
const sumOfAges = users.reduce((sum, user) => sum + user.age, 0);
// Output: 64 (sum of ages)
```

### Advanced Example (Object Transformation):
```javascript
const usersObj = users.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});

// Output: { John: 34, Amy: 20, camperCat: 10 }
```

### How `reduce` Works:
1. **Callback args**: `(accumulator, currentValue, index, array)`.
2. **Initial value**: Second argument to `reduce` (e.g., `0` or `{}`).
3. **Iteration**: Accumulator updates each iteration.

### Derived Behaviors:
- **Map**: `reduce` can replicate `map` by returning an array.
- **Filter**: `reduce` can exclude items conditionally.

---

## 16. Use Higher-Order Functions to Solve Complex Problems
Combine `map`, `filter`, and `reduce` to process arrays functionally.

### Example: Square Positive Integers Only
```javascript
const squareList = (arr) => {
  return arr
    .filter(num => num > 0 && num % parseInt(num) === 0) // Filters positive integers
    .map(num => Math.pow(num, 2)); // Squares them
};

console.log(squareList([-3, 4.8, 5, 3, -3.2])); // Output: [25, 9]
```

**Key Points:**
- `filter`: Removes non-integers and negatives.
- `map`: Transforms each element.

---

## 17. Sort an Array Alphabetically with `sort`
The `sort` method mutates the original array. Always provide a compare function.

### Numeric Sort (Ascending)
```javascript
function ascendingOrder(arr) {
  return arr.sort((a, b) => a - b);
}
console.log(ascendingOrder([1, 5, 2, 3, 4])); // [1, 2, 3, 4, 5]
```

### String Sort (Reverse)
```javascript
function reverseAlpha(arr) {
  return arr.sort((a, b) => a === b ? 0 : a < b ? 1 : -1);
}
console.log(reverseAlpha(['l', 'h', 'z', 'b', 's'])); // ['z', 's', 'l', 'h', 'b']
```

**Compare Function Rules:**
- Returns `< 0`: `a` comes first.
- Returns `> 0`: `b` comes first.
- Returns `0`: Order unchanged.

---

## 18. Return a Sorted Array Without Mutating
Avoid mutations by concatenating an empty array before sorting.

### Non-Mutating Sort
```javascript
const globalArray = [5, 6, 3, 2, 9];
function nonMutatingSort(arr) {
  return [].concat(arr).sort((a, b) => a - b); // Creates a new array
}
console.log(nonMutatingSort(globalArray)); // [2, 3, 5, 6, 9]
console.log(globalArray); // Original remains [5, 6, 3, 2, 9]
```

**Alternative:** Use `slice()`:
```javascript
return arr.slice().sort((a, b) => a - b);
```

---

## 19. Split a String into an Array with `split`
Split strings using delimiters (characters or regex).

### Examples:
```javascript
const str = "Hello World";
console.log(str.split(" ")); // ["Hello", "World"]

const otherStr = "How9are7you2today";
console.log(otherStr.split(/\d/)); // ["How", "are", "you", "today"]
```

### Practical Use:
```javascript
function splitify(str) {
  return str.split(/\W/); // Splits on non-alphanumeric characters
}
console.log(splitify("Hello World,I-am code")); // ["Hello", "World", "I", "am", "code"]
```

---

## 20. Combine an Array into a String with `join`
Reverse of `split`—joins array elements into a string.

### Example:
```javascript
const arr = ["Hello", "World"];
console.log(arr.join(" ")); // "Hello World"
```

### Fixing Sentence:
```javascript
function sentensify(str) {
  return str.split(/\W/).join(" "); // Replaces non-words with spaces
}
console.log(sentensify("May-the-force-be-with-you")); // "May the force be with you"
```

---

## 21. Convert Strings to URL Slugs
Create URL-friendly slugs from titles.

### Solution:
```javascript
function urlSlug(title) {
  return title
    .toLowerCase()
    .trim() // Removes leading/trailing spaces
    .split(/\s+/) // Splits on one or more spaces
    .join("-");
}
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone")); 
// "a-mind-needs-books-like-a-sword-needs-a-whetstone"
```

---

## 22. Check All Elements with `every`
Tests if **all** elements pass a condition.

### Example:
```javascript
function checkPositive(arr) {
  return arr.every(value => value > 0);
}
console.log(checkPositive([1, 2, 3, -4, 5])); // false
```

---

## 23. Check Any Element with `some`
Tests if **at least one** element passes a condition.

### Example:
```javascript
function checkPositive(arr) {
  return arr.some(elem => elem > 0);
}
console.log(checkPositive([1, 2, 3, -4, 5])); // true
```

---

## 24. Currying and Partial Application
Transform multi-argument functions into nested single-argument functions.

### Curried Function:
```javascript
const add = x => y => z => x + y + z;
console.log(add(10)(20)(30)); // 60
```

### Partial Application:
```javascript
function impartial(x, y, z) {
  return x + y + z;
}
const partialFn = impartial.bind(null, 1, 2); // Pre-fills x=1, y=2
console.log(partialFn(10)); // 13 (1 + 2 + 10)
```

**Key Differences:**
- **Currying**: `f(a,b,c)` → `f(a)(b)(c)`.
- **Partial Application**: `f(a,b,c)` → `f(a,b)(c)`.

---

