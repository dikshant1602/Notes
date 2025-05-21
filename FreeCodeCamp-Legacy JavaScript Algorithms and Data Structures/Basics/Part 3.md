# JavaScript Basics 3

# Table of Contents

1. [Store Multiple Values in One Variable Using JavaScript Arrays](#1-store-multiple-values-in-one-variable-using-javascript-arrays)  
2. [Nest One Array Within Another Array](#2-nest-one-array-within-another-array)  
3. [Access Array Data With Indexes](#3-access-array-data-with-indexes)  
4. [Modify Array Data With Indexes](#4-modify-array-data-with-indexes)  
5. [Access Multi-Dimensional Arrays With Indexes](#5-access-multi-dimensional-arrays-with-indexes)  
6. [Manipulate Arrays With `push()` Method](#6-manipulate-arrays-with-push-method)  
7. [Manipulate Arrays With `pop()` Method](#7-manipulate-arrays-with-pop-method)  
8. [Manipulate Arrays With `shift()` Method](#8-manipulate-arrays-with-shift-method)  
9. [Manipulate Arrays With `unshift()` Method](#9-manipulate-arrays-with-unshift-method)  
10. [Write Reusable JavaScript with Functions](#10-write-reusable-javascript-with-functions)  
11. [Passing Values to Functions with Arguments](#11-passing-values-to-functions-with-arguments)  
12. [Return a Value from a Function with Return](#12-return-a-value-from-a-function-with-return)  
13. [Global Scope and Functions](#13-global-scope-and-functions)  
14. [Local Scope and Functions](#14-local-scope-and-functions)  
15. [Global vs. Local Scope in Functions](#15-global-vs-local-scope-in-functions)  
16. [Understanding Undefined Value Returned from a Function](#16-understanding-undefined-value-returned-from-a-function)  
17. [Assignment with a Returned Value](#17-assignment-with-a-returned-value)  
18. [Stand in Line (Queue Simulation)](#18-stand-in-line-queue-simulation)  
19. [Understanding Boolean Values](#19-understanding-boolean-values)  
20. [Use Conditional Logic with If Statements](#20-use-conditional-logic-with-if-statements)  

---

## 1. Store Multiple Values in One Variable Using JavaScript Arrays

### Purpose:  
Arrays allow you to store multiple values in a single variable. Each value in an array is called an **element**.

### Syntax:  
```javascript
let arrayName = [value1, value2, value3];
```

### Example:  
```javascript
let fruits = ["apple", "banana", "orange"];
```

---

## 2. Nest One Array Within Another Array

### Purpose:  
You can store arrays inside arrays (also known as nested arrays or multi-dimensional arrays).

### Syntax:  
```javascript
let nestedArray = [[1, 2], [3, 4]];
```

### Example:  
```javascript
let teams = [["Lakers", 100], ["Warriors", 95]];
```

---

## 3. Access Array Data With Indexes

### Purpose:  
Use index numbers (starting at 0) to access specific elements in an array.

### Syntax:  
```javascript
arrayName[index];
```

### Example:  
```javascript
let colors = ["red", "green", "blue"];
console.log(colors[1]);  // Output: green
```

---

## 4. Modify Array Data With Indexes

### Purpose:  
Change the value of a specific element by accessing its index.

### Syntax:  
```javascript
arrayName[index] = newValue;
```

### Example:  
```javascript
let scores = [10, 20, 30];
scores[1] = 25;
console.log(scores);  // Output: [10, 25, 30]
```

---

## 5. Access Multi-Dimensional Arrays With Indexes

### Purpose:  
Access elements in nested arrays using multiple indexes.

### Syntax:  
```javascript
arrayName[firstIndex][secondIndex];
```

### Example:  
```javascript
let matrix = [[1, 2], [3, 4]];
console.log(matrix[1][0]);  // Output: 3
```

---

## 6. Manipulate Arrays With `push()` Method

### Purpose:  
Adds an item to the end of an array.

### Syntax:  
```javascript
arrayName.push(newItem);
```

### Example:  
```javascript
let numbers = [1, 2, 3];
numbers.push(4);  // [1, 2, 3, 4]
```

---

## 7. Manipulate Arrays With `pop()` Method

### Purpose:  
Removes the last item from an array and returns it.

### Syntax:  
```javascript
let removedItem = arrayName.pop();
```

### Example:  
```javascript
let items = ["pen", "pencil", "eraser"];
let lastItem = items.pop();  // eraser
console.log(items);  // ["pen", "pencil"]
```

---

## 8. Manipulate Arrays With `shift()` Method

### Purpose:  
Removes the first element of an array and returns it.

### Syntax:  
```javascript
let firstItem = arrayName.shift();
```

### Example:  
```javascript
let cities = ["New York", "Paris", "London"];
let removed = cities.shift();  // "New York"
console.log(cities);  // ["Paris", "London"]
```

---

## 9. Manipulate Arrays With `unshift()` Method

### Purpose:  
Adds one or more items to the beginning of an array.

### Syntax:  
```javascript
arrayName.unshift(item1, item2);
```

### Example:  
```javascript
let numbers = [2, 3, 4];
numbers.unshift(0, 1);  // [0, 1, 2, 3, 4]
```

---

## 10. Write Reusable JavaScript with Functions

### Purpose:  
Functions help you reuse code instead of rewriting it.

### Syntax:  
```javascript
function functionName() {
  // code to run
}
```

### Example:  
```javascript
function sayHello() {
  console.log("Hello!");
}
sayHello();  // Output: Hello!
```

---

## 11. Passing Values to Functions with Arguments

### Purpose:  
Pass data into a function for it to use.

### Syntax:  
```javascript
function greet(name) {
  console.log("Hello " + name);
}
```

### Example:  
```javascript
greet("Sam");  // Output: Hello Sam
```

---

## 12. Return a Value from a Function with Return

### Purpose:  
Functions can return data back to the caller.

### Syntax:  
```javascript
function add(a, b) {
  return a + b;
}
```

### Example:  
```javascript
let result = add(3, 5);  // result = 8
```

---

## 13. Global Scope and Functions

### Explanation:  
Variables declared outside any function have global scope and can be accessed anywhere in the code.

### Example:  
```javascript
let color = "blue";

function printColor() {
  console.log(color);
}
printColor();  // Output: blue
```

---

## 14. Local Scope and Functions

### Explanation:  
Variables declared inside a function have local scope and are only accessible within that function.

### Example:  
```javascript
function showNumber() {
  let number = 5;
  console.log(number);
}
showNumber();  // Output: 5
// console.log(number); ❌ Error: number is not defined
```

---

## 15. Global vs. Local Scope in Functions

### Explanation:  
Local variables override global ones if they have the same name.

### Example:  
```javascript
let language = "English";

function setLanguage() {
  let language = "Spanish";
  console.log(language);  // Spanish (local)
}
setLanguage();
console.log(language);  // English (global)
```

---

## 16. Understanding Undefined Value Returned from a Function

### Explanation:  
If a function doesn’t use `return`, it returns `undefined`.

### Example:  
```javascript
function noReturn() {
  let x = 2 + 2;
}
let result = noReturn();
console.log(result);  // Output: undefined
```

---

## 17. Assignment with a Returned Value

### Explanation:  
You can assign the return value of a function to a variable.

### Example:  
```javascript
function double(num) {
  return num * 2;
}
let result = double(4);  // result = 8
```

---

## 18. Stand in Line (Queue Simulation)

### Purpose:  
Simulate a queue (FIFO: First In, First Out) using array methods.

### Example:  
```javascript
function nextInLine(arr, item) {
  arr.push(item);       // Add to end
  return arr.shift();   // Remove from front
}

let queue = [1, 2, 3];
console.log(nextInLine(queue, 4));  // Output: 1
console.log(queue);  // [2, 3, 4]
```

---

## 19. Understanding Boolean Values

### Explanation:  
Booleans are either `true` or `false`, used in conditions, comparisons, and logic.

### Example:  
```javascript
let isOnline = true;
let isSleeping = false;
```

---

## 20. Use Conditional Logic with If Statements

### Purpose:  
Run code only if a condition is true.

### Syntax:  
```javascript
if (condition) {
  // code to run if condition is true
}
```

### Example:  
```javascript
let score = 85;
if (score > 80) {
  console.log("Great job!");
}  // Output: Great job!
```

--- 