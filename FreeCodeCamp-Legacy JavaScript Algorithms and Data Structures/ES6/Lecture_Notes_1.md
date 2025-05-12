## Table of Contents

1. [Compare Scopes of the `var` and `let` Keywords](#compare-scopes-of-the-var-and-let-keywords)
2. [Mutate an Array Declared with `const`](#mutate-an-array-declared-with-const)
3. [Prevent Object Mutation](#prevent-object-mutation)
4. [Use Arrow Functions to Write Concise Anonymous Functions](#Use-Arrow-Functions-to-Write-Concise-Anonymous-Functions)
5. [Write Arrow Functions with Parameters](#write-arrow-functions-with-parameters)
6. [Set Default Parameters for Your Functions](#Set Default Parameters for Your Functions)
7. [Use the Rest Parameter with Function Parameters](#Use the Rest Parameter with Function Parameters)
8. [Set Default Parameters for Your Functions](#Set Default Parameters for Your Functions)
9. [Use the Rest Parameter with Function Parameters](#Use the Rest Parameter with Function Parameters)
10. [Use Destructuring Assignment to Assign Variables from Objects](#Use Destructuring Assignment to Assign Variables from Objects)

# Compare Scopes of the var and let Keywords
When you declare a variable with the `var` keyword, it is declared **globally**, or **locally** if declared inside a function.

The `let` keyword behaves similarly, but with some extra features. When you declare a variable with the `let` keyword inside a block, statement, or expression, its scope is **limited to that block, statement, or expression**.

### Example:

```js
var numArray = [];
for (var i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // [0, 1, 2]
console.log(i);        // 3
````

With the `var` keyword, `i` is declared globally. So when `i++` is executed, it updates the global variable. This code is equivalent to:

```js
var numArray = [];
var i;
for (i = 0; i < 3; i++) {
  numArray.push(i);
}
console.log(numArray); // [0, 1, 2]
console.log(i);        // 3
```

This behavior can cause problems if you create a function inside a `for` loop that uses the `i` variable. The stored function will always refer to the **final value of the global `i`** variable.

### Problematic Case with `var`:

```js
var printNumTwo;
for (var i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // 3
```

Even though `i` was `2` when the function was created, `printNumTwo()` returns `3` because `i` was updated globally.

### Correct Behavior with `let`:

```js
let printNumTwo;
for (let i = 0; i < 3; i++) {
  if (i === 2) {
    printNumTwo = function() {
      return i;
    };
  }
}
console.log(printNumTwo()); // 2
console.log(i);             // ReferenceError: i is not defined
```

In this case, `printNumTwo()` correctly returns `2`, and trying to access `i` outside the loop results in an error because `i` is **block-scoped** when declared with `let`.

> The `let` keyword ensures that a new `i` is created with each loop iteration, making it safer and more predictable for closures inside loops.

```

# Mutate an Array Declared with `const`

If you are unfamiliar with `const`, check out the challenge about the `const` keyword.

The `const` declaration has many use cases in modern JavaScript.

Some developers prefer to assign all their variables using `const` by default, unless they know they will need to reassign the value. Only in that case do they use `let`.

However, it is important to understand that **objects** (including **arrays** and **functions**) assigned to a variable using `const` are still **mutable**. Using the `const` declaration only prevents **reassignment of the variable identifier**.

### Example:

```js
const s = [5, 6, 7];
s = [1, 2, 3];   // ❌ This will throw an error
s[2] = 45;       // ✅ This is allowed
console.log(s);  // [5, 6, 45]
````

Attempting `s = [1, 2, 3]` will result in an **error** because reassignment of a `const` variable is not allowed.

However, after **commenting out that reassignment line**, the following is valid:

```js
const s = [5, 6, 7];
// s = [1, 2, 3]; // ❌ Error: Assignment to constant variable
s[2] = 45;
console.log(s); // [5, 6, 45]
```

As you can see, you can **mutate the contents** of the array `[5, 6, 7]`, and the variable `s` will still point to the altered array `[5, 6, 45]`.

> Like all arrays, the elements in `s` are mutable, but because `const` was used, you cannot reassign the variable identifier `s` to a different array using the assignment operator.

```

# Prevent Object Mutation

As seen in the previous challenge, the `const` declaration alone doesn't really protect your data from mutation. To ensure your data doesn't change, JavaScript provides a function `Object.freeze()` to prevent data mutation.

Any attempt at changing the object will be rejected, with an error thrown if the script is running in **strict mode**.

### Example:

```js
let obj = {
  name: "FreeCodeCamp",
  review: "Awesome"
};

Object.freeze(obj);  // Freeze the object

obj.review = "bad";  // ❌ Attempt to change the object
obj.newProp = "Test"; // ❌ Attempt to add new property

console.log(obj);     // { name: "FreeCodeCamp", review: "Awesome" }
````

Both `obj.review` and `obj.newProp` assignments will result in **errors** because our editor runs in **strict mode** by default.

The console will display:

```js
{ name: "FreeCodeCamp", review: "Awesome" }
```

### Key Takeaway:

* `Object.freeze()` prevents any changes (mutations) to the object’s properties.
* In strict mode, the attempt to modify or add properties will throw an error.

```

# Use Arrow Functions to Write Concise Anonymous Functions

In JavaScript, we often don't need to name our functions, especially when passing a function as an argument to another function. Instead, we create **inline functions**. We don't need to name these functions because we do not reuse them anywhere else.

### Traditional Anonymous Function:

```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
````

ES6 provides us with **syntactic sugar** to not have to write anonymous functions this way. Instead, you can use **arrow function syntax**:

### Arrow Function Syntax:

```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```

When there is no function body, and only a return value, arrow function syntax allows you to **omit the keyword `return`** as well as the **brackets** surrounding the code. This helps simplify smaller functions into **one-line statements**:

### Simplified One-liner:

```js
const myFunc = () => "value";
```

This code will still return the string `"value"` by default.

```

# Write Arrow Functions with Parameters

Just like a regular function, you can pass **arguments** into an arrow function.

### Example with One Parameter:

```js
const doubler = (item) => item * 2;
doubler(4); // Returns: 8
````

In the example above, calling `doubler(4)` would return the value `8`.

### Omit Parentheses for a Single Parameter:

If an arrow function has a **single parameter**, you can omit the parentheses around the parameter.

```js
const doubler = item => item * 2;
```

This is functionally equivalent to the previous example.

### Example with Multiple Parameters:

It is possible to pass **more than one argument** into an arrow function.

```js
const multiplier = (item, multi) => item * multi;
multiplier(4, 2); // Returns: 8
```

In this case, calling `multiplier(4, 2)` would return the value `8`.

```


## Set Default Parameters for Your Functions

In order to help us create more flexible functions, **ES6** introduces **default parameters** for functions.

### Example with Default Parameter:

```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John"));   // Outputs: Hello John
console.log(greeting());         // Outputs: Hello Anonymous


## Use the Rest Parameter with Function Parameters

In order to help us create more flexible functions, **ES6** introduces the **rest parameter** for function parameters. With the rest parameter, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.

### Example with Rest Parameter:

```js
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}

console.log(howMany(0, 1, 2));                     // Outputs: You have passed 3 arguments.
console.log(howMany("string", null, [1, 2, 3], {})); // Outputs: You have passed 4 arguments.


## Use the Spread Operator to Evaluate Arrays In-Place

**ES6** introduces the **spread operator**, which allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.

### Example in ES5 (Using `apply()`):

```js
var arr = [6, 89, 3, 45];
var maximus = Math.max.apply(null, arr); // Outputs: 89


## Use Destructuring Assignment to Extract Values from Objects

**Destructuring assignment** is a special syntax introduced in ES6, allowing for the neat extraction of values from an object.

### Example in ES5:

```js
const user = { name: 'John Doe', age: 34 };

const name = user.name;
const age = user.age;


## Use Destructuring Assignment to Assign Variables from Objects

Destructuring allows you to assign a new variable name when extracting values from an object. You can achieve this by placing the new variable name after a colon during assignment.

### Example:

Using the same object from the previous example:

```js
const user = { name: 'John Doe', age: 34 };
