HTML Tag Attributes
Table of Contents

Introduction to HTML Tag Attributes
What Are HTML Attributes?
How Attributes Modify Elements


How to Use Attributes
Syntax of Attributes
Example: Adding a title Attribute


HTML Attributes Categories
Global Attributes
Form Elements Attributes
Image Elements Attributes
Audio and Video Elements Attributes
Anchor (Link) Attributes
Table Attributes
Input Type Attributes
Meta Tags Attributes


Summary of Common HTML Attributes
Custom Attributes


Introduction to HTML Tag Attributes 
HTML attributes provide additional information about elements, modifying their behavior or appearance. They are like "features" or "details" that describe an element, similar to how eye color describes a person.
What Are HTML Attributes? 

Attributes are specified in the opening tag of an HTML element.
They typically use a name/value pair format: name="value".
Some attributes are boolean, where their presence alone activates them (e.g., required).

How Attributes Modify Elements 
Attributes can:

Change an element’s appearance (e.g., style for inline CSS).
Define behavior (e.g., onclick for JavaScript events).
Provide metadata (e.g., alt for accessibility).


How to Use Attributes 
Attributes are added inside the opening tag of an HTML element, providing extra information or functionality.
Syntax of Attributes 
<element attribute="value">Content</element>

Example: Adding a title Attribute 
<div title="about me">
  <p>I am James</p>
</div>

In this example, the title attribute adds a tooltip that appears when hovering over the <div>.

HTML Attributes Categories 
Global Attributes 
These attributes can be used on any HTML element.

id: Unique identifier for an element.
class: CSS class selector for styling.
style: Inline CSS styles.
title: Tooltip text on hover.
data-*: Custom data attributes (e.g., data-user-id).

Example
<div id="section-1" class="highlight" style="color: blue;" title="This is a blue section" data-user-id="123">
  This div has global attributes!
</div>

Form Elements Attributes 
Used for form elements to control data submission and user input.

action: URL where form data is sent.
method: HTTP method (GET or POST).
name: Element identifier for form data.
placeholder: Hint for expected input.
required: Makes input mandatory.
value: Default input value.

Example
<form action="/submit" method="POST">
  <input type="text" name="username" placeholder="Enter your username" required>
  <button type="submit">Submit</button>
</form>

Image Elements Attributes 
Used for <img> elements to control display and accessibility.

srcset: Images for different screen sizes (responsive design).
width/height: Image dimensions.
loading: Loading behavior (lazy or eager).
alt: Accessibility description.

Example
<img src="image.jpg" alt="A beautiful landscape" width="600" height="400" loading="lazy">

Audio and Video Elements Attributes 
Used for <audio> and <video> elements to control media playback.

controls: Adds playback controls.
autoplay: Plays media automatically.
muted: Mutes media on start.
loop: Loops media playback.
poster: Image shown before video playback.

Example
<video controls autoplay muted loop poster="thumbnail.jpg">
  <source src="movie.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>

Anchor (Link) Attributes 
Used for <a> elements to control link behavior.

target: Where to open the link (_blank, _self, _parent, _top).
rel: Relationship to linked document (nofollow, noopener).

Example
<a href="https://www.example.com" target="_blank" rel="noopener">Go to Example</a>

Table Attributes 
Used for <table> elements to control layout.

colspan: Number of columns a cell spans.
rowspan: Number of rows a cell spans.
scope: Specifies header scope (row, col, rowgroup, colgroup).

Example
<table>
  <tr>
    <th colspan="2">Header spanning two columns</th>
  </tr>
  <tr>
    <td rowspan="2">Rowspan Example</td>
    <td>Cell 2</td>
  </tr>
  <tr>
    <td>Cell 3</td>
  </tr>
</table>

Input Type Attributes 
Used for <input> elements to control input behavior.

type: Input type (e.g., text, email, number).
min/max: Range for numeric/date inputs.
pattern: Regular expression for validation.
maxlength: Maximum characters for text input.

Example
<input type="number" min="1" max="10" step="1" value="5">
<input type="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" placeholder="Enter your email">

Meta Tags Attributes 
Used for <meta> elements to provide metadata.

name: Metadata type (e.g., description, author).
content: Metadata value.

Example
<meta name="description" content="This is a webpage about HTML attributes">
<meta name="author" content="John Doe">


Summary of Common HTML Attributes 



Attribute
Description
Example



src
Specifies the source (for images)
<img src="image.jpg" />


href
Specifies the link destination
<a href="https://example.com">Click me</a>


id
Unique identifier
<div id="header"></div>


class
CSS class for styling
<p class="highlight">Text</p>


style
Inline CSS styles
<div style="color: red;">Red Text</div>


title
Tooltip text
<span title="More info">Hover here</span>


data-*
Custom data storage
<div data-user-id="123">User</div>


action
Form data destination
<form action="/submit" method="POST">


placeholder
Input field hint
<input type="text" placeholder="Enter your name">


autoplay
Auto-plays media
<video autoplay>Movie</video>


controls
Adds media controls
<audio controls>Audio</audio>


max/min
Numeric input range
<input type="number" min="1" max="10">



Custom Attributes 
Custom attributes store extra data for elements, typically prefixed with data-. They have no predefined functionality but can be accessed via JavaScript.
Example
<div data-notifications="4">You have 4 unread notifications</div>

JavaScript Access
const div = document.querySelector('div');
console.log(div.dataset.notifications); // "4"

