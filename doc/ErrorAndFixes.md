## Issue 1: Page Reloads with `/?` on Button Click

### Problem    
Clicking a `<button>` inside a React component was unexpectedly reloading the page and redirecting to `http://localhost:3000/?`, instead of just triggering a function.

### Root Cause
In HTML, a `<button>` inside a form defaults to `type="submit"` unless explicitly specified. This causes the form to submit, triggering a page reload.

### Fix

**Option 1 — Recommended:**         
Explicitly set the button type to `"button"` to prevent form submission:

```jsx
<button type="button" onClick={handleClick}>Click Me</button>
```

**Option 2 — Alternative:**  
Use `event.preventDefault()` inside the click handler to stop the default submit behavior:

```jsx
const handleClick = (event) => {
  event.preventDefault(); // Prevents page reload
  console.log('clicked!');
};

<button onClick={handleClick}>Click Me</button>
```

> 💡 Tip: The second method is better when the button is inside a `<form>` and you want to add validation or conditional submission logic. Otherwise, go with option 1 for simplicity.
