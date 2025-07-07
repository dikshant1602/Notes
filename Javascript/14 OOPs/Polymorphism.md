# **Polymorphism**

---

### What is Polymorphism?

* **Definition**:
  *Polymorphism* means “many forms.”
  In programming, it allows different classes to define methods with the same name but different behavior.

* It works hand-in-hand with **inheritance**:

  * A parent class defines a method.
  * Child classes override that method with their own version.
  * The same method call can do different things depending on which object it runs on.

---

### Why Use Polymorphism?

* Simplifies code.
* Makes it easy to handle objects in a generic way.
* Supports cleaner, more maintainable designs.

---

### Example: Polymorphism in JavaScript

```javascript
class Animal {
  speak() {
    console.log("Animal makes a sound");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

const animals = [new Animal(), new Dog(), new Cat()];

for (const animal of animals) {
  animal.speak();
}
```

**Output:**

```
Animal makes a sound
Dog barks
Cat meows
```

**Explanation:**

* The method `speak()` exists in all classes.
* The actual behavior depends on the object type.
* This is *runtime polymorphism*.

---

### Types of Polymorphism in JavaScript

JavaScript mainly uses **runtime polymorphism** (method overriding).

**Note:**
JavaScript does not have *method overloading* like some other languages (where you define multiple methods with the same name but different parameters).
However, you can mimic it by checking parameter types or counts inside a single method.

Example:

```javascript
class Calculator {
  calculate(a, b) {
    if (b === undefined) {
      return a * a; // if only one argument, square it
    }
    return a + b; // if two arguments, add them
  }
}

const calc = new Calculator();
console.log(calc.calculate(5)); // 25
console.log(calc.calculate(5, 3)); // 8
```
