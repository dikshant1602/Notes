# Regular Expression Notes

## 📚 Table of Contents

1. [Match Characters that Occur Zero or More Times](#match-characters-that-occur-zero-or-more-times)
2. [Find Characters with Lazy Matching](#find-characters-with-lazy-matching)
3. [Match Beginning String Patterns](#match-beginning-string-patterns)
4. [Match Ending String Patterns](#match-ending-string-patterns)
5. [Match All Letters and Numbers](#match-all-letters-and-numbers)
6. [Match Everything But Letters and Numbers](#match-everything-but-letters-and-numbers)
7. [Match All Numbers](#match-all-numbers)
8. [Match All Non-Numbers](#match-all-non-numbers)
9. [Restrict Possible Usernames](#restrict-possible-usernames)
10. [Match Whitespace](#match-whitespace)
11. [Match Non-Whitespace Characters](#match-non-whitespace-characters)
12. [Specify Upper and Lower Number of Matches](#specify-upper-and-lower-number-of-matches)
13. [Check for All or None](#check-for-all-or-none)
14. [Positive and Negative Lookahead](#positive-and-negative-lookahead)
15. [Check For Mixed Grouping of Characters](#check-for-mixed-grouping-of-characters)
16. [Reuse Patterns Using Capture Groups](#reuse-patterns-using-capture-groups)
17. [Use Capture Groups to Search and Replace](#use-capture-groups-to-search-and-replace)
18. [Remove Whitespace from Start and End](#remove-whitespace-from-start-and-end)

---

## 1. Match Characters that Occur Zero or More Times
The `*` quantifier matches the preceding character or group zero or more times.

**Explanation**: Similar to `+`, but will also match if the character is not present at all.

**Example**:
```javascript
const gooooal = "gooooal!";
const gRegex = /go*al/; // Matches 'g' followed by zero or more 'o's, then 'al'

console.log(gRegex.test(gooooal)); // Output: true
console.log(gRegex.test("gal"));  // Output: true (zero 'o's)
```

---

## 2. Find Characters with Lazy Matching
Quantifiers are "greedy" by default. Append `?` to make them "lazy."

**Explanation**: Lazy matching tries to match the shortest possible string.

**Example**:
```javascript
const htmlString = "<h1>Hello world</h1>";
const greedyRegex = /<.*>/; 
console.log(htmlString.match(greedyRegex)); // Output: ["<h1>Hello world</h1>"]

const lazyRegex = /<.*?>/;
console.log(htmlString.match(lazyRegex)); // Output: ["<h1>"]
```

---

## 3. Match Beginning String Patterns
The caret `^` matches the beginning of a string.

**Example**:
```javascript
const sentence = "Hello world!";
const helloStart = /^Hello/;
console.log(helloStart.test(sentence)); // Output: true
```

---

## 4. Match Ending String Patterns
The dollar sign `$` matches the end of a string.

**Example**:
```javascript
const theEnding = "This is a great ending.";
const endingRegex = /ending.$/;
console.log(endingRegex.test(theEnding)); // Output: true
```

---

## 5. Match All Letters and Numbers
The shorthand `\w` matches any "word character" (`[a-zA-Z0-9_]`).

**Example**:
```javascript
const alphanumeric = "ABC123_!@#";
console.log(alphanumeric.match(/\w/g)); // Output: ["A", "B", "C", "1", "2", "3", "_"]
```

---

## 6. Match Everything But Letters and Numbers
The shorthand `\W` matches any non-word character.

**Example**:
```javascript
const specialChars = "Hello! How are you?";
console.log(specialChars.match(/\W/g)); // Output: ["!", " ", " ", "?"]
```

---

## 7. Match All Numbers
The shorthand `\d` matches any digit (0-9).

**Example**:
```javascript
const phone = "555-123-4567";
console.log(phone.match(/\d+/g)); // Output: ["555", "123", "4567"]
```

---

## 8. Match All Non-Numbers
The shorthand `\D` matches any non-digit character.

**Example**:
```javascript
const price = "$19.99";
console.log(price.match(/\D/g)); // Output: ["$", ".", "."]
```

---

## 9. Restrict Possible Usernames
Combine regex concepts for validation.

**Example**:
```javascript
function validateUsername(username) {
  return /^[a-z][a-z0-9]{2,15}$/i.test(username);
}
console.log(validateUsername("johnDoe123")); // true
console.log(validateUsername("123john"));    // false
```

---

## 10. Match Whitespace
The shorthand `\s` matches any whitespace character.

**Example**:
```javascript
const text = "Hello\nworld\t!";
console.log(text.match(/\s/g)); // Output: ["\n", "\t"]
```

---

## 11. Match Non-Whitespace Characters
The shorthand `\S` matches any non-whitespace character.

**Example**:
```javascript
const data = "A B C";
console.log(data.match(/\S/g)); // Output: ["A", "B", "C"]
```

---

## 12. Specify Upper and Lower Number of Matches
Use curly braces `{min,max}` for precise repetition control.

**Example**:
```javascript
const phoneRegex = /\d{3}-\d{3}-\d{4}/;
console.log(phoneRegex.test("123-456-7890")); // true
```

---

## 13. Check for All or None
The `?` quantifier makes the preceding element optional.

**Example**:
```javascript
const colorRegex = /favou?rite/;
console.log(colorRegex.test("favorite")); // true
console.log(colorRegex.test("favourite")); // true
```

---

## 14. Positive and Negative Lookahead
Lookaheads assert whether a pattern is (or isn't) ahead.

**Example**:
```javascript
// Password with at least one uppercase and one digit
const pwRegex = /(?=.*[A-Z])(?=.*\d).{8,}/;
console.log(pwRegex.test("GoodPass1")); // true
```

---

## 15. Check For Mixed Grouping of Characters
Parentheses `()` create capturing groups.

**Example**:
```javascript
const binaryPairRegex = /(10)+/;
console.log(binaryPairRegex.test("101010")); // true
```

---

## 16. Reuse Patterns Using Capture Groups
Backreferences (`\1`, `\2`) refer to captured groups.

**Example**:
```javascript
const repeatRegex = /(\w+)\s\1/;
console.log(repeatRegex.test("row row")); // true
```

---

## 17. Use Capture Groups to Search and Replace
Use `$1`, `$2` in replacement strings.

**Example**:
```javascript
const date = "2023-12-25";
console.log(date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1")); 
// Output: "25/12/2023"
```

---

## 18. Remove Whitespace from Start and End
Trim whitespace using regex.

**Example**:
```javascript
const messy = "   Hello World!   ";
console.log(messy.replace(/^\s+|\s+$/g, "")); 
// Output: "Hello World!"
```

---
