# 2.4 CSS Styles (In Easy Language)

So by now, I know how to connect CSS to HTML, and a little bit about how to target things like tags (`h1`, `p`, `div`, etc.)  
Now it’s time to actually make things look good.

**Important:**

> 20% of CSS styles are used 80% of the time.

These styles mainly fall into 3 types:

- **Dimensional Styles** — Size and spacing of things
- **Design Styles** — Colors, fonts, backgrounds
- **Placement Styles** — Where things sit on the page

---

## Dimensional Styles

This is all about size and space.  
It controls how big something is, how much space it takes, and how far apart things are.

**Important Dimensional Properties:**
_(To be filled based on more details if needed)_

---

## Design Styles

This is how the element looks — colors, fonts, borders, shadows, etc.

There are two groups:

- **Typography (Text Styles)**
- **Container (Box Styles)**

### Typography (Text) Styles:
_(To be filled based on more details if needed)_

### Container (Box) Styles:
_(To be filled based on more details if needed)_

---

## Placement Styles

Placement styles decide where and how an element is placed on the page.

**Important Placement Properties:**
_(To be filled based on more details if needed)_

---

# 2.4.2 CSS Dimensional Units

When we give numbers like `width: 200;`, we also have to say what unit it’s in.

There are two types:

- **Relative Units** (Change depending on screen/parent size)
- **Absolute Units** (Fixed, don't change)

**Most Common Units:**
_(To be filled based on more details if needed)_

---

# Extra Mini Examples (to imagine easier)

## Example 1: A centered, blue, round button

```css
.button {
  width: 200px;
  height: 50px;
  background: blue;
  color: white;
  border-radius: 25px;
  text-align: center;
}
```

> A blue button with white text, curved like a pill, and text centered inside.

---

## Example 2: A card with shadow

```css
.card {
  width: 300px;
  padding: 20px;
  background: white;
  box-shadow: 5px 5px 15px rgba(0,0,0,0.3);
  border-radius: 10px;
}
```

> A white box with nice padding and a smooth shadow underneath it — looks like it’s floating.

---

## Example 3: A popup fixed on screen

```css
.popup {
  position: fixed;
  top: 30%;
  left: 30%;
  width: 400px;
  background: lightgray;
  padding: 20px;
}
```

> A small gray box that stays fixed even when you scroll, positioned 30% from top and left.

---

# Summary

- **Dimensional styles** = how big and spaced out things are.
- **Design styles** = how things look (fonts, colors, backgrounds).
- **Placement styles** = where things are placed on the page.
- **Units** = tell how big (px, %, em, vh, vw).
