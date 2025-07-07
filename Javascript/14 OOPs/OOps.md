# **OOP's**

---

## ** What is OOP?**

**OOP (Object-Oriented Programming)** is a programming style where you organize code into *objects* that contain **data** (properties) and **behavior** (methods).

**Key Idea:** Model real-world things as code objects.

---

## ** Why We Use OOP**

|  Reason            | Explanation                                                 |
| ------------------- | ----------------------------------------------------------- |
| **Reusability**     | Reuse classes/objects in other parts of your project.       |
| **Modularity**      | Split code into small, manageable pieces (classes).         |
| **Maintainability** | Easier to update or fix parts without breaking other parts. |
| **Encapsulation**   | Keep data safe inside objects; control access with methods. |
| **Abstraction**     | Hide complex logic; show only what’s needed.                |
| **Inheritance**     | Reuse features from other classes.                          |
| **Polymorphism**    | Same method name, different behavior.                       |

---

## ** OOP Rules / Principles**

**Four Pillars of OOP:**

| Pillar            | Meaning                                              |
| ----------------- | ---------------------------------------------------- |
| **Encapsulation** | Wrap data + methods together.                        |
| **Abstraction**   | Hide details, show only essentials.                  |
| **Inheritance**   | Create new classes based on existing ones.           |
| **Polymorphism**  | Same method works differently for different objects. |

---

## ** OOP vs Procedural Programming**

| Aspect                  | OOP                                          | Procedural                                        |
| ----------------------- | -------------------------------------------- | ------------------------------------------------- |
| **Organization**        | Data & functions together (objects/classes). | Data & functions separate (procedures/functions). |
| **Example**             | `class Car { start() {} }`                   | `function startCar() {}`                          |
| **Reusability**         | Easier via classes & inheritance.            | Harder, code repetition common.                   |
| **Scale**               | Better for large, complex systems.           | Good for small scripts/simple tasks.              |
| **Real-world modeling** | Natural mapping to real-world objects.       | Not focused on real-world entities.               |

---

**Example**

**Procedural:**

```js
let name = "Alex";
function greet() {
  console.log("Hello " + name);
}
```

**OOP:**

```js
class Person {
  constructor(name) {
    this.name = name;
  }
  greet() {
    console.log("Hello " + this.name);
  }
}

const person1 = new Person("Alex");
person1.greet();
```

---

## **`this` in JavaScript**

* **Definition:**
  `this` is a keyword that refers to the **current object** that is calling the method.

* **Where `this` points depends on HOW a function is called:**

  | Situation                      | `this` refers to                                      |
  | ------------------------------ | ----------------------------------------------------- |
  | **Inside a method**            | The object that owns the method                       |
  | **Alone (global)**             | `window` in browser (global object)                   |
  | **In a function (non-strict)** | `window`                                              |
  | **In a function (strict)**     | `undefined`                                           |
  | **In a constructor**           | The new instance being created                        |
  | **Arrow functions**            | `this` is inherited from where it’s defined (lexical) |

**Example**

```js
const person = {
  name: "Dikshant",
  greet() {
    console.log("Hello " + this.name);
  },
};

person.greet(); // Hello Dikshant

function sayHi() {
  console.log(this);
}

sayHi(); // window (global) or undefined (strict mode)
```

**Arrow Function Example**

```js
const person = {
  name: "Dikshant",
  greet: () => {
    console.log(this.name); // 'this' here is NOT person, but the parent scope (window)
  },
};

person.greet(); // undefined
```

👉 **Always use `function` for object methods if you want `this` to work as expected!**

---
