# JavaScript Basic Data Structures - Complete Guide  

## Table of Contents  

### Arrays  
1. [Use an Array to Store a Collection of Data](#1-use-an-array-to-store-a-collection-of-data)  
2. [Access an Array's Contents Using Bracket Notation](#2-access-an-arrays-contents-using-bracket-notation)  
3. [Add Items to an Array with push() and unshift()](#3-add-items-to-an-array-with-push-and-unshift)  
4. [Remove Items from an Array with pop() and shift()](#4-remove-items-from-an-array-with-pop-and-shift)  
5. [Remove Items Using splice()](#5-remove-items-using-splice)  
6. [Add Items Using splice()](#6-add-items-using-splice)  
7. [Copy Array Items Using slice()](#7-copy-array-items-using-slice)  
8. [Copy an Array with the Spread Operator](#8-copy-an-array-with-the-spread-operator)  
9. [Combine Arrays with the Spread Operator](#9-combine-arrays-with-the-spread-operator)  
10. [Check For The Presence of an Element With indexOf()](#10-check-for-the-presence-of-an-element-with-indexof)  
11. [Iterate Through All an Array's Items Using For Loops](#11-iterate-through-all-an-arrays-items-using-for-loops)  
12. [Create complex multi-dimensional arrays](#12-create-complex-multi-dimensional-arrays)  

### Objects  
13. [Add Key-Value Pairs to JavaScript Objects](#13-add-key-value-pairs-to-javascript-objects)  
14. [Modify an Object Nested Within an Object](#14-modify-an-object-nested-within-an-object)  
15. [Access Property Names with Bracket Notation](#15-access-property-names-with-bracket-notation)  
16. [Use the delete Keyword to Remove Object Properties](#16-use-the-delete-keyword-to-remove-object-properties)  
17. [Check if an Object has a Property](#17-check-if-an-object-has-a-property)  
18. [Iterate Through the Keys of an Object with a for...in Statement](#18-iterate-through-the-keys-of-an-object-with-a-forin-statement)  
19. [Generate an Array of All Object Keys with Object.keys()](#19-generate-an-array-of-all-object-keys-with-objectkeys)  
20. [Modify an Array Stored in an Object](#20-modify-an-array-stored-in-an-object)  

---

## Arrays  

### 1. Use an Array to Store a Collection of Data  

An array is an ordered list of values. It can store numbers, strings, objects, or even other arrays.  

```javascript
let fruits = ["apple", "banana", "orange"];  
console.log(fruits); // Output: ["apple", "banana", "orange"]  
```

---

### 2. Access an Array's Contents Using Bracket Notation  

Arrays use zero-based indexing. The first element is at index `0`.  

```javascript
let colors = ["red", "green", "blue"];  
console.log(colors[0]); // "red"  
console.log(colors[2]); // "blue"  
```

---

### 3. Add Items to an Array with push() and unshift()  

- `push()` adds an element to the **end** of an array.  
- `unshift()` adds an element to the **beginning**.  

```javascript
let numbers = [2, 3];  
numbers.push(4); // [2, 3, 4]  
numbers.unshift(1); // [1, 2, 3, 4]  
```

---

### 4. Remove Items from an Array with pop() and shift()  

- `pop()` removes the **last** element.  
- `shift()` removes the **first** element.  

```javascript
let animals = ["dog", "cat", "rabbit"];  
animals.pop(); // ["dog", "cat"]  
animals.shift(); // ["cat"]  
```

---

### 5. Remove Items Using splice()  

`splice(start, deleteCount)` removes elements from any position.  

```javascript
let fruits = ["apple", "banana", "cherry", "date"];  
fruits.splice(1, 2); // Removes "banana" and "cherry"  
console.log(fruits); // ["apple", "date"]  
```

---

### 6. Add Items Using splice()  

`splice(start, deleteCount, newItems)` can also insert elements.  

```javascript
let numbers = [1, 4, 5];  
numbers.splice(1, 0, 2, 3); // Inserts 2 and 3  
console.log(numbers); // [1, 2, 3, 4, 5]  
```

---

### 7. Copy Array Items Using slice()  

`slice(start, end)` copies a portion of an array.  

```javascript
let letters = ["a", "b", "c", "d"];  
let part = letters.slice(1, 3); // ["b", "c"]  
```

---

### 8. Copy an Array with the Spread Operator  

The spread operator (`...`) creates a shallow copy.  

```javascript
let original = [1, 2, 3];  
let copy = [...original]; // [1, 2, 3]  
```

---

### 9. Combine Arrays with the Spread Operator  

The spread operator merges arrays.  

```javascript
let arr1 = [1, 2];  
let arr2 = [3, 4];  
let combined = [...arr1, ...arr2]; // [1, 2, 3, 4]  
```

---

### 10. Check For The Presence of an Element With indexOf()  

`indexOf(item)` returns the index or `-1` if not found.  

```javascript
let items = ["pen", "pencil", "eraser"];  
console.log(items.indexOf("pencil")); // 1  
console.log(items.indexOf("ruler")); // -1  
```

---

### 11. Iterate Through All an Array's Items Using For Loops  

A `for` loop processes each element.  

```javascript
let nums = [10, 20, 30];  
for (let i = 0; i < nums.length; i++) {  
  console.log(nums[i]);  
}  
```

---

### 12. Create complex multi-dimensional arrays  

Arrays can contain other arrays (nested arrays).  

```javascript
let matrix = [  
  [1, 2],  
  [3, 4],  
  [5, 6]  
];  
console.log(matrix[1][0]); // 3  
```

---

## Objects  

### 13. Add Key-Value Pairs to JavaScript Objects  

Objects store data as key-value pairs.  

```javascript
let person = { name: "Alice" };  
person.age = 25;  
console.log(person); // { name: "Alice", age: 25 }  
```

---

### 14. Modify an Object Nested Within an Object  

Objects can contain other objects.  

```javascript
let user = { profile: { username: "john" } };  
user.profile.username = "john_doe";  
console.log(user.profile.username); // "john_doe"  
```

---

### 15. Access Property Names with Bracket Notation  

Use brackets when the property name is dynamic.  

```javascript
let car = { brand: "Toyota" };  
let key = "brand";  
console.log(car[key]); // "Toyota"  
```

---

### 16. Use the delete Keyword to Remove Object Properties  

`delete` removes a property.  

```javascript
let book = { title: "1984", author: "Orwell" };  
delete book.author;  
console.log(book); // { title: "1984" }  
```

---

### 17. Check if an Object has a Property  

`hasOwnProperty()` checks if a key exists.  

```javascript
let laptop = { model: "XPS" };  
console.log(laptop.hasOwnProperty("model")); // true  
```

---

### 18. Iterate Through the Keys of an Object with a for...in Statement  

`for...in` loops through object keys.  

```javascript
let student = { name: "Amy", grade: "A" };  
for (let key in student) {  
  console.log(key + ": " + student[key]);  
}  
```

---

### 19. Generate an Array of All Object Keys with Object.keys()  

`Object.keys(obj)` returns all keys as an array.  

```javascript
let obj = { a: 1, b: 2 };  
let keys = Object.keys(obj);  
console.log(keys); // ["a", "b"]  
```

---

### 20. Modify an Array Stored in an Object  

Objects can contain arrays that can be modified.  

```javascript
let library = { books: ["Book1", "Book2"] };  
library.books.push("Book3");  
console.log(library.books); // ["Book1", "Book2", "Book3"]  
```

---
