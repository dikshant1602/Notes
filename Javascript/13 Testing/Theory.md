# **JavaScript Testing Notes**

---

## **Testing Framework**

* **Definition:**
  A *testing framework* provides tools & structure to write, organize, and run tests.

* **Popular JS Frameworks:**

  * **Jasmine:** BDD style, no dependencies.
  * **Jest:** Popular for React, has mocks, spies, coverage built-in.
  * **Mocha:** Flexible, works with assertion libs like Chai.
  * **Cypress:** End-to-end (browser) tests.

---

## ** Test Coverage**

* **Definition:**
  *Test coverage* measures how much of your code is covered by automated tests.

* **Types:**

  * Line coverage (lines run)
  * Branch coverage (if/else paths tested)
  * Function coverage (functions called)

* **Tools:**

  * Istanbul (`nyc`)
  * Jest has built-in coverage: `jest --coverage`

* **Goal:**
  80%+ is a common target, but quality matters more than just numbers.

---

## ** Flaky Test**

* **Definition:**
  A *flaky test* sometimes passes, sometimes fails, without code changes.

* **Causes:**

  * Timing issues (async tests not handled)
  * Dependencies on external systems (network)
  * Order-dependent tests

* **Solution:**

  * Use mocks.
  * Ensure proper `async`/`await`.
  * Isolate tests properly.

---

## ** Mocks**

* **Definition:**
  A *mock* is a fake version of a function or module that you control.

* **Purpose:**

  * Isolate code under test.
  * Replace real dependencies (like DB calls, API calls).

* **In Jasmine:**

  * Use `spyOn()` to mock functions.

  ```js
  spyOn(Math, 'random').and.returnValue(0.5);
  ```

---

## ** `spyOn()`**

* **Definition:**
  Jasmine’s `spyOn()` lets you:

  * Track function calls.
  * Replace return values.
  * Check how many times a function was called.

* **Example:**

  ```js
  const calculator = {
    add: (a, b) => a + b,
  };

  spyOn(calculator, 'add').and.returnValue(10);

  calculator.add(2, 3); // returns 10

  expect(calculator.add).toHaveBeenCalled();
  ```

---

## ** Unit Test**

* **Definition:**
  A *unit test* tests a small, isolated piece of code (usually a single function).

* **Goal:**

  * Fast, simple.
  * Run thousands of times.

* **Example:**

  ```js
  describe('add()', () => {
    it('adds two numbers', () => {
      expect(1 + 2).toBe(3);
    });
  });
  ```

---

## ** Integration Test**

* **Definition:**
  Tests how multiple units work together.

* **Example:**

  * Test a function that calls a DB and returns data.
  * Test API endpoints with a real database.

---

## **8️⃣ Hooks in Jasmine**

| Hook         | Runs                              |
| ------------ | --------------------------------- |
| `beforeEach` | Runs **before** each `it()` block |
| `afterEach`  | Runs **after** each `it()` block  |
| `beforeAll`  | Runs **once before** all tests    |
| `afterAll`   | Runs **once after** all tests     |

**Example:**

```js
describe('Hooks Example', () => {
  beforeAll(() => {
    console.log('Run ONCE before ALL tests');
  });

  afterAll(() => {
    console.log('Run ONCE after ALL tests');
  });

  beforeEach(() => {
    console.log('Run BEFORE EACH test');
  });

  afterEach(() => {
    console.log('Run AFTER EACH test');
  });

  it('Test 1', () => {
    console.log('Running Test 1');
  });

  it('Test 2', () => {
    console.log('Running Test 2');
  });
});
```

**Output:**

```
Run ONCE before ALL tests
Run BEFORE EACH test
Running Test 1
Run AFTER EACH test
Run BEFORE EACH test
Running Test 2
Run AFTER EACH test
Run ONCE after ALL tests
```

---

## **Summary**

| Concept               | Purpose                        |
| --------------------- | ------------------------------ |
| **Testing Framework** | Write & run tests              |
| **Coverage**          | Measure what’s tested          |
| **Flaky Test**        | Unstable test to fix           |
| **Mocks & spyOn()**   | Fake dependencies, check calls |
| **Unit Test**         | Smallest unit, fast            |
| **Integration Test**  | Multiple units together        |
| **Hooks**             | Setup & cleanup work           |
