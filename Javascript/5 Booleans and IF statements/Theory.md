# JavaScript Booleans and If Statements

## Table of Contents
1. [Booleans](#1-booleans)
   - [Comparison Operators](#comparison-operators)
   - [Difference Between `==` and `===`](#difference-between--and-)
2. [If Statements](#2-if-statements)
   - [Example of If Statement](#example-of-if-statement)
   - [Multiple Conditions with `else if`](#multiple-conditions-with-else-if)
   - [Using Variables in If Statements](#using-variables-in-if-statements)
3. [Logical Operators](#3-logical-operators)
   - [AND Operator (`&&`)](#and-operator-)
   - [OR Operator (`||`)](#or-operator-)
   - [NOT Operator (`!`)](#not-operator-)
4. [Truthy and Falsy Values](#4-truthy-and-falsy-values)
   - [Practical Example with Cart Quantity](#practical-example-with-cart-quantity)
5. [Ternary Operator](#5-ternary-operator)
6. [Guard Operator (`&&`)](#6-guard-operator-)
7. [Default Operator (`||`)](#7-default-operator-)
8. [Order of Operations](#8-order-of-operations)
9. [Key Takeaways](#key-takeaways)

---

## 1. Booleans
- **Definition**: Booleans represent a value that is either `true` or `false`.
- **Important Note**: Do not put quotes (`''`) around `true` or `false`, as this turns them into strings, not Booleans.

### Comparison Operators
- Used to compare values, resulting in a Boolean (`true` or `false`).
- Example:
  ```javascript
  console.log(3 > 5); // false
  ```

#### Difference Between `==` and `===`
- **`==`**: Checks for equality of value only, ignoring data type (type coercion occurs).
  ```javascript
  console.log(5 == '5.00'); // true (converts string '5.00' to number 5)
  ```
- **`===`**: Checks for equality of both value and data type (strict equality, no type coercion).
  ```javascript
  console.log(5 === '5.00'); // false (different types: number vs. string)
  ```

## 2. If Statements
- **Purpose**: Execute code based on whether a condition evaluates to `true` or `false`.
- **Syntax**:
  ```javascript
  if (condition) {
    // Code to execute if condition is true
  } else {
    // Code to execute if condition is false
  }
  ```
- **Branches**: The code inside `{}` after `if` or `else` is called a branch.
- **Note**: Use curly braces `{}` when the branch contains more than one line of code.

### Example of If Statement
- Checks if a person is an adult based on age:
  ```javascript
  if (30 >= 18) {
    console.log('adult'); // Output: adult
  } else {
    console.log('child');
  }
  ```

### Multiple Conditions with `else if`
- Allows checking multiple conditions in sequence.
- Example:
  ```javascript
  if (18 >= 16) {
    console.log('you can drive');
    console.log('congrats');
  } else if (18 >= 18) {
    console.log('you can drive');
  } else {
    console.log('you cannot drive');
  }
  // Output: you can drive, congrats
  ```
- **Note**: The first true condition is executed, and subsequent conditions are skipped.

### Using Variables in If Statements
- Variables can be used in conditions for dynamic checks.
- Example:
  ```javascript
  const age = 18;
  if (age >= 16) {
    console.log('you can drive');
    console.log('congrats');
  } else if (age >= 18) {
    console.log('you can drive');
  } else {
    console.log('you cannot drive');
  }
  // Output: you can drive, congrats
  ```

## 3. Logical Operators
- Used to combine or modify Boolean values.
- **Types**:
  - `&&` (AND): True if both operands are true.
  - `||` (OR): True if at least one operand is true.
  - `!` (NOT): Inverts the Boolean value.

### AND Operator (`&&`)
- Returns `true` only if both conditions are `true`.
- Examples:
  ```javascript
  console.log(true && true); // true
  console.log(true && false); // false
  console.log(false && true); // false
  console.log(0.2 >= 0 && 0.2 < 1/3); // true (both conditions are true)
  ```

### OR Operator (`||`)
- Returns `true` if at least one condition is `true`.
- Examples:
  ```javascript
  console.log(true || false); // true
  console.log(false || false); // false
  console.log(false || true); // true
  ```

### NOT Operator (`!`)
- Inverts the Boolean value (`true` becomes `false`, and vice versa).
- Examples:
  ```javascript
  console.log(!true); // false
  console.log(!false); // true
  ```

## 4. Truthy and Falsy Values
- **Falsy Values**: Values that evaluate to `false` in a Boolean context:
  - `0`
  - `''` (empty string)
  - `null`
  - `undefined`
  - `NaN`
- **Truthy Values**: All other values behave like `true` in a Boolean context.
- Examples:
  ```javascript
  if (5) {
    console.log('truthy'); // Output: truthy (5 is truthy)
  }
  if (0) {
    console.log('truthy'); // No output (0 is falsy)
  }
  ```

### Practical Example with Cart Quantity
- Demonstrates how truthy/falsy values work in conditions:
  ```javascript
  const cartQuantity = 5;
  if (cartQuantity) {
    console.log('cart has products'); // Output: cart has products
  }
  // Explanation:
  // cartQuantity = 5 (truthy, equivalent to cartQuantity > 0)
  // If cartQuantity = 0, it would be falsy, and the condition would not execute.
  ```

- More examples of truthy/falsy:
  ```javascript
  console.log(!0); // true (0 is falsy, so !0 is true)
  console.log(!5); // false (5 is truthy, so !5 is false)
  console.log(!''); // true (empty string is falsy)
  console.log('hello' / 5); // NaN (falsy)
  let variable1 = undefined;
  console.log(variable1); // undefined (falsy)
  ```

## 5. Ternary Operator
- **Purpose**: A concise way to write an `if-else` statement in a single line.
- **Syntax**: `condition ? valueIfTrue : valueIfFalse`
- Example:
  ```javascript
  const result = 0 ? 'truthy' : 'false';
  console.log(result); // Output: false (0 is falsy)
  ```

## 6. Guard Operator (`&&`)
- **Purpose**: Short-circuit evaluation to execute code only if the first condition is `true`.
- Example:
  ```javascript
  false && console.log('hello'); // No output (false short-circuits)
  true && console.log('hello'); // Output: hello
  const message = false && 'hello';
  console.log(message); // Output: false
  const messagee = 5 && 'hello';
  console.log(messagee); // Output: hello (5 is truthy, so second value is returned)
  ```

## 7. Default Operator (`||`)
- **Purpose**: Returns the first truthy value or the last value if none are truthy.
- Example:
  ```javascript
  const message1 = 0 || 'hello';
  console.log(message1); // Output: hello (0 is falsy, so 'hello' is returned)
  const currency = 'euro' || 'dollar';
  console.log(currency); // Output: euro ('euro' is truthy, so it's returned)
  ```

## 8. Order of Operations
- JavaScript evaluates expressions in this order:
  1. Parentheses `(...)`
  2. Multiplication/Division (`*`, `/`)
  3. Addition/Subtraction (`+`, `-`)
  4. Comparison operators (`>`, `<`, `>=`, `<=`, `==`, `===`)
  5. Logical operators (`&&`, `||`, `!`)

## Key Takeaways
- Booleans (`true` or `false`) are used to make decisions in code.
- Use `===` for strict equality to avoid type coercion issues.
- If statements control code execution based on conditions, with `else if` and `else` for multiple scenarios.
- Logical operators (`&&`, `||`, `!`) combine or modify conditions.
- Truthy/falsy values simplify condition checks but require understanding of what evaluates to `true` or `false`.
- Ternary, guard (`&&`), and default (`||`) operators provide concise ways to handle conditions.
```