# JavaScript Basics 5

## Table of Contents
1. **[JavaScript Objects](#javascript-objects)**
   - Creating Objects
   - Accessing Properties
   - Modifying Objects
   - Complex & Nested Objects
   - Object Methods
2. **[Loops & Iteration](#loops--iteration)**
   - `for` Loops
   - `while` & `do...while` Loops
   - Looping Through Arrays
   - Nested Loops
3. **[Recursion](#recursion)**
   - Basic Recursion
   - Recursion vs. Loops
4. **[Random Number Generation](#random-number-generation)**
5. **[Type Conversion](#type-conversion)**
6. **[Conditional (Ternary) Operator](#conditional-ternary-operator)**
7. **[Key Takeaways](#key-takeaways)**

---

## **1. JavaScript Objects**
Objects in JavaScript are collections of **key-value pairs**, where each key (property) maps to a value (which can be any data type, including functions).

### **1.1 Creating Objects**
```javascript
// Object literal syntax
const person = {
  name: "Alice",
  age: 25,
  isStudent: true,
  greet: function() {
    console.log("Hello!");
  }
};
```
- Objects can store **properties** (data) and **methods** (functions).
- Keys are strings, but quotes are optional if the key is a valid identifier.

### **1.2 Accessing Properties**
Two ways to access object properties:
1. **Dot Notation** (for static property names)
   ```javascript
   console.log(person.name);  // "Alice"
   person.greet();           // Calls the method
   ```
2. **Bracket Notation** (for dynamic property names)
   ```javascript
   const property = "age";
   console.log(person[property]);  // 25
   ```

### **1.3 Modifying Objects**
- **Adding a new property:**
  ```javascript
  person.country = "USA";
  ```
- **Updating a property:**
  ```javascript
  person.age = 26;
  ```
- **Deleting a property:**
  ```javascript
  delete person.isStudent;
  ```
- **Checking if a property exists:**
  ```javascript
  console.log(person.hasOwnProperty("name"));  // true
  ```

### **1.4 Complex & Nested Objects**
Objects can contain **arrays, other objects, and functions**.
```javascript
const student = {
  name: "Bob",
  grades: [85, 90, 78],
  address: {
    street: "123 Main St",
    city: "Boston"
  },
  getAverage: function() {
    const sum = this.grades.reduce((a, b) => a + b, 0);
    return sum / this.grades.length;
  }
};

console.log(student.address.city);  // "Boston"
console.log(student.getAverage()); // 84.33
```

---

## **2. Loops & Iteration**
Loops allow executing a block of code **repeatedly** based on a condition.

### **2.1 `for` Loop**
- Best for **known iteration count**.
```javascript
for (let i = 0; i < 5; i++) {
  console.log(i);  // 0, 1, 2, 3, 4
}
```
- **Looping through an array:**
  ```javascript
  const numbers = [10, 20, 30];
  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);  // 10, 20, 30
  }
  ```
- **Counting backwards:**
  ```javascript
  for (let i = 5; i > 0; i--) {
    console.log(i);  // 5, 4, 3, 2, 1
  }
  ```
- **Skipping iterations (odd numbers):**
  ```javascript
  for (let i = 1; i < 10; i += 2) {
    console.log(i);  // 1, 3, 5, 7, 9
  }
  ```

### **2.2 `while` & `do...while` Loops**
- **`while` loop** (checks condition first):
  ```javascript
  let i = 0;
  while (i < 5) {
    console.log(i);  // 0, 1, 2, 3, 4
    i++;
  }
  ```
- **`do...while` loop** (executes at least once):
  ```javascript
  let j = 0;
  do {
    console.log(j);  // 0 (runs even if condition is false)
    j++;
  } while (j < 0);
  ```

### **2.3 Nested Loops**
- Used for **multi-dimensional data** (e.g., matrices).
```javascript
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
    console.log(`${i} * ${j} = ${i * j}`);
  }
}
```
**Output:**
```
1 * 1 = 1
1 * 2 = 2
1 * 3 = 3
2 * 1 = 2
...
3 * 3 = 9
```

---

## **3. Recursion**
A function that **calls itself** to solve smaller instances of the same problem.

### **3.1 Basic Recursion Example (Countdown)**
```javascript
function countdown(n) {
  if (n <= 0) return;  // Base case (stops recursion)
  console.log(n);
  countdown(n - 1);    // Recursive call
}
countdown(5);  // 5, 4, 3, 2, 1
```

### **3.2 Recursion vs. Loops**
- **Recursion** is useful for **tree structures, nested data, and divide-and-conquer algorithms**.
- **Loops** are better for **simple iterations** (faster in most cases).

---

## **4. Random Number Generation**
- **Random fraction (0 ≤ x < 1):**
  ```javascript
  Math.random();
  ```
- **Random integer (0-9):**
  ```javascript
  Math.floor(Math.random() * 10);
  ```
- **Random number in a range (min-max, inclusive):**
  ```javascript
  function randomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log(randomInRange(5, 10));  // 5, 6, 7, 8, 9, or 10
  ```

---

## **5. Type Conversion**
- **String to integer:**
  ```javascript
  parseInt("42");       // 42
  parseInt("1010", 2);  // 10 (binary conversion)
  ```
- **String to float:**
  ```javascript
  parseFloat("3.14");   // 3.14
  ```

---

## **6. Conditional (Ternary) Operator**
A shorthand for `if...else` statements.
```javascript
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";  // "Adult"
```
- **Chained ternary (multiple conditions):**
  ```javascript
  const grade = score >= 90 ? "A"
                : score >= 80 ? "B"
                : score >= 70 ? "C"
                : "F";
  ```

---

## **7. Key Takeaways**
| Concept | Use Case | Example |
|---------|----------|---------|
| **Objects** | Store structured data | `{ name: "Alice", age: 25 }` |
| **`for` Loop** | Known iterations | `for (let i = 0; i < 5; i++)` |
| **`while` Loop** | Unknown iterations | `while (condition) { ... }` |
| **Recursion** | Nested data/trees | `function countdown(n) { ... }` |
| **Ternary Operator** | Short conditionals | `x > 5 ? "Yes" : "No"` |
| **Random Numbers** | Games, simulations | `Math.random()` |

