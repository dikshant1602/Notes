# Chapter 1 - Introduction to HTML (My Notes)

---

## 1.1 Creating an HTML Document

HTML stands for **HyperText Markup Language** — it’s what every webpage is built with. It tells the browser what to show, like text, images, buttons, etc.

To create an HTML page:
- Open Notepad or VS Code.
- Save the file as `index.html` — the `.html` tells the browser it's a webpage.
- This file should be located within a folder that is know as your project directory. We can have multiple HTML files within the project directory, where each file can be used as a subroute for our HTML webpage.

---

## 1.2 Initializing an HTML Document

Every HTML page starts with the same basic structure. It’s kind of like a skeleton:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Webpage</title>
</head>
<body>
  Hello world!
</body>
</html>

Here, the words wrapped inside <> acts as a tag and the basic meaning of these tags shown above are:
<!DOCTYPE html> → I’m telling the browser “Hey, this is HTML5.”
<html> → Everything goes inside here. This is the main box.
<head> → For settings like title and styles (not shown on the page).
<title> → Sets the name on the browser tab.
<body> → The part that actually shows on the website.

---

## 1.3 Code Commenting in HTML

We can create invisible notes in our HTML code that only developers in the code base can see. These will not appear on the web page.
Code comments cannot be nested (one contained within another).
To create a code comment, simply wrap your desired note or comment within the following syntax:

```html
<!-- COMMENT GOES IN HERE -->

