# Variables in JavaScript

---

## Table of Contents

1. [What is a Variable?](#1-what-is-a-variable)
2. [Declaring Variables in JavaScript](#2-declaring-variables-in-javascript)

   * `let`
   * `const`
   * `var`
3. [Syntax Rules for Naming Variables](#3-syntax-rules-for-naming-variables)
4. [Naming Conventions](#4-naming-conventions)
5. [Variable Reassignment](#5-variable-reassignment)
6. [Arithmetic and Shorthand Operators](#6-arithmetic-and-shorthand-operators)
7. [Semicolons in JavaScript](#7-semicolons-in-javascript)
8. [Checking Types with `typeof`](#8-checking-types-with-typeof)

---

## 1. What is a Variable?

* A **variable** is a container used to store data.
* Variables allow you to **save values** and **reuse them** later in your code.

**Example:**

```js
let age = 25;  // age stores the value 25
```

---

## 2. Declaring Variables in JavaScript

JavaScript provides three main ways to declare variables:

### 1. `let`

* Used to declare variables that **can change** later.

```js
let score = 10;
```

### 2. `const`

* Used to declare **constants** (values that do not change).

```js
const pi = 3.14;
```

### 3. `var`

* Older way to declare variables.
* Avoid using in modern JavaScript due to **scope issues**.

```js
var name = 'John';
```

---

## 3. Syntax Rules for Naming Variables

* Must **start** with a letter, underscore `_`, or dollar sign `$`.
* Cannot start with a number.
* Can contain letters, digits, `_`, and `$`.
* **No spaces** or special characters.
* Cannot use **reserved keywords** (e.g., `let`, `if`, `for`).
* JavaScript is **case-sensitive** (`total` ≠ `Total`).

---

## 4. Naming Conventions

| Convention   | Example        | Usage Note                     |
| ------------ | -------------- | ------------------------------ |
| `camelCase`  | `totalAmount`  | ✅ Recommended in JavaScript    |
| `snake_case` | `total_amount` | ✅ Common in Python             |
| `kebab-case` | `total-amount` | ❌ Invalid for variable names   |
| `PascalCase` | `TotalAmount`  | ✅ Often used for classes in JS |

---

## 5. Variable Reassignment

Variables declared with `let` can be updated:

```js
let count = 5;
count = 10; // Valid
```

Variables declared with `const` **cannot** be reassigned:

```js
const max = 100;
max = 200; // ❌ Error!
```

---

## 6. Arithmetic and Shorthand Operators

| Operation           | Shorthand | Full Expression |
| ------------------- | --------- | --------------- |
| Add 1               | `x++`     | `x = x + 1`     |
| Subtract 1          | `x--`     | `x = x - 1`     |
| Add value           | `x += 2`  | `x = x + 2`     |
| Subtract value      | `x -= 2`  | `x = x - 2`     |
| Multiply            | `x *= 2`  | `x = x * 2`     |
| Divide              | `x /= 2`  | `x = x / 2`     |
| Modulus (remainder) | `x %= 2`  | `x = x % 2`     |

---

## 7. Semicolons in JavaScript

* Semicolons (`;`) **mark the end of a statement**.
* JavaScript supports **automatic semicolon insertion**, but it’s good practice to use them explicitly for clarity.

---

## 8. Checking Types with `typeof`

Use `typeof` to check the data type of a value or variable:

```js
typeof 5;         // "number"
typeof "Hello";   // "string"
typeof true;      // "boolean"
```

---

