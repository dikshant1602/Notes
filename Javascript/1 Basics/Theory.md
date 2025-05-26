# **JavaScript Basics**

### 📑 **Table of Contents**

1. [What Is JavaScript?](#-what-is-javascript)
2. [HTML, CSS, and JavaScript – Roles](#-html-css-and-javascript--roles)
3. [Basic JavaScript Instructions](#-basic-javascript-instructions)
4. [Syntax](#-syntax)
5. [Using JavaScript for Math](#-using-javascript-for-math)
6. [JavaScript Numbers and Math](#-2-javascript-numbers-and-math--)

   * [Basic Concepts](#-basic-concepts)
   * [Order of Operations](#-order-of-operations)
   * [Types of Numbers](#-types-of-numbers)
   * [Floating Point Precision Issues](#-floating-point-precision-issues)
   * [Rounding Numbers in JavaScript](#-rounding-numbers-in-javascript)

---


## **What Is JavaScript?**

* JavaScript is a **programming language** used to make websites **interactive**.
* It allows us to:

  * Respond to user actions (clicks, inputs)
  * Manipulate page content
  * Perform calculations
  * Control multimedia, forms, etc.

---

## **HTML, CSS, and JavaScript – Roles**

| Technology     | Purpose                                    |
| -------------- | ------------------------------------------ |
| **HTML**       | Structures content (text, images, buttons) |
| **CSS**        | Styles content (colors, layout, fonts)     |
| **JavaScript** | Adds interactivity (behavior, actions)     |

---

## **Basic JavaScript Instructions**

* Code is made up of **instructions**, also called **statements**.
* Instructions follow **syntax** rules (like grammar in language).

#### 👉 Examples:

```javascript
alert('hello');              // Shows a popup message
document.body.innerHTML = 'hello';  // Displays text on the web page
```

---

## **Syntax**

* Syntax = **rules** for writing valid code.
* Common elements:

  * **Semicolons `;`** to end statements (optional but recommended)
  * **Quotes `' '` or `" "`** for text (strings)
  * **Parentheses `()`** for function calls

---

## **Using JavaScript for Math**

* JavaScript can do basic arithmetic:

```javascript
2 + 2   // Result: 4
```

---

## JavaScript Numbers and Math – 

### **Basic Concepts**

* JavaScript can perform **all mathematical operations**:

  * Addition `+`, Subtraction `-`, Multiplication `*`, Division `/`
* Syntax is similar to regular math:

  * Example: `10.90 * 2 + 20.95` → `42.75`
* **Decimals** are supported:

  * These are called **floating point numbers**

---

### **Order of Operations**

* Follows **standard math rules**:

  * Order: `*`, `/`, `+`, `-`
  * **Multiplication and division have the same priority** and are evaluated **left to right**
* Use **brackets** `()` to control calculation order:

  * Example: `(1 + 1) * 3` → `2 * 3 = 6`
  * `20.95 + 7.99 * 2` → `20.95 + 15.98 = 36.93`
  * Mistake example: `20.95 + 7.99 * 2 * 0.1 = 22.548` (wrong)
  * Correct: `(20.95 + 7.99 * 2) * 0.1 = 3.693`

---

### **Types of Numbers**

| Name                                | Example       | Description     |
| ----------------------------------- | ------------- | --------------- |
| **Integers**                        | `2`, `3`, `4` | Whole numbers   |
| **Floats (Floating Point Numbers)** | `2.2`, `3.5`  | Decimal numbers |

---

### **Floating Point Precision Issues**

* Computers store numbers **in binary**, leading to rounding errors:

  * Example: `0.1 + 0.2` → `0.30000000000000004`
* This happens because some decimal numbers **can’t be exactly represented in binary**

---

### **Rounding Numbers in JavaScript**

* Use `Math.round()` to round to the nearest whole number:

```javascript
Math.round(2.2); // → 2
Math.round(2.8); // → 3
```

#### 👉 Example with cents:

```javascript
((2095 + 799) * 0.1) / 100     // → 2.894 (raw)
Math.round((2095 + 799) * 0.1) / 100 // → 2.89 (rounded)
```

---