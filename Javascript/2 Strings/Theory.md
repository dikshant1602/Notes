# **JavaScript Strings **

----

## Table of Contents
1. [What Is a String?](#-what-is-a-string)
2. [Ways to Create Strings](#-ways-to-create-strings)
3. [String Operations](#-string-operations)
4. [String vs Number](#-string-vs-number)
5. [Type Coercion](#-type-coercion-automatic-conversion)
6. [Template String Features](#-template-string-features)
7. [Escape Characters](#-escape-characters)
8. [String Properties and Methods](#-string-properties-and-methods)
9. [Autoboxing](#-autoboxing)
10. [Usage in Final Project](#-usage-in-final-project)

---

## **What Is a String?**

* A **string** represents **text** in JavaScript.
* Created by surrounding text with quotes.

  * Example: `'hello'` or `"hello"`

---

## **Ways to Create Strings**

1. **Single Quotes** (preferred by default)

   * `'hello'`
2. **Double Quotes**

   * `"hello"`
   * Useful when the string contains a single quote: `"I'm learning JavaScript"`
3. **Backticks (Template Strings)**

   * `` `hello` ``
   * Allows **interpolation** and **multi-line strings**

---

## **String Operations**

* **Concatenation**:

  * Adding strings with `+`

    * `'sum' + 'text'` → `'sumtext'`
    * `'sum' + 'more' + 'text'` → `'summoretext'`
* **Interpolation** (Template Strings only):

  * Insert expressions using `${}` inside backticks:

    * `` `Items: ${1 + 1}` `` → `'Items: 2'`
    * `` `Total: $${(295 + 799) / 100}` `` → `'Total: $10.94'`

---

## **String vs Number**

* Different data types.
* Use `typeof` to check:

  * `typeof 2` → `'number'`
  * `typeof 'hello'` → `'string'`

---

## **Type Coercion (Automatic Conversion)**

* When adding a **string + number**:

  * Example: `'hello' + 3` → `'hello3'` (number is converted to a string)
* When subtracting/multiplying/dividing:

  * `'25' - 5` → `20` (string is converted to a number)
* **Best Practice**:

  * Avoid doing math with strings.
  * Use `Number('25')` to convert string to number.
  * Use `String(25)` to convert number to string.

---

## **Template String Features**

1. **Interpolation**: `${expression}` inside backticks
2. **Multi-line Strings**:

   * Allow line breaks directly:

     ```js
     `This is
     a multi-line
     string.`
     ```

---

## **Escape Characters**

* Use when including quotes inside strings:

  * `'I\'m learning'` or `"She said \"hello\""`

---

## **String Properties and Methods**

* Strings have **properties** (like objects):

  * `'hello'.length` → `5`
* Strings have **methods**:

  * `'hello'.toUpperCase()` → `'HELLO'`

---

## **Autoboxing**

* Strings are **primitive types**, but JavaScript allows them to have properties/methods via **autoboxing**.

  * JS temporarily wraps the string in a String object.

---


