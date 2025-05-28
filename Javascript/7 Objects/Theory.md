# JavaScript Objects

## Table of Contents
1. [What is an Object?](#1-what-is-an-object)
2. [Object Properties](#2-object-properties)
   - [Why Use Bracket Notation?](#why-use-bracket-notation)
   - [Modifying Objects](#modifying-objects)
3. [Nested Objects](#3-nested-objects)
4. [Methods (Functions in Objects)](#4-methods-functions-in-objects)
   - [Shorthand Method Syntax](#shorthand-method-syntax)
5. [Built-in Objects](#5-built-in-objects)
6. [Local Storage](#6-local-storage)
7. [Auto-Boxing](#7-auto-boxing)
8. [Objects as References](#8-objects-as-references)
   - [Comparing Objects](#comparing-objects)
9. [Object Shortcuts](#9-object-shortcuts)
   - [Destructuring](#destructuring)
   - [Shorthand Property Names](#shorthand-property-names)
   - [Shorthand Method Syntax](#shorthand-method-syntax-1)
10. [Difference Between `null` and `undefined`](#10-difference-between-null-and-undefined)
11. [Syntax Rules for Objects](#11-syntax-rules-for-objects)
12. [Key Takeaways](#key-takeaways)

---

## 1. What is an Object?
- **Definition**: An object is a data structure that groups multiple related values (properties) together.
- **Purpose**: Objects help organize code by grouping related data and functionality, making it easier to manage and reuse.
- **Mutability**: Objects are mutable, meaning their properties can be changed, added, or deleted after creation.
- **Flexibility**: Objects can store any type of value (strings, numbers, booleans, functions, other objects, etc.).

### Example of an Object
```javascript
const product = {
  name: 'socks',
  price: 1000
};
console.log(typeof product); // Output: object
```

## 2. Object Properties
- **Definition**: Properties are key-value pairs within an object, where the key is a string (or symbol) and the value can be any data type.
- **Accessing Properties**:
  - **Dot Notation**: `objectName.propertyName` (used for valid identifiers).
    ```javascript
    console.log(product.name); // Output: socks
    console.log(product.price); // Output: 1000
    ```
  - **Bracket Notation**: `objectName['propertyName']` (used for properties that are not valid identifiers or dynamic access).
    ```javascript
    console.log(product['name']); // Output: socks
    ```

### Why Use Bracket Notation?
- Required for property names that are not valid JavaScript identifiers (e.g., contain spaces, hyphens, or special characters).
- Example:
  ```javascript
  const product2 = {
    name: 'shirts',
    ['delivery-time']: '2 days' // Property name with a hyphen
  };
  // console.log(product2.delivery-time); // Error: JS interprets '-' as subtraction
  console.log(product2['delivery-time']); // Output: 2 days
  ```

### Modifying Objects
- **Changing a Property**:
  ```javascript
  product.name = 'cotton socks';
  console.log(product.name); // Output: cotton socks
  ```
- **Adding a Property**:
  ```javascript
  product.newProperty = true;
  console.log(product); // Output: {name: 'cotton socks', price: 1000, newProperty: true}
  ```
- **Deleting a Property**:
  ```javascript
  delete product.newProperty;
  console.log(product); // Output: {name: 'cotton socks', price: 1000}
  ```

## 3. Nested Objects
- **Definition**: Objects can contain other objects as properties.
- **Accessing Nested Properties**: Use multiple dot or bracket notations.
- Example:
  ```javascript
  const product2 = {
    name: 'shirts',
    rating: {
      stars: 4.5,
      count: 87
    }
  };
  console.log(product2.rating.stars); // Output: 4.5
  ```

## 4. Methods (Functions in Objects)
- **Definition**: A function stored as a property in an object is called a method.
- Example:
  ```javascript
  const product2 = {
    fun: function function1() {
      console.log('function inside an object');
    }
  };
  product2.fun(); // Output: function inside an object
  ```
- **Note**: `console.log` is a method of the `console` object provided by JavaScript.

### Shorthand Method Syntax
- Instead of `property: function() {}`, you can use a shorter syntax:
  ```javascript
  const object6 = {
    method() {
      console.log('method');
    }
  };
  object6.method(); // Output: method
  ```

## 5. Built-in Objects
- JavaScript provides built-in objects like `console` and `Math`.
- **JSON Object**:
  - **Purpose**: Used to work with JSON (JavaScript Object Notation) data, a lightweight format for storing and exchanging data.
  - **Characteristics**:
    - Similar to JavaScript objects but with limitations:
      - Does not support functions, `undefined`, symbols, or single quotes.
      - Can be understood by other programming languages.
      - Commonly used for storing data or sending data between systems.
  - **Methods**:
    - `JSON.stringify(object)`: Converts a JavaScript object to a JSON string.
      ```javascript
      console.log(JSON.stringify(product2));
      // Output: {"name":"shirts","delivery-time":"2 days","rating":{"stars":4.5,"count":87}}
      ```
    - `JSON.parse(jsonString)`: Converts a JSON string back to a JavaScript object.
      ```javascript
      const jsonString = JSON.stringify(product2);
      console.log(JSON.parse(jsonString));
      // Output: {name: 'shirts', 'delivery-time': '2 days', rating: {stars: 4.5, count: 87}}
      ```

## 6. Local Storage
- **Definition**: `localStorage` is a browser feature that allows storing data persistently (data persists even after refreshing the page).
- **Limitations**:
  - Only supports strings.
  - Returns `null` if a key does not exist.
- **Using Objects with Local Storage**:
  - Convert objects to strings using `JSON.stringify()` to store them.
  - Convert stored strings back to objects using `JSON.parse()`.
- Example (conceptual, not in your code):
  ```javascript
  localStorage.setItem('product', JSON.stringify(product2));
  const retrieved = JSON.parse(localStorage.getItem('product'));
  ```

## 7. Auto-Boxing
- **Definition**: JavaScript automatically wraps primitive values (e.g., strings, numbers) in temporary objects to provide access to properties and methods.
- Example:
  ```javascript
  console.log('hello'.length); // Output: 5 (string is wrapped in a String object)
  console.log('hello'.toUpperCase()); // Output: HELLO
  ```
- **Note**: Auto-boxing does not work with `null` or `undefined`.

## 8. Objects as References
- **Definition**: Objects are stored as references in memory, not as direct values. Variables hold a reference (like a shortcut) to the object's location in memory.
- **Implication**: Assigning an object to a new variable or passing it to a function does not create a copy; it creates a new reference to the same object.
- Example:
  ```javascript
  const object1 = { message: 'hello' };
  const object2 = object1; // References the same object
  object2.message = 'hi';
  console.log(object1); // Output: {message: 'hi'}
  console.log(object2); // Output: {message: 'hi'}
  ```

### Comparing Objects
- **Direct Comparison**: Using `===` checks if two variables reference the same object in memory, not their content.
  ```javascript
  const object3 = { message: 'byeeeeee' };
  console.log(object3 === object1); // Output: false (different objects in memory)
  console.log(object2 === object1); // Output: true (same object reference)
  ```
- **To Compare Content**: You must compare individual properties manually.

## 9. Object Shortcuts
### Destructuring
- **Definition**: Extracts properties into variables with the same name.
- Example:
  ```javascript
  const object4 = { message: 'okie', price: 1000 };
  const { message, price } = object4; // Destructuring
  console.log(message); // Output: okie
  console.log(price); // Output: 1000
  ```

### Shorthand Property Names
- **Definition**: If a variable name matches a property name, you can use a single name in the object literal.
- Example:
  ```javascript
  const message = 'okie';
  const object5 = { message }; // Equivalent to { message: message }
  console.log(object5); // Output: {message: 'okie'}
  ```

### Shorthand Method Syntax
- Covered above in the Methods section.

## 10. Difference Between `null` and `undefined`
- **`null`**:
  - A value that represents "no value" or intentional absence.
  - Type: `object` (historical JavaScript quirk).
- **`undefined`**:
  - A type and value that indicates a variable has not been assigned a value.
  - Type: `undefined`.
- **Key Difference**:
  - Both represent "no value," but `null` is explicitly set, while `undefined` is the default for uninitialized variables.
  - Auto-boxing does not work with `null` or `undefined` (e.g., `null.length` or `undefined.length` throws an error).

## 11. Syntax Rules for Objects
- **Dot Notation**: `object.property` (default for valid identifiers).
- **Bracket Notation**: `object['property']` (used for invalid identifiers or dynamic property names).
- **Valid Property Names**:
  - Can be any string or symbol.
  - If not a valid identifier (e.g., contains spaces or hyphens), use bracket notation.

## Key Takeaways
- Objects group related data and functionality, making code organized and reusable.
- Access properties with dot (`object.name`) or bracket (`object['name']`) notation.
- Objects are mutable: properties can be added, changed, or deleted.
- Methods are functions stored in objects; use shorthand syntax for simplicity.
- JSON is a lightweight data format; use `JSON.stringify()` and `JSON.parse()` to work with it.
- `localStorage` stores strings persistently; convert objects to/from JSON for storage.
- Objects are references, so assigning or passing them shares the same memory location.
- Use destructuring and shorthand property/method syntax for concise code.
- Understand `null` vs. `undefined` for proper handling of "no value" scenarios.
```