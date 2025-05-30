# Advanced JavaScript Functions

## Table of Contents
1. [Event Listeners](#1-event-listeners)
   - [Using `addEventListener`](#using-addeventlistener)
   - [Removing Event Listeners](#removing-event-listeners)
   - [Advantages Over `onclick`](#advantages-of-addeventlistener-over-onclick-attribute)
2. [Function Declarations](#2-function-declarations)
3. [Functions as Values](#3-functions-as-values)
   - [Function Expressions](#function-expression)
   - [Anonymous Functions](#anonymous-functions)
   - [Methods](#functions-in-objects-methods)
4. [Passing Functions as Arguments](#4-passing-functions-as-arguments)
5. [Asynchronous Code](#5-asynchronous-code)
   - [`setTimeout`](#settimeout)
   - [`setInterval`](#setinterval)
6. [Array Methods](#6-array-methods)
   - [`forEach`](#foreach)
   - [`filter`](#filter)
   - [`map`](#map)
7. [Arrow Functions](#7-arrow-functions)
   - [Shortcuts](#arrow-function-shortcuts)
   - [In Objects](#arrow-functions-in-objects)
8. [Key Takeaways](#8-key-takeaways)

---

## 1. Event Listeners
- **Purpose**: Allow code to respond to user interactions (e.g., clicks, keypresses) with HTML elements.
- **Syntax**: Use `addEventListener(event, callbackFunction)` to attach an event handler to an element.
- **HTML Example**:
  ```html
  <button onclick="" class="js-button">Click</button>
  ```
  - The word after `on` (e.g., `click`) represents the event type.

### Using `addEventListener`
- **How it Works**: Select an element and attach a function to run when the specified event occurs.
- Example:
  ```javascript
  const buttonElement = document.querySelector('.js-button');
  const eventListener = () => {
    console.log('click');
  };
  buttonElement.addEventListener('click', eventListener); // Logs 'click' on button click
  ```
- **Parameters**:
  - First: Event type (e.g., `'click'`).
  - Second: Callback function (often an arrow function) to execute when the event occurs.

### Removing Event Listeners
- Use `removeEventListener(event, callbackFunction)` to stop a function from responding to an event.
- Example:
  ```javascript
  buttonElement.removeEventListener('click', eventListener); // Removes the eventListener function
  ```

### Advantages of `addEventListener` Over `onclick` Attribute
- Allows multiple event listeners for the same event.
- Enables removing specific listeners.
- Provides more control and is considered best practice.

### Example with Multiple Listeners
```javascript
buttonElement.addEventListener('click', () => {
  console.log('click2');
});
```

## 2. Function Declarations
- **Definition**: Functions defined using the `function` keyword, which support **hoisting** (can be called before declaration in code).
- Example:
  ```javascript
  function greeting() {
    console.log('hello');
  }
  greeting(); // Output: hello
  ```

## 3. Functions as Values
- **Concept**: Functions are first-class citizens in JavaScript, meaning they can be assigned to variables, stored in objects, or passed as arguments.

### Function Expression
- A function assigned to a variable (no hoisting).
  ```javascript
  const function1 = function greeting() {
    console.log('hello2');
  };
  console.log(function1); // Output: [Function: greeting]
  console.log(typeof function1); // Output: function
  function1(); // Output: hello2
  ```

### Anonymous Functions
- Functions without a name, often used in function expressions.
  ```javascript
  const function3 = function() {
    console.log('hello3');
  };
  function3(); // Output: hello3
  ```

### Functions in Objects (Methods)
- Functions stored in objects are called methods.
  ```javascript
  const object1 = {
    num: 2,
    fun: function() {
      console.log('hii');
    }
  };
  object1.fun(); // Output: hii
  ```

## 4. Passing Functions as Arguments
- **Callback Functions**: Functions passed as arguments to other functions.
- Example:
  ```javascript
  function run(param) {
    param(); // Calls the function passed as param
  }
  run(function() {
    console.log('hello45');
  }); // Output: hello45
  ```

## 5. Asynchronous Code
- **Definition**: Code that does not wait for a task to complete before moving to the next line (non-blocking).
- **Contrast with Synchronous Code**: Synchronous code waits for each line to finish before proceeding.
- **Asynchronous Features**: Certain JavaScript functions like `setTimeout` and `setInterval` are asynchronous.

### `setTimeout`
- **Purpose**: Runs a function after a specified delay (in milliseconds).
- Example:
  ```javascript
  setTimeout(function() {
    console.log('timeout');
    console.log('timeout2');
  }, 3000); // Runs after 3 seconds
  console.log('nexttime'); // Runs immediately
  ```
- **Behavior**: Non-blocking; sets a timer in the background and continues executing the next line.

### `setInterval`
- **Purpose**: Repeatedly runs a function at specified intervals (in milliseconds).
- Example:
  ```javascript
  setInterval(function() {
    console.log('interval');
  }, 3000); // Runs every 3 seconds
  ```
- **Behavior**: Asynchronous and non-blocking; continues running until cleared.

## 6. Array Methods

### `forEach`
- **Purpose**: Loops through an array, executing a callback function for each element.
- **Parameters**: Callback function receives `value` and `index`.
- Example:
  ```javascript
  ['make dinner', 'go to gym', 'watch lecture'].forEach((value, index) => {
    console.log(index); // Output: 0, 1, 2
    console.log(value); // Output: make dinner, go to gym, watch lecture
  });
  ```
- **Advantages**:
  - More readable than a traditional `for` loop.
  - Provides `index` as an optional second parameter.
- **Limitation**: No direct `break` statement; use `return` to skip an iteration (similar to `continue`).
  ```javascript
  ['make dinner', 'wash dishes', 'watch youtube'].forEach((value, index) => {
    if (value === 'wash dishes') {
      return; // Skips this iteration
    }
    console.log(index); // Output: 0, 2
    console.log(value); // Output: make dinner, watch youtube
  });
  ```

### `filter`
- **Purpose**: Creates a new array with elements that pass a test (return `true` in the callback).
- **How it Works**:
  - Creates a new array.
  - If the callback returns `true`, the value is included; if `false`, it is excluded.
- Example:
  ```javascript
  console.log([1, -3, 5].filter((value, index) => value >= 0));
  // Output: [1, 5]
  ```

### `map`
- **Purpose**: Creates a new array by transforming each element based on the callback's return value.
- **How it Works**:
  - Creates a new array.
  - Adds the callback's return value for each element to the new array.
- Example:
  ```javascript
  console.log([1, 1, 3].map((value, index) => value * 2));
  // Output: [2, 2, 6]
  ```
- **Shorter Syntax**:
  ```javascript
  console.log([1, 1, 3].map(value => value * 2)); // Same output
  ```

## 7. Arrow Functions
- **Definition**: A concise syntax for writing functions using `=>`.
- **Comparison with Regular Functions**:
  ```javascript
  const regularFunction = function(param, param2) {
    console.log('hello');
    return 5;
  };
  const arrowFunction = (param, param2) => {
    console.log('hello');
    return 5;
  };
  arrowFunction(); // Output: hello
  ```
- **Advantages**:
  - More concise, especially for callbacks.
  - Recommended for functions passed to methods like `forEach`, `filter`, and `map`.

### Arrow Function Shortcuts
- **Single Parameter**: Parentheses are optional.
  ```javascript
  const oneParam = param => {
    console.log(param + 1);
  };
  oneParam(2); // Output: 3
  ```
- **Single Line**: Curly braces and `return` are optional if the function has one expression.
  ```javascript
  const oneLine = () => 2 + 3;
  console.log(oneLine()); // Output: 5
  ```

### Arrow Functions in Objects
- **Note**: Shorthand method syntax (`method() {}`) is preferred over arrow functions for object methods due to readability.
  ```javascript
  const object2 = {
    method: () => {}, // Arrow function (less common)
    method() {} // Shorthand method syntax (recommended)
  };
  ```

## 8. Key Takeaways
- **Event Listeners**: Use `addEventListener` for flexible, reusable event handling; avoid `onclick` attributes.
- **Function Declarations**: Support hoisting, making them callable before definition.
- **Functions as Values**: Can be stored in variables, objects, or passed as arguments (callbacks).
- **Asynchronous Code**: `setTimeout` and `setInterval` allow non-blocking delayed or repeated execution.
- **Array Methods**:
  - `forEach`: Loops through arrays; use `return` to skip iterations.
  - `filter`: Creates a new array with elements that pass a test.
  - `map`: Transforms each element into a new array.
- **Arrow Functions**: Concise syntax, ideal for callbacks; use shortcuts for single parameters or single-line functions.
- **Best Practices**:
  - Use arrow functions for callbacks in array methods.
  - Use shorthand method syntax in objects.
  - Prefer `forEach` over `for` loops for readability, unless `break` is needed.
```