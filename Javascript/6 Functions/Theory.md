# JavaScript Functions

## Table of Contents
1. [What is a Function?](#1-what-is-a-function)
2. [Function Syntax](#2-function-syntax)
   - [Syntax Rules for Function Names](#syntax-rules-for-function-names)
3. [Parameters](#3-parameters)
   - [Default Parameters](#default-parameters)
4. [Return Statement](#4-return-statement)
5. [Key Concepts](#5-key-concepts)
6. [Key Takeaways](#key-takeaways)

---

## 1. What is a Function?
- **Definition**: A function is a block of reusable code that performs a specific task.
- **Purpose**: Functions allow you to write code once and reuse it multiple times, reducing redundancy.

## 2. Function Syntax
- **Basic Structure**:
  ```javascript
  function functionName() {
    // Code to be executed
  }
  ```
- **Calling a Function**: To execute the function, use its name followed by parentheses `()`. This is also referred to as "running" or "executing" the function.
- Example:
  ```javascript
  function function1() {
    console.log('hello');
    console.log(2 + 2); // Output: 4
  }
  function1(); // Output: hello, 4
  function1(); // Output: hello, 4 (can be called multiple times)
  ```

### Syntax Rules for Function Names
- **Naming Conventions**:
  - Must use **camelCase** (e.g., `functionName`).
  - Cannot start with a number.
  - Cannot use reserved words (e.g., `function`, `if`, etc.).
  - Cannot use special characters, except `_` (underscore) and `$` (dollar sign).
- Example of valid function name: `calculateTax`, `my_function`, `get$Value`.

## 3. Parameters
- **Definition**: Parameters are variables defined in the function declaration that allow you to pass values into the function to work with dynamically.
- **Purpose**: Parameters make functions flexible by allowing them to operate on different inputs.
- **Syntax Rules for Parameters**:
  - Same as function names: Use **camelCase**, no reserved words, no special characters except `_` and `$`.
  - Parameters only exist inside the function (local scope).
- Example:
  ```javascript
  function calculateTax(cost) { // 'cost' is a parameter
    console.log(cost * 0.1); // Calculates 10% tax
  }
  calculateTax(2000); // Output: 200 (argument: 2000)
  calculateTax(5000); // Output: 500 (argument: 5000)
  ```
- **Arguments**: The actual values passed to the function when calling it (e.g., `2000` and `5000` in the example above).

### Default Parameters
- **Definition**: Parameters can have default values, which are used if no argument is provided during the function call.
- **Behavior**:
  - If an argument is passed, the function uses that value.
  - If no argument is passed, the default value is used.
- Example:
  ```javascript
  function calculateTaxx(cost, taxPercent = 0.1) { // 'taxPercent' has default value 0.1
    console.log(cost * taxPercent);
  }
  calculateTaxx(2000, 0.2); // Output: 400 (uses taxPercent = 0.2)
  calculateTaxx(5000); // Output: 500 (uses default taxPercent = 0.1)
  ```

## 4. Return Statement
- **Definition**: The `return` statement is used to output a value from a function and stop its execution.
- **Purpose**: Allows a function to produce a result that can be used elsewhere in the code.
- Example:
  ```javascript
  function calculateTax(cost) {
    return cost * 0.1; // Returns the calculated tax
  }
  const tax = calculateTax(2000); // tax = 200
  console.log(tax); // Output: 200
  ```

## 5. Key Concepts
- **Parameters vs. Return**:
  - **Parameters**: Input values passed into a function to work with (e.g., `cost` in `calculateTax(cost)`).
  - **Return**: Output value sent back from a function to be used elsewhere.
- **Reusability**: Functions allow you to write code once and reuse it with different inputs.
- **Scope**: Parameters are local to the function and cannot be accessed outside it.

## Key Takeaways
- Functions are reusable blocks of code that perform specific tasks.
- Use **camelCase** for function and parameter names, avoiding reserved words and invalid characters.
- Parameters allow dynamic input, with default values for flexibility.
- The `return` statement outputs a value from a function and stops execution.
- Calling a function multiple times with different arguments allows for versatile code.
```