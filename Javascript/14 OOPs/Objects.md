# Objects

---

## What is an Object?

* An **object** is a data structure in JavaScript that lets you store collections of **key-value pairs**.
* It represents a real-world thing with **properties** (data) and **methods** (behavior).

Example:

```javascript
const person = {
  name: "Alex",
  age: 30,
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

console.log(person.name); // Alex
person.greet(); // Hello, my name is Alex
```

---

## Creating Objects

1. Object Literal

```javascript
const car = {
  brand: "Toyota",
  model: "Camry"
};
```

2. Using `new Object()`

```javascript
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
```

3. Using a Constructor Function (Pre-ES6)

```javascript
function Car(brand, model) {
  this.brand = brand;
  this.model = model;
}
const myCar = new Car("Toyota", "Camry");
```

4. Using a Class (ES6)

```javascript
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
}
const myCar = new Car("Toyota", "Camry");
```

---

## Object Properties and Methods

* **Property**: A variable inside an object.
* **Method**: A function inside an object.

Example:

```javascript
const phone = {
  brand: "Samsung",
  call: function() {
    console.log("Calling...");
  }
};
```

---

## Objects vs Classes

* An **object** is an **instance** of a class or created directly using literals.
* A **class** is a blueprint for creating objects.

---

## Class = Object Generator

* A class is like a factory. It produces objects with similar structure and behavior.
* Objects made from a class are called **instances**.

---

## Instance of a Class

* When you create an object using `new ClassName()`, that object is an **instance** of the class.

Example:

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

const dog = new Animal("Buddy"); // dog is an instance of Animal
```

---

## Class Features

* Constructor: Initializes new objects.
* Properties: Data attached to each object.
* Methods: Actions the object can do.
* Private Properties: Properties hidden from outside.
* Public Properties: Properties accessible from anywhere.

---

## Constructor

* The `constructor` method is special.
* It runs automatically when you create a new instance.
* It sets up the initial state.

Example:

```javascript
class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}
const myBook = new Book("1984", "George Orwell");
```

---

## Methods in a Class

* Defined without the `function` keyword.
* Called on an instance.
* Use `this` to access instance properties.

Example:

```javascript
class Book {
  constructor(title) {
    this.title = title;
  }
  describe() {
    console.log("This book is titled " + this.title);
  }
}
const b = new Book("1984");
b.describe(); // This book is titled 1984
```

---

## Private and Public Properties

* By default, properties are public.
* Private properties use `#` and can only be accessed inside the class.

Example:

```javascript
class User {
  #password; // private property

  constructor(name, password) {
    this.name = name; // public
    this.#password = password; // private
  }

  getPassword() {
    return this.#password;
  }
}

const u = new User("Dikshant", "secret");
console.log(u.name); // Dikshant
console.log(u.getPassword()); // secret
// console.log(u.#password); // SyntaxError
```

---

## The `this` Keyword

* Inside an object method or class method, `this` refers to the current object instance.
* It is used to access properties and methods of that object.

Example:

```javascript
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log("Hello " + this.name);
  }
}

const user1 = new User("Dikshant");
user1.greet(); // Hello Dikshant
```
