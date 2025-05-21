# JavaScript Modules and Promises Guide

## Table of Contents
1. [Export a Code Block](#1-export-a-code-block)
2. [Handle a Rejected Promise with catch](#2-handle-a-rejected-promise-with-catch)
3. [Handle a Fulfilled Promise with then](#3-handle-a-fulfilled-promise-with-then)
4. [Complete a Promise with resolve and reject](#4-complete-a-promise-with-resolve-and-reject)
5. [Create a JavaScript Promise](#5-create-a-javascript-promise)
6. [Import a Default Export](#6-import-a-default-export)
7. [Create an Export Fallback with export default](#7-create-an-export-fallback-with-export-default)
8. [Use * to Import Everything from a File](#8-use--to-import-everything-from-a-file)
9. [Reuse JavaScript Code Using import](#9-reuse-javascript-code-using-import)

---

## 1. Export a Code Block

### Named Export (Single Function):
```javascript
export const add = (x, y) => {
  return x + y;
};
```

### Named Export (Multiple Functions):
```javascript
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

export { add, subtract };
```

[Back to Top](#javascript-modules-and-promises-guide)

---

## 2. Handle a Rejected Promise with catch

### Basic Syntax:
```javascript
myPromise.catch(error => {
  console.error('Promise rejected:', error);
});
```

### Example Usage:
```javascript
fetch('https://api.example.com/data')
  .catch(error => {
    console.error('Fetch failed:', error);
  });
```

---

## 3. Handle a Fulfilled Promise with then

### Basic Syntax:
```javascript
myPromise.then(result => {
  console.log('Promise fulfilled:', result);
});
```

### Chaining Example:
```javascript
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data));
```

---

## 4. Complete a Promise with resolve and reject

### Promise Completion:
```javascript
const myPromise = new Promise((resolve, reject) => {
  const condition = true; // Example condition
  
  if (condition) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});
```

---

## 5. Create a JavaScript Promise

### Basic Promise Structure:
```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation here
});
```

### Practical Example:
```javascript
const checkServerStatus = new Promise((resolve, reject) => {
  const serverIsUp = Math.random() > 0.5;
  
  if (serverIsUp) {
    resolve({ status: 200, message: "Server is running" });
  } else {
    reject({ status: 500, message: "Server is down" });
  }
});
```

---

## 6. Import a Default Export

### Import Syntax:
```javascript
import add from './math_functions.js';
```

### Usage Example:
```javascript
// Assuming add is the default export
console.log(add(2, 3)); // 5
```

---

## 7. Create an Export Fallback with export default

### Function Export:
```javascript
export default function add(x, y) {
  return x + y;
}
```

### Alternative Syntax:
```javascript
export default (x, y) => x + y;
```

> **Note:** Only one default export per module is allowed.

---

## 8. Use * to Import Everything from a File

### Namespace Import:
```javascript
import * as math from './math_functions.js';
```

### Usage Example:
```javascript
math.add(2, 3);
math.subtract(5, 2);
```

---

## 9. Reuse JavaScript Code Using import

### Single Import:
```javascript
import { add } from './math_functions.js';
```

### Multiple Imports:
```javascript
import { add, subtract } from './math_functions.js';
```

### Relative Paths:
```javascript
import { apiKey } from '../config/keys.js';
```

[Back to Top](#javascript-modules-and-promises-guide)
```
