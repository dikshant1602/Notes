# HTML Tag Attributes

## Table of Contents
1. [Introduction](#introduction)
2. [How to Use Attributes](#how-to-use-attributes)
3. [Attribute Categories](#attribute-categories)
   - [3.1 Global Attributes](#31-global-attributes)
   - [3.2 Form Attributes](#32-form-attributes)
   - [3.3 Image Attributes](#33-image-attributes)
   - [3.4 Media Attributes](#34-media-attributes)
   - [3.5 Link Attributes](#35-link-attributes)
   - [3.6 Table Attributes](#36-table-attributes)
   - [3.7 Input Attributes](#37-input-attributes)
   - [3.8 Meta Attributes](#38-meta-attributes)
4. [Attribute Reference Table](#attribute-reference-table)
5. [Custom Attributes](#custom-attributes)

---

## Introduction <a name="introduction"></a>
HTML attributes provide additional information about elements. They modify default behaviors or provide extra functionality.

**Key Concepts:**
- Always specified in the opening tag
- Usually come in name/value pairs: `name="value"`
- Some are boolean (presence alone activates them)

---

## How to Use Attributes <a name="how-to-use-attributes"></a>
```html
<tagname attribute="value">Content</tagname>
```

**Example:**
```html
<img src="photo.jpg" alt="Vacation photo" width="500">
```

**Common Patterns:**
- Space-separated multiple values: `class="box large"`
- Boolean attributes: `<input required>`
- Custom data attributes: `data-user-id="42"`

---

## Attribute Categories <a name="attribute-categories"></a>

### 3.1 Global Attributes <a name="31-global-attributes"></a>
| Attribute | Description | Example |
|-----------|-------------|---------|
| `id` | Unique identifier | `<div id="header">` |
| `class` | CSS class selector | `<p class="alert">` |
| `style` | Inline CSS | `<span style="color:red">` |
| `title` | Tooltip text | `<abbr title="HyperText Markup Language">HTML</abbr>` |

### 3.2 Form Attributes <a name="32-form-attributes"></a>
```html
<form action="/submit" method="post">
  <input type="email" name="user_email" required placeholder="Enter email">
  <button type="submit">Send</button>
</form>
```

### 3.3 Image Attributes <a name="33-image-attributes"></a>
```html
<img src="logo.png" 
     alt="Company Logo"
     width="200"
     height="100"
     loading="lazy">
```

### 3.4 Media Attributes <a name="34-media-attributes"></a>
```html
<video controls width="600" poster="preview.jpg">
  <source src="movie.mp4" type="video/mp4">
</video>
```

### 3.5 Link Attributes <a name="35-link-attributes"></a>
```html
<a href="https://example.com" 
   target="_blank"
   rel="noopener noreferrer">
  External Link
</a>
```

### 3.6 Table Attributes <a name="36-table-attributes"></a>
```html
<table>
  <tr>
    <th colspan="2">Combined Header</th>
  </tr>
  <tr>
    <td rowspan="2">Merged Cell</td>
    <td>Data</td>
  </tr>
</table>
```

### 3.7 Input Attributes <a name="37-input-attributes"></a>
```html
<input type="number" min="1" max="10" step="1">
<input type="text" pattern="[A-Za-z]{3}">
```

### 3.8 Meta Attributes <a name="38-meta-attributes"></a>
```html
<meta name="description" content="Page about HTML attributes">
<meta charset="UTF-8">
```

---

## Attribute Reference Table <a name="attribute-reference-table"></a>
| Category | Key Attributes |
|----------|----------------|
| Global | `id`, `class`, `style`, `title`, `data-*` |
| Forms | `action`, `method`, `name`, `required` |
| Media | `controls`, `autoplay`, `loop`, `preload` |
| Accessibility | `alt`, `aria-*`, `role` |

---

## Custom Attributes <a name="custom-attributes"></a>
**Standard Custom Attributes:**
```html
<div data-user-id="123" data-role="admin"></div>
```

**JavaScript Access:**
```javascript
const userDiv = document.querySelector('div');
console.log(userDiv.dataset.userId); // "123"
```

**Best Practices:**
- Always prefix with `data-`
- Use lowercase, hyphenated names
- Store simple data values
```

### Key Features:
1. **Full Markdown Compatibility**: Renders perfectly on GitHub, VS Code, and other Markdown viewers
2. **Anchor Links**: All sections are linkable
3. **Code Formatting**: Proper syntax highlighting for HTML examples
4. **Reference Tables**: Quick lookup for common attributes
5. **Mobile-Friendly**: Clean structure that works on all devices

