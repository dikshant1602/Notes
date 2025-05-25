# **JavaScript Arrays and Loops – Notes**

---

## **Table of Contents**

1. **[Arrays](#1-arrays)**
   - [Definition](#definition)
   - [Example Code](#example-code)
   - [Arrays can contain any type of value](#arrays-can-contain-any-type-of-value)
   - [Check if something is an array](#check-if-something-is-an-array)
   - [Length of array](#length-of-array)

2. **[Array Methods](#2-array-methods)**
   - [`.push()`](#push)
   - [`.slice()`](#slice)

3. **[Loops](#3-loops)**
   - [Definition](#definition-from-your-comment)
   - [`while` Loop](#while-loop)
   - [`for` Loop](#for-loop)
   - [Non-standard `while` loop with random](#non-standard-while-loop-with-random)

4. **[Looping through an Array](#4-looping-through-an-array)**
   - [Steps](#steps-from-your-comment)
   - [Example Code](#example-code-1)

5. **[Accumulator Pattern](#5-accumulator-pattern)**
   - [Definition](#definition-from-your-comment-1)
   - [Sum Example](#sum-example)
   - [Double Elements Example](#double-elements-example)

6. **[Arrays are References](#6-arrays-are-references)**
   - [Example Code](#example-code-2)

7. **[Array Destructuring](#7-array-destructuring)**

8. **[`break` and `continue` in Loops](#8-break-and-continue-in-loops)**
   - [Break Example](#break-example)
   - [While with Continue Example](#while-with-continue-example)

9. **[Loops with Functions](#9-loops-with-functions)**

10. **[Full Code for Reference](#full-code-for-reference)**

---

### **1. Arrays**

**Definition:**

> Arrays
> Represents another type of value
> Represents list of another value
>
> **Syntax rules:**
>
> * Need open and close square brackets
> * Write multiple values inside the square brackets
> * \[1] represents index (represents position) of the array
> * Inside array we can put any type of value
> * Arrays is also itself a value

**Example Code:**

```js
const myArray = [10, 20, 30]; // arrays
console.log(myArray); // [10, 20, 30]
console.log(myArray[0]); // 10
myArray[0] = 99;
console.log(myArray); // [99, 20, 30]
```

**Arrays can contain any type of value:**

```js
[1, 'hello', true, { name: 'socks' }, [1, 2]];
```

**Check if something is an array:**
Array.isArray() is a method that checks if a value is an array

```js
Array.isArray(myArray); // true
console.log(Array.isArray([1, 2])); // true
```

**Length of array:**
.length is a property that returns the number of elements in an array

```js
console.log(myArray.length); // 3
```

---

### **2. Array Methods**

#### `.push()`

**Definition from your comment:**

> `.push()` is a method that adds an element to the end of an array

**Example Code:**

```js
myArray.push(1000);
console.log(myArray); // [99, 20, 30, 1000]
```

---

#### `.slice()`

**Definition from your comment:**

> `.slice()` is a method that returns a shallow copy of a portion of an array into a new array object
> It takes two arguments, the start index and the end index (exclusive)

**Example Code:**

```js
console.log(myArray.slice(1, 3)); // [20, 30]
```

---

### **3. Loops**

**Definition from your comment:**

> Loops are used to execute a block of code repeatedly until a specified condition is met.
>
> Each time a loop gets executed it's called an **iteration**
> Loop creates a **scope**

---

#### `while` Loop

**Syntax & Explanation:**

> `while` syntax rules:
>
> ```js
> while (condition) {
>   // code to be executed
> }
> ```
>
> * `variable 1 = loop variable`
> * `i <= 5 = loop condition`
> * `i = i + 1 = incrementing the value of i. Without this the loop will run infinitely (infinite loop)`
> * Shortcut for `i = i + 1` is `i++`

**Example Code:**

```js
let i = 1;
while (i <= 5) {
  console.log(i);
  i = i + 1;
}
```

---

#### `for` Loop

**Explanation:**

> * for loop is used when you know the number of iterations in advance
> * for loop is more efficient and readable than while loop

**Example Code:**

```js
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

---

#### Non-standard `while` loop with random:

```js
let randomNumber = 0; //Math.random() generates a random number between 0 and 1
while (randomNumber < 0.5) {
  randomNumber = Math.random();
  console.log(randomNumber);
}
```

---

### **4. Looping through an Array**

**Steps from your comment:**

> 1. Go through each element of the array one by one
> 2. Do something with each element

**Example Code:**

```js
const todoList = ['make dinner', //index 0
'walk the dog', //index 1
'wash dishes', 
'do laundry'];


for(let index = 0; index <= todoList.length -1; index++ ){ //last index whill be number of values -1 or array.length - 1
      const value = todoList[index]; //thats looping through an array
      //accessing the value of the array at the index
      console.log(value);
    }

// Shortcut version
for (let i = 0; i < todoList.length; i++) {
  const value = todoList[i];
  console.log(value);
}
```

---

### **5. Accumulator Pattern**

**Definition from your comment:**

> we first create a variable and store the result
> also called as accumulator variable

**Sum Example:**

```js
const nums = [1,2,3]; 
    let total = 0; // we first create a variable and store the result
    //also called as accumulator variable
for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  total += num; //update the result 
}
console.log(total); // 6
```

**Double Elements Example:**

> here accumulator value is an array
> we can use different types of value to accumulate the result

```js
const numsDoubled = [];
for (let i = 0; i < nums.length; i++) {
  const num = nums[i];
  numsDoubled.push(num * 2);
}
console.log(numsDoubled); // [2, 4, 6]
```

---

### **6. Arrays are References**

> acts as a reference, it doesn't actually contain the value
> contains copy of reference not the value
> to avoid this behaviour we use slice

**Example Code:**

```js
const array1 = [1, 2, 3];
//const array2 = array1; (array2 conatins copy of refernce not the value [1,2,3,4])
const array2 = array1.slice(); // creates a copy
array2.push(4);
console.log(array1); // [1, 2, 3]
console.log(array2); // [1, 2, 3, 4]
```

---

### **7. Array Destructuring**

> easier way to get values out of array (destructuring)

```js
const [firstValue, secondValue] = [1, 2, 3];
```

---

### **8. `break` and `continue` in Loops**

**Break Example:**

> break exits a loop early
> continue skips one iteration

```js
for (let i = 1; i <= 10; i++) {
  if (i % 3 === 0) {
    continue;
  }
  console.log(i);
  if (i === 8) {
    break;
  }
}
```

**While with Continue Example:**

> in while, continue will skip the increment step and will cause infinite loop, so we need to use increment step

```js
let a = 1;
while (a <= 10) {
  if (a % 3 === 0) {
    a++;
    continue;
  }
  console.log(a);
  a++;
}
```

---

### **9. Loops with Functions**

```js
function doubleArray(nums) {
  const numsDoubled = [];

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (num === 0) {
      return numsDoubled;
    }
    numsDoubled.push(num * 2);
  }
  return numsDoubled;
}

console.log(doubleArray([1, 1, 3]));
console.log(doubleArray([2, 2, 5, 0, 5]));
```

---

## **Full Code for Reference:**

\[Click to Expand/Collapse]

<details>
<summary><strong>Show Full Code</strong></summary>

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Arrays and Loops</title>
</head>
<body>
  <script>
    const myArray = [10, 20, 30]; // arrays
    console.log(myArray); // [10, 20, 30]
    console.log(myArray[0]); // 10
    myArray[0] = 99;
    console.log(myArray); // [99, 20, 30]

    [1, 'hello', true, { name: 'socks' }, [1, 2]];

    console.log(typeof [1, 2]);
    Array.isArray(myArray); // true
    console.log(Array.isArray([1, 2])); // true

    console.log(myArray.length); // 3
    myArray.push(1000);
    console.log(myArray); // [99, 20, 30, 1000]
    console.log(myArray.slice(1, 3)); // [20, 30]

    let i = 1;
    while (i <= 5) {
      console.log(i);
      i = i + 1;
    }

    for (let i = 1; i <= 5; i++) {
      console.log(i);
    }

    let randomNumber = 0;
    while (randomNumber < 0.5) {
      randomNumber = Math.random();
      console.log(randomNumber);
    }

    const todoList = ['make dinner', 'walk the dog', 'wash dishes', 'do laundry'];
    for (let index = 0; index <= todoList.length - 1; index++) {
      const value = todoList[index];
      console.log(value);
    }

    for (let i = 0; i < todoList.length; i++) {
      const value = todoList[i];
      console.log(value);
    }

    const nums = [1, 2, 3];
    let total = 0;
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      total += num;
    }
    console.log(total);

    const numsDoubled = [];
    for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
      numsDoubled.push(num * 2);
    }
    console.log(numsDoubled);

    const array1 = [1, 2, 3];
    const array2 = array1.slice();
    array2.push(4);
    console.log(array1);
    console.log(array2);

    const array3 = [1, 2, 3];
    const [firstValue, secondValue] = [1, 2, 3];

    for (let i = 1; i <= 10; i++) {
      if (i % 3 === 0) {
        continue;
      }
      console.log(i);
      if (i === 8) {
        break;
      }
    }

    let a = 1;
    while (a <= 10) {
      if (a % 3 === 0) {
        a++;
        continue;
      }
      console.log(a);
      a++;
    }

    function doubleArray(nums) {
      const numsDoubled = [];

      for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (num === 0) {
          return numsDoubled;
        }
        numsDoubled.push(num * 2);
      }
      return numsDoubled;
    }

    console.log(doubleArray([1, 1, 3]));
    console.log(doubleArray([2, 2, 5, 0, 5]));
  </script>
</body>
</html>
```

</details>

---
