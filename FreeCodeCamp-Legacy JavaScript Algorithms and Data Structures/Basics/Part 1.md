# Basics

## **Table of Contents**  
1. [What is JavaScript?](#what-is-javascript)  
2. [Comments in JavaScript](#comments-in-javascript)  
3. [Data Types in JavaScript](#data-types-in-javascript)  
4. [Variables in JavaScript](#variables-in-javascript)  
   - [Assigning Values](#assigning-values-to-variables)  
   - [Initializing Variables](#initializing-variables-with-the-assignment-operator)  
   - [String Variables](#declaring-string-variables)  
   - [Uninitialized Variables](#understanding-uninitialized-variables)  
   - [Case Sensitivity](#case-sensitivity-in-javascript-variables)  
5. [Variable Declarations: `var`, `let`, `const`](#var-vs-let-vs-const)  
6. [Operators](#operators)  
   - [Arithmetic](#basic-arithmetic)  
   - [Increment/Decrement](#increment-and-decrement)  
   - [Decimals](#working-with-decimals)  
   - [Remainder](#remainder-operator)  
   - [Compound Assignments](#compound-assignments)  
7. [Escaping Literal Quotes in Strings](#escaping-literal-quotes-in-strings)  
8. [Quoting Strings with Single Quotes](#quoting-strings-with-single-quotes)  
9. [Escape Sequences in Strings](#escape-sequences-in-strings)  
10. [Concatenating Strings with Plus Operator](#concatenating-strings-with-plus-operator)  
11. [Concatenating Strings with Plus Equals Operator](#concatenating-strings-with-the-plus-equals-operator)  
12. [Constructing Strings with Variables](#constructing-strings-with-variables)  
13. [Appending Variables to Strings](#appending-variables-to-strings)  
14. [Find the Length of a String](#find-the-length-of-a-string)  
15. [Bracket Notation for Characters](#use-bracket-notation-to-find-the-first-character-in-a-string)  
   - [Nth Character](#use-bracket-notation-to-find-the-nth-character-in-a-string)  
   - [Last Character](#use-bracket-notation-to-find-the-last-character-in-a-string)  
   - [Nth-to-Last Character](#use-bracket-notation-to-find-the-nth-to-last-character-in-a-string)  
16. [String Immutability](#understand-string-immutability)  
17. [Word Blanks](#word-blanks)  

---

## **What is JavaScript?**  
JavaScript is a programming language used to make websites interactive. For example, websites like **Amazon.com** use JavaScript to enhance user experience.  

A complete website is typically built using **three core technologies**:  
- **HTML** – for the structure of the webpage.  
- **CSS** – for styling and layout.  
- **JavaScript (JS)** – for interactivity and functionality.  

JavaScript allows users to interact with a website through elements like buttons, forms, sliders, and dynamic content.  

---

## **Comments in JavaScript**  
Comments are lines of code that JavaScript will ignore during execution. They are useful for:  
- Leaving notes for yourself.  
- Helping others understand your code.  

**Types of comments**:  
1. **Single-line comment**:  
   ```javascript
   // This is a single-line comment.
   ```  
2. **Multi-line comment**:  
   ```javascript
   /* This is a
   multi-line comment */
   ```  

---

## **Data Types in JavaScript**  
In computer science, **data** is anything meaningful to a computer. JavaScript provides **eight different data types**:  
- `undefined`  
- `null`  
- `boolean`  
- `string`  
- `symbol`  
- `bigint`  
- `number`  
- `object`  

**Examples**:  
```javascript
let number = 12;       // number  
let text = "12";       // string  
let isTrue = true;     // boolean  
let unknown;           // undefined  
let empty = null;      // null  
```  

> **Note**: Computers can perform mathematical operations on **numbers**, but not on **strings**.  

---

## **Variables in JavaScript**  
Variables allow computers to **store and manipulate data** dynamically. A variable uses a **label** to point to the data rather than storing the data directly.  

### **Assigning Values to Variables**  
Use the **assignment operator (`=`)** to store a value:  
```javascript
var myVariable;
myVariable = 5;  // Assigns the number 5
```  

### **Initializing Variables with the Assignment Operator**  
Declare and assign in one line:  
```javascript
var myVar = 0;
```  

### **Declaring String Variables**  
```javascript
var myName = "Your Name";  // "Your Name" is a string literal
```  

### **Understanding Uninitialized Variables**  
If a variable is declared but **not initialized**, its value is `undefined`:  
```javascript
var a;  // Value is `undefined`
```  

### **Case Sensitivity in JavaScript Variables**  
JavaScript is **case-sensitive**:  
```javascript
var myVar;  // Different from `myvar` or `MYVAR`
```  
**Best Practice**: Use **camelCase** (e.g., `myVariableName`).  

---

## **`var` vs `let` vs `const`**  
| Keyword | Scope       | Redeclaration | Reassignment |  
|---------|------------|---------------|--------------|  
| `var`   | Function   | Allowed       | Allowed      |  
| `let`   | Block      | Not allowed   | Allowed      |  
| `const` | Block      | Not allowed   | Not allowed  |  

**Examples**:  
```javascript
var x = 1;      // Function-scoped, can be redeclared  
let y = 2;      // Block-scoped, cannot be redeclared  
const z = 3;    // Block-scoped, immutable  
```  

---

## **Operators**  
### **Basic Arithmetic**  
```javascript
const sum = 5 + 10;        // 15 (Addition)  
const difference = 12 - 6; // 6 (Subtraction)  
const product = 4 * 5;     // 20 (Multiplication)  
const quotient = 20 / 4;   // 5 (Division)  
```  

### **Increment and Decrement**  
```javascript
let i = 1;
i++;  // 2 (Increment)  
i--;  // 1 (Decrement)  
```  

### **Working with Decimals**  
```javascript
const product = 5.0 * 1.5;  // 7.5  
const quotient = 4.4 / 2;   // 2.2  
```  

### **Remainder Operator**  
```javascript
const remainder = 5 % 2;  // 1  
```  

### **Compound Assignments**  
```javascript
let myVar = 1;
myVar += 5;  // 6 (Augmented Addition)  
myVar -= 2;  // 4 (Augmented Subtraction)  
myVar *= 3;  // 12 (Augmented Multiplication)  
myVar /= 4;  // 3 (Augmented Division)  
```  

---

### Escaping Literal Quotes in Strings  
When defining a string, you must start and end with single or double quotes. To include a literal quote (`"` or `'`), escape it with a backslash (`\`):  

```javascript
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```  
**Console Output**:  
```
Alan said, "Peter is learning JavaScript".
```  

---

### Quoting Strings with Single Quotes  
Single and double quotes are interchangeable in JavaScript:  

```javascript
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
```  
**Example with Nested Quotes**:  
```javascript
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
```  
**Escaping Inner Quotes**:  
```javascript
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"';
```  

> **Note**: The backslash (`\`) escapes quotes; it differs from a forward slash (`/`).  

---

### Escape Sequences in Strings  
Other escape sequences include:  

| Code | Output          |  
|------|----------------|  
| `\'` | Single quote    |  
| `\"` | Double quote    |  
| `\\` | Backslash       |  
| `\n` | Newline         |  
| `\t` | Tab             |  

**Example**:  
```javascript
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```  
**Console Output**:  
```
FirstLine  
    \SecondLine  
ThirdLine  
```  

---

### Concatenating Strings with Plus Operator  
Use `+` to combine strings:  
```javascript
const ourStr = "I come first. " + "I come second.";
```  
**Output**:  
```
I come first. I come second.
```  

---

### Concatenating Strings with the Plus Equals Operator  
Append strings with `+=`:  
```javascript
let ourStr = "I come first. ";  
ourStr += "I come second.";
```  

---

### Constructing Strings with Variables  
Embed variables using `+`:  
```javascript
const ourName = "freeCodeCamp";  
const ourStr = "Hello, our name is " + ourName + ", how are you?";  
```  
**Output**:  
```
Hello, our name is freeCodeCamp, how are you?
```  

---

### Appending Variables to Strings  
Use `+=` to append:  
```javascript
const anAdjective = "awesome!";  
let ourStr = "freeCodeCamp is ";  
ourStr += anAdjective;  
```  
**Output**:  
```
freeCodeCamp is awesome!
```  

---

### Find the Length of a String  
Use `.length`:  
```javascript
console.log("Alan Peter".length); // 10  
```  

---

### Bracket Notation for Characters  
- **First Character**:  
  ```javascript
  const firstName = "Charles";  
  const firstLetter = firstName[0]; // "C"  
  ```  
- **Nth Character**:  
  ```javascript
  const secondLetter = firstName[1]; // "h"  
  ```  
- **Last Character**:  
  ```javascript
  const lastLetter = firstName[firstName.length - 1]; // "s"  
  ```  
- **Nth-to-Last Character**:  
  ```javascript
  const thirdToLast = firstName[firstName.length - 3]; // "a"  
  ```  

---

### Understand String Immutability  
Strings cannot be mutated; reassign instead:  
```javascript
let myStr = "Bob";  
myStr = "Job"; // Correct  
myStr[0] = "J"; // Error  
```  

---

### Word Blanks  
Fill in placeholders dynamically:  
```javascript
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";  
```  

--- 