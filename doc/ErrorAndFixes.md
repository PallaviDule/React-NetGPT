### Issue 1: Page reloads with /? on button click
- **Problem**:  
When clicking a `<button>` in my React component form, the app was unexpectedly reloading and redirecting to: `http://localhost:3000/?`. This was happening every time I clicked the button — even though I just wanted to trigger a function.
- **Cause**:    
Using `<button>` without specifying a type defaults to `type="submit"`, which triggers a form submission and causes a page reload.
- **Fix**:  
Set the button type explicitly to prevent reload:   
`<button type="button" onClick={handleClick}>Click Me</button>`