# **HTML, CSS and Console.log**

---

## **Table of Contents**

1. [Introduction](#1-introduction)
2. [HTML Basics](#2-html-basics)
   2.1. Syntax Rules
   2.2. HTML Structure
   2.3. Attributes
3. [CSS Basics](#3-css-basics)
   3.1. Syntax Rules
   3.2. Where to Write CSS
4. [JavaScript Integration](#4-javascript-integration)
   4.1. Adding JavaScript
   4.2. Live Server Extension
5. [Comments](#5-comments)
6. [`console.log`](#6-consolelog)
7. [Key Takeaways](#7-key-takeaways)

---

## **Lesson: HTML, CSS, and JavaScript Review with `console.log`**

---

### **1. Introduction**

* **Objective**: Understand how to combine **HTML**, **CSS**, and **JavaScript** to build a complete website.

  * **HTML**: Provides structure and content.
  * **CSS**: Styles the visual layout.
  * **JavaScript**: Adds interactivity and logic.

---

### **2. HTML Basics**

#### **2.1. Syntax Rules**

* **Elements**: Tags that define webpage components (e.g., `<button>`, `<p>`).
* **Tag Structure**:

  * Opening tag: `<button>`
  * Content: `Click Me`
  * Closing tag: `</button>`
* **Nesting**: Tags inside other tags (e.g., `<p><button>Click</button></p>`).
* **Whitespace**: Multiple spaces and newlines collapse into one space on the page.

#### **2.2. HTML Structure**

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Page Title</title>
    <style> /* CSS goes here */ </style>
  </head>
  <body>
    <button>Click Me</button>
  </body>
</html>
```

* **Key Elements**:

  * `<!DOCTYPE html>`: Declares HTML5.
  * `<html>`: Root element.
  * `<head>`: Contains metadata, title, and internal styles.
  * `<body>`: Contains all visible page content.

#### **2.3. Attributes**

* Modify element behavior or appearance.
* **Syntax**: `name="value"` (e.g., `<button title="Tooltip">Click</button>`)
* **Class Attribute**: Used for styling via CSS (`<button class="red-button">`).

---

### **3. CSS Basics**

#### **3.1. Syntax Rules**

* **Selector**: Specifies which HTML element to style (e.g., `button`, `.class`).
* **Declaration Block**: `{ property: value; }`
* **Example**:

  ```css
  .red-button {
    background-color: red;
    color: white;
    border: none;
  }
  ```

#### **3.2. Where to Write CSS**

1. **Inline** (not recommended): Inside HTML tags.
2. **Internal**: Within `<style>` in `<head>`.
3. **External**: Linked `.css` file (recommended for larger projects).

---

### **4. JavaScript Integration**

#### **4.1. Adding JavaScript**

1. **Using `<script>` Tag**:

   ```html
   <script>
     alert("Hello!");
   </script>
   ```

   * Recommended to place it at the end of the `<body>` for better loading performance.

2. **Event Attributes in HTML**:

   ```html
   <button onclick="alert('Good job')">Click Me</button>
   ```

#### **4.2. Live Server Extension**

* **Why Use It**: Automatically reloads browser on file changes.
* **Setup**:

  1. Install **Live Server** extension in VS Code.
  2. Right-click the HTML file → `Open with Live Server`.

---

### **5. Comments**

* Used to explain code or temporarily disable it.

| Language   | Single-line        | Multi-line      |
| ---------- | ------------------ | --------------- |
| HTML       | `<!-- Comment -->` | N/A             |
| CSS        | `/* Comment */`    | `/* Comment */` |
| JavaScript | `// Comment`       | `/* Comment */` |

---

### **6. `console.log`**

* **Purpose**: Displays output in the browser’s developer console for debugging.
* **Usage**:

  ```javascript
  console.log(2 + 2);         // Output: 4
  console.log("Hello World"); // Output: Hello World
  ```
* **Access Console**: Right-click webpage → Inspect → Console tab.

---

### **7. Key Takeaways**

1. **HTML** provides structure, **CSS** adds style, and **JavaScript** adds behavior.
2. **Live Server** helps with real-time previewing of changes.
3. Use `console.log()` to debug JavaScript.
4. Comment your code for clarity and maintenance.

---

