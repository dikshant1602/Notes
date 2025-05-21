Here's your content formatted in **Markdown**, complete with a **Table of Contents** for easy navigation:

````markdown
# JavaScript Debugging Tips

## Table of Contents

1. [Use `console.log()` for Debugging](#1-use-consolelog-for-debugging)
2. [Use `typeof` to Check the Type of a Variable](#2-use-typeof-to-check-the-type-of-a-variable)
3. [Catch Misspelled Variable and Function Names](#3-catch-misspelled-variable-and-function-names)
4. [Catch Mixed Usage of Single and Double Quotes](#4-catch-mixed-usage-of-single-and-double-quotes)
5. [Catch Use of Assignment Operator Instead of Equality Operator](#5-catch-use-of-assignment-operator-instead-of-equality-operator)
6. [Catch Missing Parentheses After Function Call](#6-catch-missing-parentheses-after-function-call)
7. [Catch Off-By-One Errors in Indexing](#7-catch-off-by-one-errors-in-indexing)
8. [Catch Infinite Loops](#8-catch-infinite-loops)

---

## 1. Use `console.log()` for Debugging

The `console.log()` method prints the output of what's within its parentheses to the console. It's a powerful debugging tool to track intermediate values.

**Example:**

```javascript
console.log('Hello world!');
````

Other useful `console` methods:

* `console.warn()`
* `console.clear()`

---

## 2. Use `typeof` to Check the Type of a Variable

Use `typeof` to examine the data type of a variable — very helpful when debugging type-related errors.

**Examples:**

```javascript
console.log(typeof "");    // string
console.log(typeof 0);     // number
console.log(typeof []);    // object
console.log(typeof {});    // object
```

JavaScript has 7 primitive types:

* Boolean
* Null
* Undefined
* Number
* String
* Symbol (ES6)
* BigInt (ES2020)

And one complex type:

* Object (including arrays)

---

## 3. Catch Misspelled Variable and Function Names

JavaScript is case-sensitive. Typos in variable or function names cause **reference errors**.

```javascript
let name = "Alice";
console.log(Name); // ReferenceError
```

---

## 4. Catch Mixed Usage of Single and Double Quotes

JavaScript strings can use `'` or `"`, but be consistent. Mixing them improperly causes syntax errors.

**Correct:**

```javascript
const quote1 = "I've had a wonderful evening.";
const quote2 = "He said 'Hello!'";
```

**Incorrect:**

```javascript
const quote3 = 'I've had a wonderful evening.'; // SyntaxError
```

**Fix using escape character:**

```javascript
const quote4 = 'I\'ve had a wonderful evening.';
```

---

## 5. Catch Use of Assignment Operator Instead of Equality Operator

Assignment (`=`) sets values. Equality (`==`, `===`) compares them. Mixing these causes logical bugs.

**Example:**

```javascript
let x = 1;
let y = 2;

if (x = y) { // WRONG: assigns y to x
  // runs because assignment returns truthy value
} else {
  // never runs
}
```

Use:

```javascript
if (x === y) { // Correct comparison
}
```

---

## 6. Catch Missing Parentheses After Function Call

Forgetting to call a function with `()` can return a reference instead of its value.

**Example:**

```javascript
function myFunction() {
  return "You rock!";
}

let varOne = myFunction;   // function reference
let varTwo = myFunction(); // "You rock!"
```

---

## 7. Catch Off-By-One Errors in Indexing

JavaScript arrays are 0-indexed. The last valid index is `length - 1`.

**Common mistakes:**

```javascript
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;

for (let i = 0; i <= len; i++) { // Too many iterations
  console.log(alphabet[i]);
}

for (let j = 1; j < len; j++) {  // Misses index 0
  console.log(alphabet[j]);
}

for (let k = 0; k < len; k++) {  // Correct
  console.log(alphabet[k]);
}
```

---

## 8. Catch Infinite Loops

Infinite loops happen when the loop condition never becomes false.

**Bad:**

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  // i is never incremented
}
```

**Fix:**

```javascript
let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
```

**Tips:**

* Always update your loop variable.
* Ensure the loop condition can become false.
* Use `console.log()` to trace loop progress.
* Add a fallback condition:

```javascript
let i = 0;
let maxIterations = 1000;

while (someCondition) {
  i++;
  if (i >= maxIterations) {
    console.log("Stopped to prevent infinite loop");
    break;
  }
}
```

---
