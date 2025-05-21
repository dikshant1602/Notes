# JavaScript Practice Tasks – Easy Explanation

## 📋 Table of Contents

1. [Convert Celsius to Fahrenheit](#1-convert-celsius-to-fahrenheit)
2. [Reverse a String](#2-reverse-a-string)
3. [Factorialize a Number](#3-factorialize-a-number)
4. [Find the Longest Word in a String](#4-find-the-longest-word-in-a-string)
5. [Return Largest Numbers in Arrays](#5-return-largest-numbers-in-arrays)
6. [Confirm the Ending](#6-confirm-the-ending)
7. [Repeat a String Repeat a String](#7-repeat-a-string-repeat-a-string)
8. [Truncate a String](#8-truncate-a-string)
9. [Finders Keepers](#9-finders-keepers)
10. [Boo who](#10-boo-who)
11. [Title Case a Sentence](#11-title-case-a-sentence)
12. [Slice and Splice](#12-slice-and-splice)
13. [Falsy Bouncer](#13-falsy-bouncer)
14. [Where do I Belong](#14-where-do-i-belong)
15. [Mutations](#15-mutations)

---

## 1. Convert Celsius to Fahrenheit
- Take the Celsius value, multiply it by 9/5, then add 32.

```javascript
function convertCtoF(celsius) {
  return celsius * 9/5 + 32;
}
```

> "If it's 30°C, this tells me it's 86°F."

---

## 2. Reverse a String
- Split into letters → Reverse them → Join them back.

```javascript
function reverseString(str) {
  return str.split('').reverse().join('');
}
```

> "If I give it 'hello', it gives me 'olleh'."

---

## 3. Factorialize a Number
- Multiplies all numbers from 1 to n. Example: 5! = 5 × 4 × 3 × 2 × 1 = 120

```javascript
function factorialize(num) {
  if (num === 0 || num === 1) return 1;
  return num * factorialize(num - 1);
}
```

> "It keeps multiplying the number with the one below it until it reaches 1."

---

## 4. Find the Longest Word in a String

```javascript
function findLongestWordLength(str) {
  return str
    .split(' ')
    .reduce((max, word) => Math.max(max, word.length), 0);
}
```

> "I split the sentence into words and look for the one with the most letters."

---

## 5. Return Largest Numbers in Arrays

```javascript
function largestOfFour(arr) {
  return arr.map(subArr => Math.max(...subArr));
}
```

> "In each group of numbers, I grab the highest one."

---

## 6. Confirm the Ending

```javascript
function confirmEnding(str, target) {
  return str.endsWith(target);
}
```

> "I just ask — does this string end the way I expect?"

---

## 7. Repeat a String Repeat a String

```javascript
function repeatStringNumTimes(str, num) {
  return num > 0 ? str.repeat(num) : '';
}
```

> "If I say 'abc' and 3, I get 'abcabcabc'."

---

## 8. Truncate a String

```javascript
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}
```

> "Like Twitter — if it’s too long, I show part of it plus '...'."

---

## 9. Finders Keepers
- Finds the first item that matches a condition.

```javascript
function findElement(arr, func) {
  return arr.find(func);
}
```

> "Go through the array. As soon as something passes the test, return it."

---

## 10. Boo who
- Checks if something is a true or false value (only boolean type).

```javascript
function booWho(bool) {
  return typeof bool === "boolean";
}
```

> "It just asks: Is this a real true/false value or something else?"

---

## 11. Title Case a Sentence
- Makes every word start with a capital letter.

```javascript
function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
}
```

> "Turn everything lowercase, then capitalize the first letter of each word."

---

## 12. Slice and Splice
- Inserts one array into another at a given position without changing the original.

```javascript
function frankenSplice(arr1, arr2, n) {
  let copy = arr2.slice();
  copy.splice(n, 0, ...arr1);
  return copy;
}
```

> "Take `arr1` and stick it into `arr2` at position `n`, like copy-pasting."

---

## 13. Falsy Bouncer
- Removes all the "bad" values like false, 0, "", null, undefined, NaN.

```javascript
function bouncer(arr) {
  return arr.filter(Boolean);
}
```

> "Filter out everything that’s empty or false-like."

---

## 14. Where do I Belong
- Finds where a number should be placed in a sorted array.

```javascript
function getIndexToIns(arr, num) {
  return arr.filter(val => val < num).length;
}
```

> "Count how many numbers are smaller — that's where my number should go."

---

## 15. Mutations
- Checks if all the letters in the second word exist in the first.

```javascript
function mutation(arr) {
  let [first, second] = arr.map(s => s.toLowerCase());
  return [...second].every(char => first.includes(char));
}
```

> "Break the second word into letters, and make sure each letter is in the first word."

---

