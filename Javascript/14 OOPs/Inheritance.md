## **Inheritance, Method Overriding, and `super`**

---

### What is Inheritance?

* **Inheritance** means creating a new class based on an existing class.
* The new class (child/subclass) inherits properties and methods from the parent (superclass).
* It allows code reuse and makes it easier to extend features.

---

### Why Use Inheritance?

* To avoid repeating code.
* To build specialized versions of a generic class.
* Example:

  * A generic `Animal` class → `Dog` and `Cat` classes can extend it.

---

### Example of Inheritance

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(this.name + " makes a sound.");
  }
}

class Dog extends Animal {
  bark() {
    console.log(this.name + " barks.");
  }
}

const d = new Dog("Tommy");
d.speak(); // Tommy makes a sound.
d.bark();  // Tommy barks.
```

Here:

* `Dog` **extends** `Animal`.
* `Dog` gets `speak()` from `Animal` and adds its own `bark()`.

---

### `extends` Keyword

* `extends` is used to make one class inherit another.

```javascript
class Child extends Parent {
  // extra code
}
```

---

### Method Overriding

* When a child class defines a method **with the same name** as a method in its parent, it **overrides** it.
* The child’s method runs instead of the parent’s.

Example:

```javascript
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

const dog = new Dog();
dog.speak(); // Dog barks
```

---

### Using `super`

* `super` is used inside a child class to call:

  * The **constructor** of the parent.
  * A **method** from the parent.

**Calling Parent Constructor**

```javascript
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // calls Animal's constructor
    this.breed = breed;
  }

  info() {
    console.log(this.name + " is a " + this.breed);
  }
}

const d = new Dog("Tommy", "Bulldog");
d.info(); // Tommy is a Bulldog
```

**Calling Parent Method**

```javascript
class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    super.speak(); // calls Animal's speak()
    console.log("Dog barks");
  }
}

const d = new Dog();
d.speak();
// Animal speaks
// Dog barks
```
