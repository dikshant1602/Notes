# **Classess**

---

### ** What is a Class?**

* **Definition:**
  A *class* is a blueprint/template for creating **objects**.
  It defines **properties** (data) and **methods** (actions).

* In JavaScript, classes were introduced in **ES6** as syntactic sugar over prototypes.

* **Example:**

  ```js
  class Car {
    // properties and methods here
  }
  ```

---

### ** Class = Object Generator**

* A class **does not create an object by itself**.
* It’s a *generator* — you use `new` to create **instances** (objects based on the class).

---

### ** Instance of a Class**

* An *instance* is an **actual object** created from a class.

* Each instance has its own copy of the properties (unless they’re static/shared).

* Example:

  ```js
  class Car {
    drive() {
      console.log('Vroom!');
    }
  }

  const myCar = new Car(); // <-- myCar is an instance
  myCar.drive();           // Vroom!
  ```

---

### ** Class Features**

| Feature            | Description                                  |
| ------------------ | -------------------------------------------- |
| **Properties**     | Variables attached to each instance.         |
| **Constructor**    | Special method for initializing new objects. |
| **Methods**        | Functions defined inside the class.          |
| **Inheritance**    | Classes can extend other classes.            |
| **Encapsulation**  | Can use private/public properties.           |
| **Static Methods** | Belong to the class, not instances.          |

---

### ** Constructor**

* A `constructor` is a **special method**.

* Runs **automatically** when you create an instance with `new`.

* Example:

  ```js
  class Car {
    constructor(brand) {
      this.brand = brand;
    }
  }

  const car1 = new Car('Toyota');
  console.log(car1.brand); // Toyota
  ```

---

### **Methods in a Class**

* Defined directly inside the class body.

* No `function` keyword needed.

* Can access properties using `this`.

* Example:

  ```js
  class Car {
    constructor(brand) {
      this.brand = brand;
    }

    drive() {
      console.log(`${this.brand} is driving`);
    }
  }

  const car1 = new Car('Tesla');
  car1.drive(); // Tesla is driving
  ```

---

### **Private & Public Properties**

**Public Property**

* Default in JS.
* Accessible anywhere.
* Example:

  ```js
  class Car {
    brand = 'Ford'; // public
  }

  const c = new Car();
  console.log(c.brand); // Ford
  ```

**Private Property**

* Use `#` to declare.
* Accessible **only inside the class**.
* Example:

  ```js
  class SecretCar {
    #code = '123ABC';

    getCode() {
      return this.#code; // can access inside
    }
  }

  const car = new SecretCar();
  console.log(car.getCode()); // 123ABC
  console.log(car.#code); // ❌ SyntaxError
  ```

---

### ** Example: All Together**

```js
class Person {
  // Public property
  name;

  // Private property
  #age;

  constructor(name, age) {
    this.name = name;
    this.#age = age;
  }

  greet() {
    console.log(`Hi, I'm ${this.name}`);
  }

  getAge() {
    return this.#age;
  }
}

const p1 = new Person('Dikshant', 22);
p1.greet();            // Hi, I'm Dikshant
console.log(p1.name);  // Dikshant
console.log(p1.getAge()); // 22
console.log(p1.#age);  // ❌ Error
```

---