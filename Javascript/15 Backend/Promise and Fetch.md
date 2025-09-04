# Promises

---

## What is a Promise?

* A **Promise** is an object in JavaScript that represents an operation that is **not done yet**, but will finish in the future (asynchronously).
* It can have **three states**:

  1. **Pending** — operation still running.
  2. **Fulfilled** — operation completed successfully.
  3. **Rejected** — operation failed.

---

### Why Use Promises?

* Promises help you handle **asynchronous tasks** like:

  * Fetching data from an API
  * Reading files
  * Talking to a database
* Promises **replace callbacks** in modern JavaScript, making async code **cleaner and easier to read**.

---

### Basic Example

```javascript
const myPromise = new Promise((resolve, reject) => {
  const success = true;
  if (success) {
    resolve('Promise fulfilled!');
  } else {
    reject('Promise rejected!');
  }
});

myPromise
  .then(result => {
    console.log(result); // runs if resolved
  })
  .catch(error => {
    console.error(error); // runs if rejected
  });
```

---

### Promises with `setTimeout`

```javascript
function waitFor(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Done waiting!');
    }, ms);
  });
}

waitFor(2000).then(result => {
  console.log(result); // 'Done waiting!' after 2 seconds
});
```

---

### Using `async` and `await` with Promises

* `async` functions always return a **Promise**.
* `await` pauses inside an `async` function until the Promise is resolved.

```javascript
function getNumber() {
  return Promise.resolve(42);
}

async function showNumber() {
  const result = await getNumber();
  console.log(result); // 42
}

showNumber();
```

---

## Fetch

---

### What is `fetch`?

* `fetch` is a **built-in JavaScript function** for making **HTTP requests**.
* It returns a **Promise**.
* It’s commonly used to **call backend APIs** from the frontend.

---

### Basic Fetch Example

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json()) // parse JSON body
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

---

### Same with `async/await`

```javascript
async function getPost() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}

getPost();
```

---

### How `fetch` Works

1. `fetch` sends a **GET request** by default.
2. It returns a **Promise** that resolves to a **Response object**.
3. You often call `.json()`, `.text()`, or `.blob()` on the Response.
4. If there’s a network error, `fetch` rejects the Promise.

---

### Making POST Requests with `fetch`

```javascript
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'New Post',
    body: 'This is the post content',
    userId: 1
  })
})
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
```

---

## How Promises and Fetch Connect

* `fetch` **always returns a Promise**.
* You can chain `.then()` or use `async/await` to handle the result.
* This is the modern way to talk to **backend APIs**.

---

## Key Differences

|             | Callbacks                           | Promises                             | Fetch                          |
| ----------- | ----------------------------------- | ------------------------------------ | ------------------------------ |
| What        | Function passed to another function | Object that represents future value  | Built-in API for HTTP requests |
| Example use | `fs.readFile`                       | `Promise.resolve()`, `new Promise()` | `fetch('/api')`                |
| Chaining    | Can get messy with nested callbacks | Easier with `.then()` and `.catch()` | Uses Promises internally       |

---

## Summary

* **Promise:** A modern way to handle async work.
* **Fetch:** A modern browser API to make HTTP requests.
* Together: `fetch` makes requests **and** returns a Promise to handle the result cleanly.

---