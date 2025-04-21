## Firebase Deployment & Authentication

This project is hosted on [Firebase](https://firebase.google.com/) and uses **Email/Password Authentication**.

### Firebase Setup

<details>
<summary><strong>1. Firebase Project Setup</strong></summary>

1. Go to [Firebase Console](https://console.firebase.google.com/) and create a new project.
2. Register your web app within the project.
3. Copy the Firebase config object into your project. You’ll usually place this in a `firebase.js` file in your `src/utils` folder.
4. Install Firebase:
   ```bash
   npm install firebase
   ```
5. Initialize Firebase inside `firebase.js`:
   ```js
   import { initializeApp } from "firebase/app";
   import { getAuth } from "firebase/auth";

   const firebaseConfig = {
     apiKey: "YOUR_API_KEY",
     authDomain: "YOUR_AUTH_DOMAIN",
     projectId: "YOUR_PROJECT_ID",
     storageBucket: "YOUR_STORAGE_BUCKET",
     messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
     appId: "YOUR_APP_ID",
   };

   const app = initializeApp(firebaseConfig);
   export const getFirebaseAuth = getAuth(app);
   ```

</details>

<details>
<summary><strong>2. Enable Authentication</strong></summary>

1. In your Firebase console, go to `Build > Authentication > Get Started`.
2. Under **Sign-in method**, enable **Email/Password**.
3. You can refer to [Email/Password Auth - Web Docs](https://firebase.google.com/docs/auth/web/password-auth?authuser=0&hl=en).

</details>

<details>
<summary><strong>3. Hosting Setup</strong></summary>

In your terminal, run the following:

```bash
firebase login
firebase init
```

During the setup:

- Select **Hosting: Configure files for Firebase Hosting...**
- Choose **Use an existing project** and select your Firebase project.
- Set `build` as the public directory.
- When asked `Configure as a single-page app?` → Choose **No**
- Set up GitHub deploys? → Choose **No**

This will generate `firebase.json`, `.firebaserc`, etc.

To deploy your app:

```bash
npm run build
firebase deploy
```

Your app will be hosted, and you'll get a live Firebase URL!

</details>

---

### Authentication Usage

<details>
<summary><strong>Creating a New User</strong></summary>

Firebase provides an API to [Create a password-based account:](https://firebase.google.com/docs/auth/web/password-auth?authuser=0&hl=en#create_a_password-based_account)

```js
import { createUserWithEmailAndPassword } from "firebase/auth";

createUserWithEmailAndPassword(getFirebaseAuth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('User signed up:', user);
  })
  .catch((error) => {
    console.error(error.message);
  });
```

</details>

<details>
<summary><strong>Signing In</strong></summary>

Firebase provides an API to [Sign in a user with an email address and password](https://firebase.google.com/docs/auth/web/password-auth?authuser=0&hl=en#create_a_password-based_account)
```js
import { signInWithEmailAndPassword } from "firebase/auth";

signInWithEmailAndPassword(getFirebaseAuth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log('User signed in:', user);
  })
  .catch((error) => {
    console.error(error.message);
  });
```

</details>

<details>
<summary><strong>Manage Authenticated Users</strong></summary>

1. To get the current user:     
  You can also get the currently signed-in user by using the currentUser property. If a user isn't signed in, currentUser is null:  
    ```js
    const user = getFirebaseAuth.currentUser;
    ```

2. To update user profile (e.g., set display name): [Update a user's profile](https://firebase.google.com/docs/auth/web/manage-users?hl=en&authuser=0#update_a_users_profile)
   ```js
   import { updateProfile } from "firebase/auth";

   updateProfile(getFirebaseAuth.currentUser, {
     displayName: "Your Name"
   });
   ```

3. Track user auth status using onAuthStateChanged: 
    - This runs whenever the user's sign-in state changes (sign in/sign out). Firebase provides api to [Get the currently signed-in user](https://firebase.google.com/docs/auth/web/manage-users?hl=en&authuser=0#get_the_currently_signed-in_user)      
    - onAuthStateChanged returns an unsubscribe function. This function can be called to detach the listener when your component unmounts or you no longer need it — super useful to avoid memory leaks in React apps, prevents duplicate listeners, Keeps your app performance clean and reactive.       
    ```js
    import { useEffect } from "react";
    import { onAuthStateChanged } from "firebase/auth";
    import { getFirebaseAuth } from "../utils/firebase"; // Your firebase setup file

    useEffect(() => {
      const unsubscribe = onAuthStateChanged(getFirebaseAuth, (user) => {
        if (user) {
          console.log("User logged in:", user);
        } else {
          console.log("User logged out");
        }
      });

      // 👇 Clean up the listener when the component unmounts
      return () => unsubscribe();
    }, []);
    ```
    - What unsubscribe does: It sets isUnsubscribed flag true internally, so Firebase knows not to trigger the callback anymore.
      ```js
      () => {
          isUnsubscribed = true;
          unsubscribe();
        }
    ```
More: [Firebase Manage Users](https://firebase.google.com/docs/auth/web/manage-users)

</details>


<details>
<summary><strong>Sign Out</strong></summary>

Docs: [Sign Out](https://firebase.google.com/docs/auth/web/password-auth?hl=en&authuser=0#next_steps)

```js
import { signOut } from "firebase/auth";

signOut(getFirebaseAuth)
  .then(() => {
    console.log('Signed out');
  })
  .catch((error) => {
    console.error(error.message);
  });
```
</details>

---

### 🛠️ Troubleshooting 
1. If you're getting CORS errors in the browser while testing locally:
    - Try disabling any **CORS extension** temporarily.
    - Make sure your Firebase project and auth settings are properly configured.

</details>


### 🔗 Helpful Links

- 🔐 [Firebase Auth Docs](https://firebase.google.com/docs/auth)
- 📘 [Email/Password Auth](https://firebase.google.com/docs/auth/web/password-auth?authuser=0&hl=en)
- 📘 [Manage Users](https://firebase.google.com/docs/auth/web/manage-users?hl=en&authuser=0)
- 📘 [Auth API Reference](https://firebase.google.com/docs/reference/js/auth?hl=en&authuser=0)
