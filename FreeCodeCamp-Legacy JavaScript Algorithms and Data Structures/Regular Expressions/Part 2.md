# Regular Expression Notes

## Table of Contents
1. [Using the Test Method](#using-the-test-method)
2. [Match Literal Strings](#match-literal-strings)
3. [Match a Literal String with Different Possibilities](#match-a-literal-string-with-different-possibilities)
4. [Ignore Case While Matching](#ignore-case-while-matching)
5. [Extract Matches](#extract-matches)
6. [Find More Than the First Match](#find-more-than-the-first-match)
7. [Match Anything with Wildcard Period](#match-anything-with-wildcard-period)
8. [Match Single Character with Multiple Possibilities](#match-single-character-with-multiple-possibilities)
9. [Match Letters of the Alphabet](#match-letters-of-the-alphabet)
10. [Match Numbers and Letters of the Alphabet](#match-numbers-and-letters-of-the-alphabet)
11. [Match Single Characters Not Specified](#match-single-characters-not-specified)
12. [Match Characters that Occur One or More Times](#match-characters-that-occur-one-or-more-times)

---

## Using the Test Method
The `test()` method of a RegExp object checks if a pattern exists in a string. It returns `true` if the pattern is found and `false` otherwise.

**Explanation**: This is the simplest way to check for a pattern's presence. It's often used for simple validation or conditional checks.

**Example**:
```javascript
const myString = "Hello, world!";
const myRegex = /world/; // Matches the literal string "world"

const result = myRegex.test(myString);
console.log(result); // Output: true

const anotherRegex = /planet/;
const anotherResult = anotherRegex.test(myString);
console.log(anotherResult); // Output: false
```

---

## Match Literal Strings
To match a literal string, you simply use the string itself within the regular expression.

**Explanation**: This is the most basic form of matching. The regex engine will look for the exact sequence of characters you provide.

**Example**:
```javascript
const quote = "Programming is fun!";
const funRegex = /fun/;

console.log(funRegex.test(quote)); // Output: true

const programmingRegex = /Programming/;
console.log(programmingRegex.test(quote)); // Output: true

const codeRegex = /code/;
console.log(codeRegex.test(quote)); // Output: false
```

---

## Match a Literal String with Different Possibilities
The "OR" operator (`|`) allows you to match one of several possible patterns.

**Explanation**: If you need to match any one of a set of alternatives, the `|` (pipe) character is used. The regex will succeed if any of the patterns separated by `|` are found.

**Example**:
```javascript
const petString = "I have a cat.";
const petRegex = /dog|cat|bird/;

console.log(petRegex.test(petString)); // Output: true (because "cat" is present)

const anotherPetString = "I have a fish.";
console.log(petRegex.test(anotherPetString)); // Output: false

const yetAnotherPetString = "I have a dog and a cat.";
console.log(petRegex.test(yetAnotherPetString)); // Output: true
```

---

## Ignore Case While Matching
The `i` flag (short for "insensitive") is used to perform a case-insensitive search.

**Explanation**: By default, regex matches are case-sensitive. The `i` flag makes the regex engine ignore the difference between uppercase and lowercase letters when matching.

**Example**:
```javascript
const myString = "FreeCodeCamp";
const fccRegex = /freecodecamp/i; // The 'i' flag makes it case-insensitive

console.log(fccRegex.test(myString)); // Output: true

const anotherString = "Hello World";
const helloRegex = /hello world/i;
console.log(helloRegex.test(anotherString)); // Output: true
```

---

## Extract Matches
The `match()` method is used to extract the actual matches found by a regular expression.

**Explanation**: Unlike `test()`, which only tells you if a match exists, `match()` gives you the matching string(s) themselves.

**Example**:
```javascript
const extractString = "The quick brown fox jumps over the lazy dog.";
const foxRegex = /fox/;

const extractedMatch = extractString.match(foxRegex);
console.log(extractedMatch); // Output: ["fox", index: 16, ...]
```

---

## Find More Than the First Match
The `g` flag (short for "global") is used to find all occurrences of a pattern in a string.

**Explanation**: When the `g` flag is used with `match()`, it returns an array of all matches found.

**Example**:
```javascript
const twinkleString = "Twinkle, twinkle, little star.";
const twinkleRegex = /twinkle/gi;

const allTwinkles = twinkleString.match(twinkleRegex);
console.log(allTwinkles); // Output: ["Twinkle", "twinkle"]
```

---

## Match Anything with Wildcard Period
The wildcard character `.` (period) matches any single character.

**Explanation**: The `.` allows you to create patterns where you don't care what a specific character is.

**Example**:
```javascript
const humString = "Humpty Dumpty sat on a wall.";
const humRegex = /Hu./;

console.log(humRegex.test(humString)); // Output: true
```

---

## Match Single Character with Multiple Possibilities
Character sets (`[]`) allow you to match any one of the characters inside the brackets.

**Example**:
```javascript
const bigString = "big, bag, bug";
const bgRegex = /b[aiu]g/g;

console.log(bigString.match(bgRegex)); // Output: ["big", "bag", "bug"]
```

---

## Match Letters of the Alphabet
Use a hyphen (`-`) inside a character set to specify a range of characters.

**Example**:
```javascript
const alphabetString = "The quick brown fox jumps over the lazy dog.";
const alphabetRegex = /[a-z]/g;

console.log(alphabetString.match(alphabetRegex));
// Output: ["h", "e", "q", "u", "i", "c", "k", ...]
```

---

## Match Numbers and Letters of the Alphabet
Combine character ranges within a single character set.

**Example**:
```javascript
const alphanumericString = "Text with numbers 123";
const alphanumericRegex = /[a-zA-Z0-9]/g;

console.log(alphanumericString.match(alphanumericRegex));
// Output: ["T", "e", "x", "t", "w", "i", "t", "h", "n", "u", "m", "b", "e", "r", "s", "1", "2", "3"]
```

---

## Match Single Characters Not Specified
Use a caret (`^`) inside a character set to create a negated character set.

**Example**:
```javascript
const poem = "Roses are red, violets are blue.";
const notVowelsRegex = /[^aeiouAEIOU_ ]/g;

console.log(poem.match(notVowelsRegex));
// Output: ["R", "s", "r", "r", "d", ",", "v", "l", "t", "s", "r", "b", "l", "e", "."]
```

---

## Match Characters that Occur One or More Times
The `+` quantifier matches the preceding character or group one or more times.

**Example**:
```javascript
const string = "Mississippi";
const sRegex = /s+/g;

console.log(string.match(sRegex)); // Output: ["ss", "ss"]
```

```

