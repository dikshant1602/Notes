## Intro to Backend 

---

### 1. What is the Backend?

* The **backend** is the server-side part of a web application.
* It handles **requests** from the frontend (like your browser or mobile app).
* It contains **logic**, **databases**, **authentication**, and **APIs**.
* It responds with **data**, often in JSON format.

**Example:**

* When you open Instagram, your browser makes a request to Instagram’s backend server.
* The server finds your photos in its database and sends them back.

---

### 2. How Does a Computer Send Info to the Backend?

* The browser (client) uses the **HTTP protocol** to send a **request**.
* The request travels through the internet to reach the server.
* The server processes the request:

  * Reads the URL path and HTTP method.
  * Runs code to get or change data.
  * Sends back a **response** to the browser.

**Example:**

```plaintext
Browser → HTTP request → Server → Processes request → HTTP response → Browser
```

* If you open `https://example.com/profile`:

  * The **browser** sends a `GET` request for `/profile`.
  * The **server** receives it, fetches your profile from a database, and sends it back.

---

### 3. What is HTTP?

* **HTTP (Hypertext Transfer Protocol)** is the standard protocol for transferring data over the web.
* It defines how clients and servers exchange text, JSON, images, etc.
* Requests and responses follow a **structured format**: headers, methods, body, and status codes.

---

### 4. HTTP Methods

#### GET

* **Purpose:** Retrieve data.
* **Example:** Load all blog posts.

```plaintext
GET /posts
```

* Code Example:

```javascript
// Express.js route example
app.get('/posts', (req, res) => {
  res.send('All posts');
});
```

---

#### POST

* **Purpose:** Send new data to the server.
* **Example:** Add a new blog post.

```plaintext
POST /posts
```

* Code Example:

```javascript
app.post('/posts', (req, res) => {
  // req.body contains new post data
  res.send('Post created');
});
```

---

#### PUT

* **Purpose:** Update existing data.
* **Example:** Edit an existing blog post.

```plaintext
PUT /posts/5
```

* Code Example:

```javascript
app.put('/posts/:id', (req, res) => {
  // Update post with ID req.params.id
  res.send(`Post ${req.params.id} updated`);
});
```

---

#### DELETE

* **Purpose:** Remove data.
* **Example:** Delete a blog post.

```plaintext
DELETE /posts/5
```

* Code Example:

```javascript
app.delete('/posts/:id', (req, res) => {
  // Delete post with ID req.params.id
  res.send(`Post ${req.params.id} deleted`);
});
```

---

### 5. Request and Response

#### Request

* Sent by the client.
* Includes:

  * **Method** (GET, POST, PUT, DELETE)
  * **URL** (path)
  * **Headers** (info about the request)
  * **Body** (data sent, only for POST and PUT)

**Example Request:**

```
POST /users
Content-Type: application/json

{
  "name": "Alex",
  "email": "alex@example.com"
}
```

---

#### Response

* Sent by the server back to the client.
* Includes:

  * **Status code** (200, 404, etc.)
  * **Headers** (info about the response)
  * **Body** (HTML, JSON, file, etc.)

**Example Response:**

```
Status: 201 Created
Content-Type: application/json

{
  "id": 101,
  "name": "Alex"
}
```

---

### 6. URL Path

* The **path** in the URL tells the server what resource you want.
* Together with the HTTP method, it decides which backend function runs.

**Examples:**

* `/users` → all users.
* `/users/45` → user with ID 45.
* `/products?category=shoes` → shoes category products.

In Express.js:

```javascript
app.get('/users', (req, res) => {
  res.send('All users');
});

app.get('/users/:id', (req, res) => {
  res.send(`User with ID ${req.params.id}`);
});
```

---

### 7. Status Codes

Status codes tell you if the request succeeded or failed.

**Examples:**

| Code | Meaning               | Example                         |
| ---- | --------------------- | ------------------------------- |
| 200  | OK                    | Everything worked               |
| 201  | Created               | New resource created (POST)     |
| 204  | No Content            | Successful but no data returned |
| 400  | Bad Request           | Client sent invalid data        |
| 401  | Unauthorized          | No valid login/authentication   |
| 403  | Forbidden             | Not allowed                     |
| 404  | Not Found             | Resource does not exist         |
| 500  | Internal Server Error | Something broke on the server   |

Example:

```javascript
app.get('/users/:id', (req, res) => {
  const user = getUserById(req.params.id);
  if (!user) {
    res.status(404).send('User not found');
  } else {
    res.status(200).send(user);
  }
});
```

---

### 8. Backend API

* **API**: Application Programming Interface.
* A **Backend API** provides a structured way for clients to interact with the backend using endpoints.
* The API defines:

  * **Routes/Paths** like `/api/products`
  * **Methods** (GET, POST, etc.)
  * Expected request and response formats (usually JSON)

Example API Endpoints:

* `GET /api/products` → Get all products.
* `POST /api/products` → Add a new product.
* `PUT /api/products/:id` → Update a product.
* `DELETE /api/products/:id` → Remove a product.

---

## Complete Example: Simple Express API

```javascript
const express = require('express');
const app = express();
app.use(express.json());

let products = [
  { id: 1, name: 'Shoes' },
  { id: 2, name: 'Shirt' }
];

app.get('/api/products', (req, res) => {
  res.status(200).json(products);
});

app.post('/api/products', (req, res) => {
  const newProduct = { id: products.length + 1, name: req.body.name };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.put('/api/products/:id', (req, res) => {
  const product = products.find(p => p.id == req.params.id);
  if (!product) return res.status(404).send('Not found');
  product.name = req.body.name;
  res.json(product);
});

app.delete('/api/products/:id', (req, res) => {
  products = products.filter(p => p.id != req.params.id);
  res.status(204).send();
});

app.listen(3000, () => console.log('Server running on port 3000'));
```

---

## Summary

* The **backend** runs on a server and handles requests.
* Clients communicate using **HTTP**.
* **GET, POST, PUT, DELETE** are common HTTP methods.
* Each request has a **URL path** that maps to a function.
* The server returns a **response** with a **status code**.
* A **backend API** is a set of well-defined rules (endpoints) for how clients can interact with server data.
