# Escaping Literal Quotes in Strings

When you are defining a string you must start and end with a single or double quote. What happens when you need a literal quote: `"` or `'` inside of your string?

In JavaScript, you can escape a quote from considering it as an end of string quote by placing a backslash (`\`) in front of the quote.

```javascript
const sampleStr = "Alan said, \"Peter is learning JavaScript\".";
````

This signals to JavaScript that the following quote is not the end of the string, but should instead appear inside the string. So if you were to print this to the console, you would get:

```
Alan said, "Peter is learning JavaScript".
```

---

# Quoting Strings with Single Quotes

String values in JavaScript may be written with single or double quotes, as long as you start and end with the same type of quote. Unlike some other programming languages, single and double quotes work the same in JavaScript.

```javascript
const doubleQuoteStr = "This is a string"; 
const singleQuoteStr = 'This is also a string';
```

You might want to use one type of quote over the other if you want to use both in a string. For example:

```javascript
const conversation = 'Finn exclaims to Jake, "Algebraic!"';
```

However, this becomes a problem if you need to use the outermost quotes within it. For example:

```javascript
const goodStr = 'Jake asks Finn, "Hey, let\'s go on an adventure?"'; 
const badStr = 'Finn responds, "Let's go!"';
```

Here, `badStr` will throw an error. In `goodStr`, the backslash `\` is used to escape the single quote.

> **Note:** The backslash `\` should not be confused with the forward slash `/`. They do not do the same thing.

---

# Escape Sequences in Strings

Quotes are not the only characters that can be escaped inside a string. Escape sequences allow you to use characters you may not otherwise be able to use in a string.

| Code | Output          |
| ---- | --------------- |
| `\'` | single quote    |
| `\"` | double quote    |
| `\\` | backslash       |
| `\n` | newline         |
| `\t` | tab             |
| `\r` | carriage return |
| `\b` | backspace       |
| `\f` | form feed       |

Note that the backslash itself must be escaped in order to display as a backslash.

```javascript
const myStr = "FirstLine\n\t\\SecondLine\nThirdLine";
```

Console output:

```
FirstLine
    \SecondLine
ThirdLine
```

---

# Concatenating Strings with Plus Operator

In JavaScript, when the `+` operator is used with a String value, it is called the concatenation operator. You can build a new string out of other strings by concatenating them together.

```javascript
'My name is Alan,' + ' I concatenate.';
```

> **Note:** Watch out for spaces. Concatenation does not add spaces between strings.

```javascript
const ourStr = "I come first. " + "I come second.";
```

Console output:

```
I come first. I come second.
```

---

# Concatenating Strings with the Plus Equals Operator

You can also use the `+=` operator to concatenate a string onto the end of an existing string variable.

```javascript
let ourStr = "I come first. ";
ourStr += "I come second.";
```

`ourStr` now has a value of:

```
I come first. I come second.
```

---

# Constructing Strings with Variables

Sometimes you will need to build a string with variables:

```javascript
const ourName = "freeCodeCamp";
const ourStr = "Hello, our name is " + ourName + ", how are you?";
```

`ourStr` would have the value:

```
Hello, our name is freeCodeCamp, how are you?
```

---

# Appending Variables to Strings

You can also append variables to a string using the `+=` operator.

```javascript
const anAdjective = "awesome!";
let ourStr = "freeCodeCamp is ";
ourStr += anAdjective;
```

`ourStr` would have the value:

```
freeCodeCamp is awesome!
```

---

# Find the Length of a String

You can find the length of a String value by using `.length`.

```javascript
console.log("Alan Peter".length);
```

Console output:

```
10
```

The space character is also counted.

```javascript
const firstName = "Ada";
console.log(firstName.length); // 3
```

---

# Use Bracket Notation to Find the First Character in a String

Bracket notation allows you to get a character at a specific index in a string (starting at 0).

```javascript
const firstName = "Charles";
const firstLetter = firstName[0];
```

`firstLetter` would have the value:

```
C
```

---

# Understand String Immutability

String values are immutable, meaning they cannot be changed once created.

This will not work:

```javascript
let myStr = "Bob";
myStr[0] = "J"; // Error
```

To change the string, reassign a new one:

```javascript
let myStr = "Bob";
myStr = "Job";
```

# Use Bracket Notation to Find the Nth Character in a String

You can also use bracket notation to get the character at other positions within a string.

Remember that computers start counting at `0`, so the first character is actually the zeroth character.

**Example:**

```javascript
const firstName = "Ada";
const secondLetterOfFirstName = firstName[1];
````

`secondLetterOfFirstName` would have a value of the string:

```
d
```

---

# Use Bracket Notation to Find the Last Character in a String

To get the last letter of a string, subtract one from the string's length.

**Example:**

```javascript
const firstName = "Ada";
const lastLetter = firstName[firstName.length - 1];
```

`lastLetter` would have a value of the string:

```
a
```

---

# Use Bracket Notation to Find the Nth-to-Last Character in a String

You can use the same principle to retrieve the Nth-to-last character of a string.

**Example:**

```javascript
const firstName = "Augusta";
const thirdToLastLetter = firstName[firstName.length - 3];
```

`thirdToLastLetter` would have a value of the string:

```
s
```

---

# Word Blanks

You are provided sentences with some missing words, like nouns, verbs, adjectives, and adverbs. You then fill in the missing pieces with words of your choice in a way that the completed sentence makes sense.

> *Example sentence with blanks:*

```
It was really ____, and we ____ ourselves ____.
```

This sentence has three missing pieces: an **adjective**, a **verb**, and an **adverb**.

You can complete it and assign it to a variable like this:

```javascript
const sentence = "It was really " + "hot" + ", and we " + "laughed" + " ourselves " + "silly" + ".";
```
