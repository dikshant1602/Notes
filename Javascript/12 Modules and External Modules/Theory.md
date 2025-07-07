# **Modules & External Modules**

---

## **1. What are Modules?**

* **Definition:**
  In JavaScript, *modules* are reusable pieces of code (variables, functions, classes) grouped together in separate files.
  They help organize large projects by splitting code into logical, manageable parts.

* **Purpose:**

  * Encapsulation: Keep code private unless explicitly exported.
  * Maintainability: Easier to read and debug.
  * Reusability: Share functions or classes across files/projects.
  * Avoid conflicts: Each module has its own scope.

---

## **2. How Modules Work**

* **Export:**
  Make variables/functions/classes available outside the file.

  ```js
  // myModule.js
  export const name = "Dikshant";
  export function greet() {
    console.log("Hello!");
  }
  ```

* **Import:**
  Bring exported members into another file.

  ```js
  // main.js
  import { name, greet } from './myModule.js';
  console.log(name); // Dikshant
  greet(); // Hello!
  ```

* **Default Export:**
  Each module can have **one** default export.

  ```js
  // myModule.js
  export default function sayHi() {
    console.log("Hi!");
  }

  // main.js
  import sayHi from './myModule.js';
  sayHi(); // Hi!
  ```

---

## **3. Module Syntax**

* **Named Export:**
  You can export multiple things by name.

  ```js
  export const x = 10;
  export const y = 20;
  ```

* **Default Export:**
  Only one per file.

  ```js
  export default MyClass;
  ```

* **Import Everything:**

  ```js
  import * as myModule from './myModule.js';
  console.log(myModule.x);
  ```

---

## **4. Types of Modules**

1️⃣ **ES Modules (ESM):**

* Modern standard (using `import` / `export`).
* Used in modern browsers and Node.js (with `.mjs` extension or `"type": "module"` in `package.json`).

2️⃣ **CommonJS Modules (CJS):**

* Older Node.js standard (using `require` / `module.exports`).
* Example:

  ```js
  // myModule.js
  const greet = () => console.log("Hi");
  module.exports = greet;

  // main.js
  const greet = require('./myModule.js');
  greet();
  ```

---

## **5. What are External Modules?**

* **Meaning:**
  *External modules* are code modules you get from **outside your own codebase**, usually installed via **npm** (Node Package Manager).

* **Examples:**

  * React (`import React from 'react';`)
  * Lodash (`import _ from 'lodash';`)
  * Express (`const express = require('express');`)

* **Usage:**

  * Installed with `npm install package-name`
  * Imported just like your own modules.

---

## **6. Benefits of External Modules**

* Save time: Use existing solutions instead of reinventing.
* Community support: Many modules are open source and well-maintained.
* Consistency: Use the same libraries as other developers.
* Examples:

  * `axios` for HTTP requests
  * `moment` for date/time (legacy)
  * `lodash` for utility functions

---

## **7. Notes for Projects**

* Always organize your own code as modules.
* Keep external modules updated.
* Use a `package.json` to manage external dependencies.
* Use bundlers (like Webpack or Vite) if you’re targeting browsers.

---

## 📌 **🗂️ Example: How to Use an External Module**

```bash
# Install lodash
npm install lodash
```

```js
// main.js
import _ from 'lodash';

const arr = [1, 2, 3, 4];
console.log(_.reverse(arr)); // [4, 3, 2, 1]
```
