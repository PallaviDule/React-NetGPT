## Input Validation Regex Patterns

1. Username Validation  
    ```js
    /^(?=.*[A-Z])(?=.*[a-z])[A-Za-z]{5,12}$/
    ```
    Ensures the username is 5–12 characters long, contains **both uppercase and lowercase letters**, and allows **only alphabets**.

2. Password Validation
    ```js
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/
    ```
    Ensures the password is 8–20 characters long, includes **uppercase, lowercase, digit, and special character**, and allows letters, numbers, and common symbols.

3. Email Validation
    ```js
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    ```
    Validates that the input looks like a typical email (e.g., `user@example.com`), with no spaces and proper format.


### Regex Breakdown

Here's what some common parts in the regex mean:

- `(?=.*[A-Z])` → At least one **uppercase** letter  
- `(?=.*[a-z])` → At least one **lowercase** letter  
- `(?=.*\d)` → At least one **digit**  
- `(?=.*[@$!%*?&])` → At least one **special character**  
- `[A-Za-z\d@$!%*?&]{8,20}` → Allows only these characters, with a **length between 8 and 20**  
- `^` and `$` → Start and end anchors to ensure the **entire input** matches the pattern
- `.+$` → To ensure the entire string contains at least one character. It doesn't limit or restrict characters — just says: “there has to be something here.”