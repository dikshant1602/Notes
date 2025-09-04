#  `async` and `await`

---

## What is `async`?

* The `async` keyword is used before a **function declaration**.
* It makes the function **always return a Promise** — even if you return a plain value.

```javascript
async function myFunction() {
  return 5; // This is wrapped in a Promise automatically
}

myFunction().then(result => console.log(result)); // 5
```

---

## What is `await`?

* You can use `await` **inside an async function**.
* `await` pauses the function **until the Promise resolves**, then returns the resolved value.
* It makes **asynchronous code look synchronous**, so it’s easier to read.

---

### Why Use `async/await`?

* Avoids **callback hell**.
* Cleaner than `.then()` chains.
* Easier to read, write, and debug.

---

### Basic Example with a Promise

```javascript
function wait(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Finished waiting');
    }, ms);
  });
}

async function run() {
  console.log('Start');
  const result = await wait(2000);
  console.log(result); // 'Finished waiting' after 2 sec
  console.log('Done');
}

run();
```

**Output:**

```
Start
(wait 2 seconds)
Finished waiting
Done
```

---

### Using `async/await` with `fetch`

```javascript
async function getUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  const data = await response.json();
  console.log(data);
}

getUser();
```

---

### Error Handling with `async/await`

Use `try...catch` blocks to handle errors:

```javascript
async function getUser() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Something went wrong:', error);
  }
}

getUser();
```

---

### Example in an Express Backend Route

**Without `async/await`:**

```javascript
app.get('/users/:id', (req, res) => {
  getUserFromDB(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(500).send('Server Error'));
});
```

**With `async/await`:**

```javascript
app.get('/users/:id', async (req, res) => {
  try {
    const user = await getUserFromDB(req.params.id);
    res.json(user);
  } catch (err) {
    res.status(500).send('Server Error');
  }
});
```

---

### Rules of `async/await`

1. `await` can **only** be used inside an `async` function.
2. `async` functions **always return a Promise**.
3. You can `await` any function that returns a Promise.
4. Use `try...catch` to handle errors.

---

### Summary

|         | What it does                                         | Example                          |
| ------- | ---------------------------------------------------- | -------------------------------- |
| `async` | Declares a function that always returns a Promise    | `async function fetchData() {}`  |
| `await` | Waits for a Promise to resolve and returns its value | `const data = await fetchData()` |

---

## Final Example

```javascript
function fetchData() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('Data loaded');
    }, 1000);
  });
}

async function main() {
  console.log('Loading...');
  const data = await fetchData();
  console.log(data); // 'Data loaded'
}

main();
```

-