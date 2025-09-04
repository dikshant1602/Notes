# Callbacks in JavaScript

---

### What is a Callback?

* A **callback** is a function that is passed as an argument to another function.
* It runs **after** the main function finishes its task.
* Callbacks help handle **asynchronous operations** (like reading a file or making a network request).

---

### Why Use Callbacks?

* JavaScript runs **asynchronously** (non-blocking).
* For example, when you read data from a database or make an API call, it takes time.
* Instead of stopping the whole program, JS uses callbacks to run the code **after** the task finishes.

---

### Basic Example

```javascript
function greet(name, callback) {
  console.log("Hi " + name);
  callback();
}

function sayBye() {
  console.log("Bye!");
}

greet("Alex", sayBye);
```

**Output:**

```
Hi Alex
Bye!
```

---

### Callback in Backend Code

A common backend example is reading files or querying a database:

**Node.js Example (without promises):**

```javascript
const fs = require('fs');

fs.readFile('data.txt', 'utf8', function(err, data) {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});
```

* `readFile` does not block the whole program.
* When reading is done, Node runs the **callback** with the result.

---

### Modern Alternative: Promises

* Callbacks are sometimes harder to manage for multiple steps (**callback hell**).
* Modern JS uses **Promises** and `async/await` instead.
* But callbacks are still important to understand, especially in older Node.js code.

---

## Testing a Backend

---

### Why Test a Backend?

* To make sure **routes**, **logic**, **APIs**, and **databases** work correctly.
* To catch bugs before deploying to production.
* To prove that endpoints return the **right status code**, **correct data**, and handle errors.

---

### How Do You Test a Backend?

Backend testing usually checks:

* **Unit tests**: Small pieces like functions, controllers.
* **Integration tests**: Routes + logic + database together.
* **End-to-end tests**: The entire flow from request to response.

---

### Example Tools

* **Jest** → General testing framework (can test backend).
* **Supertest** → Good for testing HTTP requests in Node.js.
* **Mocha** + **Chai** → Another popular combo for backend testing.
* **Postman** → Manual API testing tool.
* **Insomnia** → Similar to Postman, for sending requests and checking responses.

---

### Example: Testing an Express Route

**Basic API Route:**

```javascript
app.get('/hello', (req, res) => {
  res.status(200).send('Hello World');
});
```

**Test with Supertest + Jest:**

```javascript
const request = require('supertest');
const app = require('./app'); // your Express app

describe('GET /hello', () => {
  it('should return Hello World', async () => {
    const res = await request(app).get('/hello');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello World');
  });
});
```

---

### Steps for Testing a Backend

1. **Arrange**

   * Start the server.
   * Seed database with test data (if needed).

2. **Act**

   * Send a fake HTTP request (GET, POST, etc.).

3. **Assert**

   * Check the response.
   * Verify status code.
   * Verify returned data.

---

### Good Testing Practices

* Test **all routes**: success + failure.
* Test **edge cases**: missing fields, wrong data.
* Run tests automatically before deploying.
* Keep tests fast and repeatable.

---

## Summary

| Topic           | Explanation                                                    |
| --------------- | -------------------------------------------------------------- |
| Callback        | Function passed to another function, runs after work finishes. |
| Why             | Handle asynchronous tasks without blocking.                    |
| Backend Example | File reading, database queries, API calls.                     |
| Backend Testing | Checks if routes and logic work correctly.                     |
| Tools           | Jest, Mocha, Supertest, Postman.                               |
| Steps           | Arrange → Act → Assert.                                        |

---
