# OOP's Concept

---

## Table of Content
### Object-Oriented JavaScript

1. [Create a Basic JavaScript Object](#create-a-basic-javascript-object)
2. [Use Dot Notation to Access the Properties of an Object](#use-dot-notation-to-access-the-properties-of-an-object)
3. [Create a Method on an Object](#create-a-method-on-an-object)
4. [Make Code More Reusable with the this Keyword](#make-code-more-reusable-with-the-this-keyword)
5. [Define a Constructor Function](#define-a-constructor-function)
6. [Use a Constructor to Create Objects](#use-a-constructor-to-create-objects)
7. [Extend Constructors to Receive Arguments](#extend-constructors-to-receive-arguments)
8. [Verify an Object's Constructor with instanceof](#verify-an-objects-constructor-with-instanceof)
9. [Understand Own Properties](#understand-own-properties)
10. [Use Prototype Properties to Reduce Duplicate Code](#use-prototype-properties-to-reduce-duplicate-code)
11. [Iterate Over All Properties](#iterate-over-all-properties)
12. [Understand the Constructor Property](#understand-the-constructor-property)
13. [Change the Prototype to a New Object](#change-the-prototype-to-a-new-object)
14. [Remember to Set the Constructor Property when Changing the Prototype](#remember-to-set-the-constructor-property-when-changing-the-prototype)
15. [Understand Where an Object’s Prototype Comes From](#understand-where-an-objects-prototype-comes-from)
16. [Understand the Prototype Chain](#understand-the-prototype-chain)

### Inheritance and Composition

17. [Use Inheritance So You Don't Repeat Yourself](#use-inheritance-so-you-dont-repeat-yourself)
18. [Inherit Behaviors from a Supertype](#inherit-behaviors-from-a-supertype)
19. [Set the Child's Prototype to an Instance of the Parent](#set-the-childs-prototype-to-an-instance-of-the-parent)
20. [Reset an Inherited Constructor Property](#reset-an-inherited-constructor-property)
21. [Add Methods After Inheritance](#add-methods-after-inheritance)
22. [Override Inherited Methods](#override-inherited-methods)
23. [Use a Mixin to Add Common Behavior Between Unrelated Objects](#use-a-mixin-to-add-common-behavior-between-unrelated-objects)

### Encapsulation and Modularity

24. [Use Closure to Protect Properties Within an Object from Being Modified Externally](#use-closure-to-protect-properties-within-an-object-from-being-modified-externally)
25. [Understand the Immediately Invoked Function Expression (IIFE)](#understand-the-immediately-invoked-function-expression-iife)
26. [Use an IIFE to Create a Module](#use-an-iife-to-create-a-module)

---

## 1. Create a Basic JavaScript Object

* Think about things people see every day, like cars, shops, and birds. These are all objects: tangible things people can observe and interact with.
* What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.
* These qualities, or **properties**, define what makes up an object. Note that similar objects share the same properties but may have different values for those properties. For example, all cars have wheels, but not all cars have the same number of wheels.
* **Objects in JavaScript are used to model real-world objects, giving them properties and behavior just like their real-world counterparts.** Here's an **example** using these concepts to create a duck object:

```javascript
let duck = {
  name: "Aflac",
  numLegs: 2
};
```

* This `duck` object has two property/value pairs: a `name` of `"Aflac"` and a `numLegs` of `2`.

---

## 2. Use Dot Notation to Access the Properties of an Object

* In JavaScript, objects are collections of key-value pairs (called **properties**). To get or set the value of a property, you can use **dot notation**.

* **Syntax:**
  `objectName.propertyName`

  1. **objectName** is the object variable.
  2. **propertyName** is the name of the property you want to access.

* **Example:**

```javascript
let duck = {
  name: "Aflac",
  numLegs: 2
};
console.log(duck.name);
```

* Dot notation is used on the object name `duck`, followed by the name of the property `name`, to access the value `"Aflac"`.

---

## 3. Create a Method on an Object

* Objects can have a special type of property called a **method**.
* *Methods are properties that are functions.* This adds behavior to an object. Here is the duck example with a method:

```javascript
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {
    return "The name of this duck is " + duck.name + ".";
  }
};
duck.sayName();
```

* The example adds the `sayName` method, which is a function that returns a sentence giving the name of the duck.
* Notice that the method accessed the `name` property in the return statement using `duck.name`. The next challenge will cover a better way to do this.

---

## 4. Make Code More Reusable with the this Keyword

* In JavaScript, `this` is a special keyword that refers to the current context — usually the object that is executing the code (e.g., a method inside an object).
* It lets you access the object’s own properties without hardcoding the object’s name.
* Consider the method from above:

```javascript
sayName: function() {
  return "The name of this duck is " + duck.name + ".";
}
```

* While this works, there is a pitfall: if the variable name changes, any code referencing the original name would also need to be updated. In small objects, this isn’t a big problem, but for larger objects with many references, this can cause errors.
* A better way to avoid this issue is to use the `this` keyword:

```javascript
let duck = {
  name: "Aflac",
  numLegs: 2,
  sayName: function() {
    return "The name of this duck is " + this.name + ".";
  }
};
```

* In this context, `this` refers to the object the method belongs to — `duck`. If the object's variable name changes (e.g., to `mallard`), there’s no need to update the method.
* This makes the code reusable and easier to maintain.
* *Note:* `this` can behave differently in other contexts (like global scope, arrow functions, or event handlers), but when used inside an object method, it’s a very handy way to refer to that object.

---

## 5. Define a Constructor Function

* **Constructors are functions that create new objects.** They define properties and behaviors that will belong to the new object. Think of them as a blueprint for creating new objects.
* Here is an **example** of a constructor:

```javascript
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}
```

* This constructor defines a `Bird` object with properties `name`, `color`, and `numLegs` set to `"Albert"`, `"blue"`, and `2` respectively.
* Constructors follow a few conventions:

  * Constructors are defined with a **capitalized name** to distinguish them from other functions that are not constructors.
  * Constructors use the keyword `this` to set properties of the object they will create. Inside the constructor, `this` refers to the new object being created.
  * **Constructors define properties and behaviors instead of returning a value, as other functions might.**

---

## 6. Use a Constructor to Create Objects

* Here's the `Bird` constructor from point 5:

```javascript
function Bird() {
  this.name = "Albert";
  this.color = "blue";
  this.numLegs = 2;
}

let blueBird = new Bird();
```

* **NOTE:** `this` inside the constructor always refers to the object being created.
* Notice that the `new` operator is used when calling the constructor. This tells JavaScript to create a new instance of `Bird` called `blueBird`. Without the `new` operator, `this` inside the constructor would not point to the newly created object, causing unexpected results.
* Now `blueBird` has all the properties defined inside the `Bird` constructor:

```javascript
blueBird.name;    // "Albert"
blueBird.color;   // "blue"
blueBird.numLegs; // 2
```

* Just like any other object, its properties can be accessed and modified:

```javascript
blueBird.name = 'Elvira';
console.log(blueBird.name); // "Elvira"
```

---

## 7. Extend Constructors to Receive Arguments

* In the `Bird` constructor above, all `Bird` objects created are automatically named `"Albert"`, are blue in color, and have two legs.
* What if you want birds with different values for `name` and `color`? You could manually change the properties of each bird after creation:

```javascript
let swan = new Bird();
swan.name = "Carlos";
swan.color = "white";
```

* But if you were managing hundreds or thousands of birds, this would be tedious.
* To more easily create different `Bird` objects, you can design your constructor to accept **parameters**:

```javascript
function Bird(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}
```

* Then pass values as arguments when creating each new `Bird`:

```javascript
let cardinal = new Bird("Bruce", "red");
```

* This creates a new instance of `Bird` with `name` set to `"Bruce"`, `color` set to `"red"`, and `numLegs` still set to `2`.
* The cardinal’s properties are:

```javascript
cardinal.name;    // "Bruce"
cardinal.color;   // "red"
cardinal.numLegs; // 2
```

* This makes the constructor more flexible — you can define unique properties for each `Bird` when it’s created.
* JavaScript constructors are powerful because they group objects together based on shared characteristics and behavior, while automating their creation via a blueprint.

--- 

## 8. Verify an Object's Constructor with `instanceof`

* Anytime a constructor function creates a new object, that object is said to be an **instance** of its constructor.
* JavaScript provides a convenient way to verify this relationship with the **`instanceof`** operator.
* **`instanceof` allows you to compare an object to a constructor, returning `true` or `false` based on whether that object was created with the constructor.**

---

### Example:

```javascript
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
};

let crow = new Bird("Alexis", "black");

console.log(crow instanceof Bird); // true
```

---

* If an object is created **without** using a constructor function, `instanceof` will return `false`:

```javascript
let canary = {
  name: "Mildred",
  color: "Yellow",
  numLegs: 2
};

console.log(canary instanceof Bird); // false
```

---

## 9. Understand Own Properties

In the following example, the `Bird` constructor defines two properties: `name` and `numLegs`:

```javascript
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let duck = new Bird("Donald");
let canary = new Bird("Tweety");
```

* `name` and `numLegs` are called **own properties** because they are defined **directly on the instance object**.
* This means that `duck` and `canary` each have their **own separate copy** of these properties.
* In fact, **every instance** of `Bird` will have its own copy of these properties.

---

The following code adds all of the **own properties** of `duck` to the array `ownProps`:

```javascript
let ownProps = [];

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // Output: ["name", "numLegs"]
```

---

### Example usage with `canary`:

```javascript
function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

// Only change code below this line
for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

console.log(ownProps); // Output: ["name", "numLegs"]
```

---

## 10. Use Prototype Properties to Reduce Duplicate Code
- Since `numLegs` will probably have the same value for all instances of `Bird`, you essentially have a duplicated variable `numLegs` inside each `Bird` instance.
- This may not be an issue when there are only two instances, but imagine if there are millions of instances. That would be a lot of duplicated variables.
- A better way is to use the **prototype** of `Bird`. ***Properties in the prototype are shared among ALL instances of Bird.***
- Here's how to add `numLegs` to the `Bird` prototype:

```js
Bird.prototype.numLegs = 2;

// Now all instances of Bird have the numLegs property.
console.log(duck.numLegs);
console.log(canary.numLegs);
````

* Since all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. Note that the prototype for `duck` and `canary` is part of the `Bird` constructor as `Bird.prototype`.

---

## 11. Iterate Over All Properties

* There are two types of properties: **own properties** and **prototype properties**.

  * **Own properties** are defined directly on the object instance itself.
  * **Prototype properties** are defined on the prototype.

```js
function Bird(name) {
  this.name = name;  // own property
}

Bird.prototype.numLegs = 2; // prototype property

let duck = new Bird("Donald");
```

* Here is how you add `duck`'s own properties to the array `ownProps` and prototype properties to the array `prototypeProps`:

```js
let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
  if (duck.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

console.log(ownProps);       // ["name"]
console.log(prototypeProps); // ["numLegs"]
```

---

## 12. Understand the Constructor Property

* There is a special `constructor` property located on the object instances `duck` and `beagle` that were created in the previous challenges:

```js
let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor === Bird); 
console.log(beagle.constructor === Dog);
```

* Both of these `console.log` calls would display `true` in the console.
* **Note** that the `constructor` property is a reference to the constructor function that created the instance. The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example:

```js
function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}
```

* **Note:** Since the constructor property can be overwritten (which will be covered in the next two challenges), it’s generally better to use the `instanceof` method to check the type of an object.

---

## 13. Change the Prototype to a New Object

* Till now, you have been adding properties to the prototype individually:

```js
Bird.prototype.numLegs = 2;
```

* This becomes tedious after more than a few properties.

```js
Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
```

* A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

```js
Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

---

## 14. Remember to Set the Constructor Property when Changing the Prototype

* There is one crucial side effect of manually setting the prototype to a new object. It erases the `constructor` property! This property can be used to check which constructor function created the instance, but since the property has been overwritten, it now gives false results:

```js
duck.constructor === Bird;    // false
duck.constructor === Object;  // true
duck instanceof Bird;         // true
```

* To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

```js
Bird.prototype = {
  constructor: Bird,
  numLegs: 2,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
```

---

## 15. Understand Where an Object’s Prototype Comes From

Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the `Bird` constructor creates the `duck` object:

```javascript
function Bird(name) {
  this.name = name;
}

let duck = new Bird("Donald");
```

`duck` inherits its prototype from the `Bird` constructor function. You can show this relationship with the `isPrototypeOf` method:

```javascript
Bird.prototype.isPrototypeOf(duck); // returns true
```

---

## 16. Understand the Prototype Chain

All objects in JavaScript (with a few exceptions) have a prototype. Also, an object’s prototype itself is an object:

```javascript
function Bird(name) {
  this.name = name;
}

typeof Bird.prototype; // "object"
```

Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of `Bird.prototype` is `Object.prototype`:

```javascript
Object.prototype.isPrototypeOf(Bird.prototype); // true
```

How is this useful? You may recall the `hasOwnProperty` method from a previous challenge:

```javascript
let duck = new Bird("Donald");
duck.hasOwnProperty("name"); // true
```

The `hasOwnProperty` method is defined in `Object.prototype`, which can be accessed by `Bird.prototype`, which can then be accessed by `duck`. This is an example of the **prototype chain**.

In this prototype chain, `Bird` is the supertype for `duck`, while `duck` is the subtype. `Object` is a supertype for both `Bird` and `duck`. `Object` is a supertype for all objects in JavaScript. Therefore, any object can use the `hasOwnProperty` method.

---

## 17. Use Inheritance So You Don't Repeat Yourself

There's a principle in programming called **Don't Repeat Yourself (DRY)**. The reason repeated code is a problem is because any change requires fixing code in multiple places. This usually means more work for programmers and more room for errors.

Notice in the example below that the `describe` method is shared by `Bird` and `Dog`:

```javascript
function Bird(name) {
  this.name = name;
}

function Dog(name) {
  this.name = name;
}

Bird.prototype = {
  constructor: Bird,
  describe: function() {
    console.log("My name is " + this.name);
  }
};

Dog.prototype = {
  constructor: Dog,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

The `describe` method is repeated in two places. The code can be edited to follow the DRY principle by creating a supertype (or parent) called `Animal`:

```javascript
function Animal() {}

Animal.prototype = {
  constructor: Animal,
  describe: function() {
    console.log("My name is " + this.name);
  }
};
```

Since `Animal` includes the `describe` method, you can remove it from `Bird` and `Dog`:

```javascript
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
```

Now, both `Bird` and `Dog` inherit the `describe` method from `Animal`, keeping your code cleaner and easier to maintain.

---


## 18. Inherit Behaviors from a Supertype

Earlier, you created a supertype called `Animal` that defined behaviors shared by all animals:

```js
function Animal() {}
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};
```

This and the next challenge will cover how to reuse the methods of `Animal` inside `Bird` and `Dog` without redefining them. This is called **inheritance**. This challenge covers the first step: **make an instance of the supertype**.
You already know one way to create an instance of `Animal` using the `new` operator:

```js
let animal = new Animal();
```

There are some disadvantages when using this syntax for inheritance, which are too complex for the scope of this challenge. Instead, here's an alternative approach without those disadvantages:

```js
let animal = Object.create(Animal.prototype);
```

`Object.create(obj)` creates a new object and sets `obj` as the new object's prototype.
By setting the prototype of `animal` to be the prototype of `Animal`, you are effectively giving the `animal` instance the same "recipe" as any other instance of `Animal`.

```js
animal.eat(); // Output: nom nom nom
console.log(animal instanceof Animal); // true
```

---

## 19. Set the Child's Prototype to an Instance of the Parent

Here, we set the prototype of the subtype (or child)—in this case, `Bird`—to be an instance of `Animal`:

```js
Bird.prototype = Object.create(Animal.prototype);
```

The prototype is like a "recipe" for creating an object. Now the "recipe" for `Bird` includes all the key "ingredients" from `Animal`.

```js
function Bird(name) {
  this.name = name;
}
Bird.prototype = Object.create(Animal.prototype);

let duck = new Bird("Donald");
duck.eat(); // Output: nom nom nom
```

Now `duck` inherits all of `Animal`'s properties, including the `eat` method.

---

## 20. Reset an Inherited Constructor Property

When an object inherits its prototype from another object, it also inherits the supertype's constructor property.

Example:

```js
function Bird() {}
Bird.prototype = Object.create(Animal.prototype);

let duck = new Bird();
console.log(duck.constructor); // Outputs: function Animal() {}
```

But `duck` and all instances of `Bird` should show that they were constructed by `Bird`, not `Animal`.
To fix this, manually reset the constructor:

```js
Bird.prototype.constructor = Bird;
```

### Example:

```js
function Animal() {}
function Bird() {}
function Dog() {}

Bird.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line
Bird.prototype.constructor = Bird;
Dog.prototype.constructor = Dog;

let duck = new Bird();
let beagle = new Dog();

console.log(duck.constructor);   // Bird
console.log(beagle.constructor); // Dog
```

---

## 21. Add Methods After Inheritance

A constructor function that inherits from a supertype can still have its **own methods** in addition to the inherited ones.

For example, `Bird` inherits from `Animal`, but we can also add unique methods to `Bird`:

```js
function Animal() {}
Animal.prototype.eat = function() {
  console.log("nom nom nom");
};

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);
Bird.prototype.constructor = Bird;

// Add a method unique to Bird
Bird.prototype.fly = function() {
  console.log("I'm flying!");
};
```

Now, instances of `Bird` have both `eat()` and `fly()` methods:

```js
let duck = new Bird();
duck.eat(); // Output: nom nom nom
duck.fly(); // Output: I'm flying!
```

---

## 22. Override Inherited Methods

An object can inherit behavior (methods) from another object by referencing its prototype object:

```js
ChildObject.prototype = Object.create(ParentObject.prototype);
```

Then the child receives its own methods by chaining them onto its prototype:

```js
ChildObject.prototype.methodName = function() {
  // custom behavior
};
```

It’s possible to **override** an inherited method. This is done by defining a method with the **same name** on the child’s prototype.

### Example: Bird overrides `eat()` from Animal

```js
function Animal() {}
Animal.prototype.eat = function() {
  return "nom nom nom";
};

function Bird() {}
Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.eat = function() {
  return "peck peck peck";
};
```

If you create an instance:

```js
let duck = new Bird();
console.log(duck.eat()); // "peck peck peck"
```

### Prototype Chain Lookup:

* `duck` → Is `eat()` defined here? No.
* `Bird.prototype` → Is `eat()` defined here? Yes. Execute it.
* `Animal.prototype` → Skipped. Search stops at Bird.
* `Object.prototype` → Not reached.

---

## 23. Use a Mixin to Add Common Behavior Between Unrelated Objects

Inheritance isn't always the best solution, especially for **unrelated objects** like `Bird` and `Airplane`. Both can fly, but one is not a type of the other.

Instead, use a **mixin** — a function that adds methods to any object.

### Example:

```js
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
};
```

Apply the mixin to unrelated objects:

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

bird.fly();  // "Flying, wooosh!"
plane.fly(); // "Flying, wooosh!"
```

The same `fly` method is reused by both `bird` and `plane`.

---

## 24. Use Closure to Protect Properties Within an Object from Being Modified Externally

Public properties like `bird.name` can be changed from outside:

```js
bird.name = "Duffy"; // Easily changed
```

This is risky when dealing with sensitive data (e.g., passwords).
To make a property **private**, define it as a local variable inside the constructor function. This restricts access to the variable to methods defined within the same scope.

### Example using Closure:

```js
function Bird() {
  let hatchedEgg = 10; // private variable

  this.getHatchedEggCount = function() {
    return hatchedEgg;
  };
}

let ducky = new Bird();
console.log(ducky.getHatchedEggCount()); // 10
```

`hatchedEgg` is not accessible directly, only through `getHatchedEggCount()`.

This works because JavaScript functions retain access to the scope in which they were defined — this is called a **closure**.

---

## 25. Understand the Immediately Invoked Function Expression (IIFE)

A common pattern in JavaScript is to run a function **immediately after it is declared**. This is called an **Immediately Invoked Function Expression** or **IIFE**.

### Example:

```js
(function () {
  console.log("Chirp, chirp!");
})();
```

The function is anonymous and is invoked immediately by the `()` at the end.
Output: `"Chirp, chirp!"`

---

## 26. Use an IIFE to Create a Module

An IIFE can be used to create a **module**, a single object that encapsulates related functionality.

Suppose you have these two mixins:

```js
function glideMixin(obj) {
  obj.glide = function() {
    console.log("Gliding on the water");
  };
}

function flyMixin(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  };
}
```

You can package them into a single module:

### Module Example:

```js
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  };
})();
```

Now use the module like this:

```js
let duck = {};
motionModule.glideMixin(duck);
motionModule.flyMixin(duck);

duck.glide(); // "Gliding on the water"
duck.fly();   // "Flying, wooosh!"
```

### Another Example:

```js
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};

let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

let funModule = (function () {
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  };
})();
```

Using IIFEs this way encapsulates functionality and avoids polluting the global namespace.

---

