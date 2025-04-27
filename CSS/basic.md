# 1. Understand what CSS is
- **CSS (Cascading Style Sheets)** is used to *style* your HTML.
- Without CSS, your websites would look plain and boring.
- It helps apply colors, spacing, fonts, layouts, etc.

✏️ **Tip**: *Think of HTML as the skeleton, and CSS as the clothes you dress it in.*

---

## 2. How to Create and Connect a CSS file
- Create a file: `styles.css`
- Create your main file: `index.html`
- In `index.html`, inside the `<head>`, link your CSS:

```html
<link rel="stylesheet" href="styles.css">
```

✅ This will apply the styles from `styles.css` to your HTML page.

---

## 3. Three Main Ways to Style

| Method               | Where it happens                            | Example                    |
|----------------------|---------------------------------------------|-----------------------------|
| **Inline**           | Directly inside the HTML tag                | `<h1 style="color:red;">Hello</h1>` |
| **Internal**         | Inside `<style>` tags in HTML `<head>`      | `<style> h1 { color: red; } </style>` |
| **External (Best)**  | Separate `.css` file, linked to HTML        | `styles.css` |

✅ **You should use External** most of the time — much cleaner!

---

## 4. How to Select Elements and Style Them

### 4.1 By Tag
- Styles every tag of that type.

```css
h1 {
    color: green;
    font-size: 2em;
}
```

🧐 *All `<h1>` tags turn green and bigger!*

---

### 4.2 By Class
- **Class** can be shared by many elements.
- Use a dot `.` before the class name in CSS.

```html
<div class="sectionContainer">Content</div>
```
```css
.sectionContainer {
    background: purple;
    padding: 4px 8px;
}
```

🧐 *All elements with class `sectionContainer` have a purple background!*

---

### 4.3 By ID
- **ID** is unique for one element only.
- Use a hash `#` before the ID name in CSS.

```html
<input id="userInput">
```
```css
#userInput {
    border: 1px solid lightblue;
    text-align: center;
}
```

🧐 *The input box now has a light blue border!*

---

## 5. Multiple Selectors Together
- Style multiple elements the same way by separating them with commas:

```css
.headerText, h3, #firstInput {
    color: green;
}
```

🧐 *All these different elements will have green text!*

---

## 6. How to Write Comments in CSS
- Comments are ignored by the browser.
- Helpful for notes.

```css
/* This is a comment in CSS */
h1 {
    color: blue;
}
```

🧐 *Good for explaining WHY you wrote some styles.*

---

# ⚡ Quick Remember:

| Selector  | Symbol | Example |
|-----------|--------|---------|
| Tag       | none   | `h1 {}` |
| Class     | .      | `.title {}` |
| ID        | #      | `#submitBtn {}` |

---

