# ES6

---

## Table of Contents
1. [Destructuring Assignment with Nested Objects](#1-destructuring-assignment-with-nested-objects)
2. [Destructuring Assignment with Arrays](#2-destructuring-assignment-with-arrays)
3. [Destructuring with Rest Elements](#3-destructuring-with-rest-elements)
4. [Destructuring Objects in Function Parameters](#4-destructuring-objects-in-function-parameters)
5. [Template Literals](#5-template-literals)
6. [Object Property Shorthand](#6-object-property-shorthand)
7. [Concise Method Syntax in Objects](#7-concise-method-syntax-in-objects)
8. [Class Syntax](#8-class-syntax)
9. [Getters and Setters](#9-getters-and-setters)
10. [Module Scripts](#10-module-scripts)

---

## 1. Destructuring Assignment with Nested Objects

### Extract Values with Same Names:
```javascript
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};

const { johnDoe: { age, email }} = user;
```

### Assign to Different Variable Names:
```javascript
const { johnDoe: { age: userAge, email: userEmail }} = user;
```

---

## 2. Destructuring Assignment with Arrays

### Basic Array Destructuring:
```javascript
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
```

### Skip Elements:
```javascript
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```

---

## 3. Destructuring with Rest Elements

### Collect Remaining Elements:
```javascript
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr);   // [3, 4, 5, 7]
```

> **Note:** Rest element must be last in the destructuring pattern.

---

## 4. Destructuring Objects in Function Parameters

### Traditional Approach:
```javascript
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
};
```

### Inline Destructuring:
```javascript
const profileUpdate = ({ name, age, nationality, location }) => {
  // Directly use variables
};
```

---

## 5. Template Literals

### Multi-line Strings and Interpolation:
```javascript
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);
```

### Features:
- Uses backticks (`` ` ``)
- Preserves line breaks
- `${expression}` syntax for interpolation

---

## 6. Object Property Shorthand

### Traditional vs ES6:
```javascript
// ES5
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

// ES6
const getMousePosition = (x, y) => ({ x, y });
```

---

## 7. Concise Method Syntax in Objects

### ES5 vs ES6:
```javascript
// ES5
const person = {
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};

// ES6
const person = {
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};
```

---

## 8. Class Syntax

### Class Declaration:
```javascript
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
  
  takeOff() {
    console.log(`To ${this.targetPlanet}!`);
  }
}

const zeus = new SpaceShuttle('Jupiter');
zeus.takeOff(); // "To Jupiter!"
```

### Key Points:
- `class` keyword creates a constructor function
- Constructor is called when `new` is used
- Methods can be defined without `function` keyword
- Convention: Use PascalCase for class names

---

## 9. Getters and Setters

### Example:
```javascript
class Book {
  constructor(author) {
    this._author = author;
  }
  
  // Getter
  get writer() {
    return this._author;
  }
  
  // Setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

const novel = new Book('anonymous');
console.log(novel.writer); // "anonymous"
novel.writer = 'newAuthor';
console.log(novel.writer); // "newAuthor"
```

> **Note:** The underscore (`_`) convention indicates intended privacy, but doesn't enforce it.

---

## 10. Module Scripts

### HTML Setup:
```html
<script type="module" src="filename.js"></script>
```

### Key Features:
- Enables `import`/`export` syntax
- Creates module scope (not global)
- Supports code organization across files
- Deferred execution by default

---
