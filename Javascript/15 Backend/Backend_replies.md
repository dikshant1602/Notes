# Types of Data a Backend Can Reply With

When the backend sends a **response**, it can send different **content types** depending on what the client (browser, app, or other API) expects.

---

### 1. Text

**What:**
Plain text with no formatting.
**Use case:**
Basic testing, debugging, or very simple messages.

**Example:**

```http
HTTP/1.1 200 OK
Content-Type: text/plain

Server is running
```

**Node.js Example:**

```javascript
res.type('text/plain').send('Server is running');
```

---

### 2. JSON

**What:**
JavaScript Object Notation — the most common format for APIs.
**Use case:**
Exchange structured data between client and server.
Almost every modern web and mobile app uses JSON.

**Example Response:**

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "id": 1,
  "name": "Alex"
}
```

**Node.js Example:**

```javascript
res.json({ id: 1, name: 'Alex' });
```

---

### 3. HTML

**What:**
HyperText Markup Language — used for full web pages.
**Use case:**
When the server generates complete web pages instead of just data.

**Example:**

```http
HTTP/1.1 200 OK
Content-Type: text/html

<!DOCTYPE html>
<html>
<head><title>Home</title></head>
<body>
  <h1>Welcome</h1>
</body>
</html>
```

**Node.js Example:**

```javascript
res.send('<h1>Welcome</h1>');
```

Or using a template engine (like EJS, Handlebars):

```javascript
res.render('index', { title: 'Home' });
```

---

### 4. Images

**What:**
Binary image files (JPG, PNG, GIF, etc.)
**Use case:**
Serving user profile pictures, logos, product images.

**Example:**

* A request to `/images/logo.png` returns the binary data of the image.

**Node.js Example:**

```javascript
res.sendFile('/path/to/image.png');
```

---

### 5. Files (PDF, ZIP, CSV, etc.)

**What:**
The backend can send downloadable files.
**Use case:**
File downloads, reports, exports.

**Example:**

```javascript
res.download('/path/to/report.pdf');
```

---

### 6. XML (Less common now)

**What:**
Extensible Markup Language — older format for structured data.
**Use case:**
Some legacy systems and SOAP APIs still use XML.

**Example:**

```http
HTTP/1.1 200 OK
Content-Type: application/xml

<user>
  <id>1</id>
  <name>Alex</name>
</user>
```

**Node.js Example:**

```javascript
res.type('application/xml').send('<user><id>1</id><name>Alex</name></user>');
```

---

## How the Client Knows the Data Type

* The **Content-Type** header in the response tells the client how to interpret the data.

  * `text/plain` → plain text
  * `application/json` → JSON
  * `text/html` → HTML
  * `image/png` → PNG image
  * `application/pdf` → PDF file

---

## Why This Matters

* Browsers and apps need to know what to do with the response.
* JSON → parse it to use in JavaScript.
* HTML → render it as a webpage.
* Image → show it on the page.
* File → offer a download.

---

## Summary

| Data Type  | Content-Type       | Example                      |
| ---------- | ------------------ | ---------------------------- |
| Plain Text | `text/plain`       | `res.send('Hello')`          |
| JSON       | `application/json` | `res.json({ name: 'Alex' })` |
| HTML       | `text/html`        | `res.send('<h1>Hi</h1>')`    |
| Image      | `image/png`        | `res.sendFile('/logo.png')`  |
| File       | `application/pdf`  | `res.download('/file.pdf')`  |
| XML        | `application/xml`  | `res.send('<data></data>')`  |

---
