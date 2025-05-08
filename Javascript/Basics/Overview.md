# What is JavaScript?

JavaScript is a programming language used to make websites interactive. For example, websites like **Amazon.com** use JavaScript to enhance user experience.

A complete website is typically built using **three core technologies**:

1. **HTML** – for the structure of the webpage.  
2. **CSS** – for styling and layout.  
3. **JavaScript (JS)** – for interactivity and functionality.

JavaScript allows users to interact with a website through elements like buttons, forms, sliders, and dynamic content.

---

### Comments in JavaScript

**Comments** are lines of code that JavaScript will ignore during execution. They are useful for:

- Leaving notes for yourself.  
- Helping others understand your code.

There are two types of comments in JavaScript:

1. **Single-line comment**  
   Use `//` to write a comment on a single line:

   ```javascript
   // This is a single-line comment.
````

2. **Multi-line comment**
   Use `/*` to begin and `*/` to end a comment that spans multiple lines:

   ```javascript
   /* This is a
   multi-line comment */
   ```

```
# **What is Data in JavaScript?**

In computer science, **data** is anything meaningful to a computer.  
JavaScript provides **eight different data types**:

- `undefined`  
- `null`  
- `boolean`  
- `string`  
- `symbol`  
- `bigint`  
- `number`  
- `object`

For example, JavaScript distinguishes between:

- A **number**, such as `12`  
- A **string**, such as `"12"`, `"dog"`, or `"123 cats"`

> Computers can perform mathematical operations on numbers, but not on strings.

---

### **Variables in JavaScript**

**Variables** allow computers to **store and manipulate data** dynamically. A variable uses a **label** to point to the data rather than storing the data directly.

You can think of variables like `x` or `y` in mathematics—names that represent values. However, unlike math variables, computer variables can change their values over time.

---

### **Assigning Values to Variables**

In JavaScript, the **assignment operator (`=`)** is used to store a value in a variable.

Example:

```javascript
var myVariable;
myVariable = 5;
````

This assigns the **number `5`** to the variable `myVariable`.

If there are any calculations on the right-hand side of the `=`, those are **evaluated first**, then the result is stored in the variable.

---

### **Assigning the Value of One Variable to Another**

You can assign the value of one variable to another like this:

```javascript
var myVar = 5;
var myNum = myVar;
```

Now, both `myVar` and `myNum` contain the value `5`.

---

### **Initializing Variables with the Assignment Operator**

You can **declare and assign** a value to a variable in a single line:

```javascript
var myVar = 0;
```

---

### **Declaring String Variables**

Previously:

```javascript
var myName;
```

You can also assign a **string** directly:

```javascript
var myName = "Your Name";
```

Here, `"Your Name"` is a **string literal** (a series of characters enclosed in quotes).

---

### **Understanding Uninitialized Variables**

When a variable is declared but **not initialized**, its value is `undefined`.

* Mathematical operations on `undefined` result in `NaN` (Not a Number).
* Concatenating `undefined` with a string results in a string `"undefined"`.

Example:

```javascript
var a = 5;
var b = 10;
var c = "I am a";
```

---

### **Case Sensitivity in JavaScript Variables**

JavaScript is **case sensitive**. That means:

```javascript
MYVAR ≠ MyVar ≠ myvar
```

These are all considered **different variables**.

> 💡 **Best Practice:** Use **camelCase** for naming variables.

### **Examples of camelCase:**

```javascript
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

---

# 🧠 JavaScript Basics – Variables and Operators

### 📌 Data Types

JavaScript has **8 fundamental data types**:

* `undefined`
* `null`
* `boolean`
* `string`
* `symbol`
* `bigint`
* `number`
* `object`

```js
let number = 12;       // number
let text = "12";       // string
let isTrue = true;     // boolean
let unknown;           // undefined
let empty = null;      // null
```

---

### 🏷 Variables and Assignment

#### Declaring Variables

```js
var myVar;         // Declaration
myVar = 5;         // Assignment
```

#### Initialization

```js
var myVar = 0;     // Declaration + Initialization
```

#### Assigning One Variable to Another

```js
var a = 5;
var b = a;         // b is now 5
```

---

### 🅰 Variable Naming Rules

* **Case sensitive**: `myVar` ≠ `MyVar`
* **Best practice**: Use `camelCase` naming style

```js
var myName = "John";
var userAge = 25;
```

---

### 🔄 `var` vs `let` vs `const`

#### `var` – Function scoped, can be redeclared

```js
var camper = "James";
var camper = "David";  // ✅ Works
```

#### `let` – Block scoped, cannot be redeclared

```js
let camper = "James";
let camper = "David";  // ❌ Error
```

#### `const` – Read-only, must be initialized at declaration

```js
const FAV_PET = "Cats";
FAV_PET = "Dogs";      // ❌ Error
```

---

### ➕ Basic Arithmetic

#### Addition

```js
const sum = 5 + 10;  // 15
```

#### Subtraction

```js
const difference = 12 - 6;  // 6
```

#### Multiplication

```js
const product = 4 * 5;  // 20
```

#### Division

```js
const quotient = 20 / 4;  // 5
```

---

### ⬆️ Increment and ⬇️ Decrement

```js
let i = 1;
i++;  // 2
i--;  // 1
```

---

### 🔢 Working with Decimals

#### Multiply Decimals

```js
const product = 5.0 * 1.5;  // 7.5
```

#### Divide Decimals

```js
const quotient = 4.4 / 2;  // 2.2
```

---

### 🔁 Remainder Operator

```js
const remainder = 5 % 2;  // 1
```

---

### 🧮 Compound Assignments

#### Augmented Addition

```js
let myVar = 1;
myVar += 5;  // 6
```

#### Augmented Subtraction

```js
let myVar = 10;
myVar -= 5;  // 5
```

#### Augmented Multiplication

```js
let myVar = 2;
myVar *= 5;  // 10
```

#### Augmented Division

```js
let myVar = 20;
myVar /= 5;  // 4
```

---

