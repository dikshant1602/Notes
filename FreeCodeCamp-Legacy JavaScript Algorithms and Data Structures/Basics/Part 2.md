# JavaScript Basics 2

## Table of Contents
1. [Escaping Literal Quotes](#escaping-literal-quotes)
2. [Single vs Double Quotes](#single-vs-double-quotes)
3. [Escape Sequences](#escape-sequences)
4. [String Concatenation](#string-concatenation)
5. [Template Literals](#template-literals)
6. [String Length](#string-length)
7. [Accessing Characters](#accessing-characters)
8. [String Immutability](#string-immutability)
9. [Word Blanks Exercise](#word-blanks-exercise)

---

## Escaping Literal Quotes
When your string contains quotes that match the enclosing quotes, escape them with a backslash:

```javascript
const quoteStr = "He said, \"JavaScript is fun!\"";
console.log(quoteStr); // He said, "JavaScript is fun!"
```

---

## Single vs Double Quotes
JavaScript strings can use either single or double quotes:

```javascript
const dblQuoteStr = "Double quotes";
const sngQuoteStr = 'Single quotes';
```

**Best Practice**: Be consistent with your quote style throughout a project.

---

## Escape Sequences
Common escape sequences in JavaScript:

| Sequence | Output          |
|----------|----------------|
| `\'`     | Single quote    |
| `\"`     | Double quote    |
| `\\`     | Backslash       |
| `\n`     | New line        |
| `\t`     | Tab             |

**Example**:
```javascript
const multiLineStr = "First line\nSecond line\nThird line";
```

---

## String Concatenation
Combine strings using `+` or `+=`:

```javascript
// Using +
let greeting = "Hello" + " " + "World!";

// Using +=
let message = "Welcome";
message += " to JavaScript!";
```

---

## Template Literals
Modern alternative using backticks (`` ` ``):

```javascript
const name = "Alice";
const age = 25;
const bio = `My name is ${name} and I'm ${age} years old.`;
```

**Benefits**:
- Multi-line strings without `\n`
- Easy variable insertion
- More readable code

---

## String Length
Get string length with `.length`:

```javascript
const str = "Hello";
console.log(str.length); // 5
```

---

## Accessing Characters
Access characters using bracket notation:

```javascript
const language = "JavaScript";

// First character
console.log(language[0]); // "J"

// Last character
console.log(language[language.length - 1]); // "t"

// Nth character (4th in this case)
console.log(language[3]); // "a"
```

---

## String Immutability
Strings cannot be changed directly - create new strings instead:

```javascript
let str = "Hello";
str[0] = "h"; // Won't work
str = "hello"; // Correct way
```

---

## Word Blanks Exercise
Create a sentence by combining variables:

```javascript
function wordBlanks(noun, adjective, verb, adverb) {
  return `The ${adjective} ${noun} ${verb} ${adverb}.`;
}

console.log(wordBlanks("dog", "big", "ran", "quickly"));
// Output: "The big dog ran quickly."
```

---
