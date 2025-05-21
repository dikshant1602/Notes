# JavaScript Basics 4

## Table of Contents
1. [Comparison Operators](#comparison-operators)
   - [Equality vs Strict Equality](#equality-vs-strict-equality)
   - [Inequality vs Strict Inequality](#inequality-vs-strict-inequality)
   - [Numerical Comparisons](#numerical-comparisons)
2. [Logical Operators](#logical-operators)
3. [Conditional Statements](#conditional-statements)
   - [If/Else](#ifelse-statements)
   - [Switch](#switch-statements)
4. [Boolean Returns](#boolean-returns)
5. [Early Returns](#early-returns)

---

## Comparison Operators

### Equality vs Strict Equality
| Operator | Description | Example |
|----------|-------------|---------|
| `==` | Loose equality (type coercion) | `5 == '5'` → `true` |
| `===` | Strict equality (type + value) | `5 === '5'` → `false` |

### Inequality vs Strict Inequality
| Operator | Description | Example |
|----------|-------------|---------|
| `!=` | Loose inequality | `5 != '6'` → `true` |
| `!==` | Strict inequality | `5 !== '5'` → `true` |

### Numerical Comparisons
```javascript
10 > 5    // true (greater than)
7 >= 7    // true (greater than or equal)
3 < 2     // false (less than)
4 <= 4    // true (less than or equal)
```

---

## Logical Operators

| Operator | Description | Example |
|----------|-------------|---------|
| `&&` | AND (both true) | `age > 18 && age < 65` |
| `||` | OR (either true) | `score > 90 || bonus == true` |
| `!` | NOT (inverts) | `!isAdmin` |

**Example:**
```javascript
if (temperature > 30 || temperature < 0) {
  console.log("Extreme weather warning");
}
```

---

## Conditional Statements

### If/Else Statements
```javascript
let hour = 14;

if (hour < 12) {
  console.log("Morning");
} else if (hour < 18) {
  console.log("Afternoon");
} else {
  console.log("Evening");
}
// Output: "Afternoon"
```

**Key Points:**
- Conditions are checked top-to-bottom
- First true condition executes, others skip
- `else` catches all remaining cases

### Switch Statements
```javascript
let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of week");
    break;
  case "Tuesday":
  case "Wednesday":
    console.log("Midweek");
    break;
  default:
    console.log("Weekend soon");
}
// Output: "Midweek"
```

**Best Practices:**
- Use `break` to prevent fall-through
- Group similar cases together
- Include a `default` case

---

## Boolean Returns

Simplify boolean returns by directly returning comparisons:

```javascript
// Instead of:
function isAdult(age) {
  if (age >= 18) {
    return true;
  } else {
    return false;
  }
}

// Do this:
function isAdult(age) {
  return age >= 18;
}
```

---

## Early Returns

Exit functions early when possible for cleaner code:

```javascript
function login(user) {
  if (!user.valid) return false;
  if (user.banned) return false;
  
  // Main logic here
  return true;
}
```

**Benefits:**
- Reduces nested conditions
- Makes code more readable
- Handles edge cases first

---
