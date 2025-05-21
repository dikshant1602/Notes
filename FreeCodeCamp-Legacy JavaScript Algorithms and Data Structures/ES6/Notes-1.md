# ES6

---

## Table of Contents

1. [Compare Scopes of the `var` and `let` Keywords](#1-compare-scopes-of-the-var-and-let-keywords)
2. [Mutate an Array Declared with `const`](#2-mutate-an-array-declared-with-const)
3. [Prevent Object Mutation](#3-prevent-object-mutation)
4. [Use Arrow Functions to Write Concise Anonymous Functions](#4-use-arrow-functions-to-write-concise-anonymous-functions)
5. [Write Arrow Functions with Parameters](#5-write-arrow-functions-with-parameters)
6. [Set Default Parameters for Your Functions](#6-set-default-parameters-for-your-functions)
7. [Use the Rest Parameter with Function Parameters](#7-use-the-rest-parameter-with-function-parameters)
8. [Use the Spread Operator to Evaluate Arrays In-Place](#8-use-the-spread-operator-to-evaluate-arrays-in-place)
9. [Use Destructuring Assignment to Extract Values from Objects](#9-use-destructuring-assignment-to-extract-values-from-objects)
10. [Use Destructuring Assignment to Assign Variables from Objects](#10-use-destructuring-assignment-to-assign-variables-from-objects)

---

## 1. Compare Scopes of the `var` and `let` Keywords

### Key Differences:
- `var`: Function-scoped or globally-scoped
- `let`: Block-scoped (`{}`)

### Example with `var`:
```javascript
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // [0, 1, 2]
console.log(i);        // 3 (leaks outside loop)
```

### Problem with `var` in Closures:
```javascript
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() { return i; };
  }
}
console.log(printNumTwo()); // 3 (not 2!)
```

### Solution with `let`:
```javascript
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() { return i; };
  }
}
console.log(printNumTwo()); // 2
console.log(i);             // ReferenceError
```

> **Note:** `let` creates a new `i` in each iteration, making it safe for closures.

---

## 2. Mutate an Array Declared with `const`

### Key Concept:
- `const` prevents reassignment, not mutation

### Valid Mutation:
```javascript
const s = [5, 6, 7];
s[2] = 45;       // ✅ Allowed
console.log(s);  // [5, 6, 45]
```

### Invalid Reassignment:
```javascript
const s = [5, 6, 7];
s = [1, 2, 3];   // ❌ TypeError
```

---

## 3. Prevent Object Mutation

### Using `Object.freeze()`:
```javascript
const obj = {
  name: "FreeCodeCamp",
  review: "Awesome"
};

Object.freeze(obj);

obj.review = "bad";    // ❌ Silent failure in non-strict mode
obj.newProp = "Test";  // ❌ Silent failure in non-strict mode

console.log(obj); // { name: "FreeCodeCamp", review: "Awesome" }
```

> **Note:** In strict mode, these attempts will throw errors.

---

## 4. Use Arrow Functions to Write Concise Anonymous Functions

### Traditional Function:
```javascript
const myFunc = function() {
  return "value";
};
```

### Arrow Function:
```javascript
const myFunc = () => "value";
```

---

## 5. Write Arrow Functions with Parameters

### Single Parameter:
```javascript
const doubler = item => item * 2;
doubler(4); // 8
```

### Multiple Parameters:
```javascript
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // 8
```

---

## 6. Set Default Parameters for Your Functions

### Example:
```javascript
const greeting = (name = "Anonymous") => `Hello ${name}`;
console.log(greeting("John")); // "Hello John"
console.log(greeting());       // "Hello Anonymous"
```

---

## 7. Use the Rest Parameter with Function Parameters

### Example:
```javascript
function howMany(...args) {
  return `You passed ${args.length} arguments`;
}
console.log(howMany(0, 1, 2)); // "You passed 3 arguments"
```

---

## 8. Use the Spread Operator to Evaluate Arrays In-Place

### ES5 vs ES6:
```javascript
// ES5
Math.max.apply(null, [6, 89, 3, 45]); // 89

// ES6
Math.max(...[6, 89, 3, 45]); // 89
```

---

## 9. Use Destructuring Assignment to Extract Values from Objects

### ES5 vs ES6:
```javascript
// ES5
const name = user.name;
const age = user.age;

// ES6
const { name, age } = user;
```

---

## 10. Use Destructuring Assignment to Assign Variables from Objects

### Renaming Variables:
```javascript
const { name: userName, age: userAge } = user;
console.log(userName); // "John Doe"
```

---

