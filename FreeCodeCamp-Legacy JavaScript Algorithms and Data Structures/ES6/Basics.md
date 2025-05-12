**ES6** (ECMAScript 6), also known as **ECMAScript 2015**, is a major update to JavaScript that added modern features to make the language cleaner, more powerful, and easier to write.

### 🔑 Key Features of ES6 (with brief examples):

1. **`let` and `const`** – Block-scoped variable declarations

   ```js
   let age = 25;       // can be reassigned
   const name = 'Max'; // cannot be reassigned
````

2. **Arrow Functions** – Shorter function syntax

   ```js
   const greet = (name) => `Hello, ${name}`;
   ```

3. **Template Literals** – Easier string interpolation

   ```js
   let place = 'World';
   console.log(`Hello, ${place}!`); // Hello, World!
   ```

4. **Destructuring** – Extract values from objects/arrays

   ```js
   const user = { name: 'Alex', age: 30 };
   const { name, age } = user;
   ```

5. **Default Parameters** – Set default values for function parameters

   ```js
   function sayHi(name = 'Guest') {
     console.log(`Hi, ${name}`);
   }
   ```

6. **Spread & Rest Operators (`...`)** – For copying or gathering values

   ```js
   const nums = [1, 2, 3];
   const moreNums = [...nums, 4]; // spread

   function sum(...args) {
     return args.reduce((a, b) => a + b);
   }
   ```

7. **Modules** – `import`/`export` for code reuse

   ```js
   // lib.js
   export const PI = 3.14;

   // main.js
   import { PI } from './lib.js';
   ```

8. **Classes** – Cleaner syntax for prototypes

   ```js
   class Person {
     constructor(name) {
       this.name = name;
     }
     greet() {
       return `Hi, I'm ${this.name}`;
     }
   }
   ```

9. **Promises** – Better way to handle async code

   ```js
   const fetchData = () =>
     new Promise((resolve) => setTimeout(() => resolve('Done!'), 1000));

   fetchData().then((res) => console.log(res));
   ```

```
