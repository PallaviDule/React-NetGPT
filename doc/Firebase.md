## Firebase
This project we will host on [firebase](https://firebase.google.com/)

### Steps to setup project
1. GoTo firebase -> create [firebase project](https://firebase.google.com/docs/web/setup)
2. Once you create your project, you need to register this project.
4. Also, create configuration for firebase as given in firebase setup doc.
5. In firebase console, Once you register your project- look for authentication[In Project Overview or build] -> Get Started
6. You would get multiple type of sign-in method. 
7. We are going with Email/Password method.
8. Disable CORS extension if you face CORS error.

9. Now in our terminal, 
    ```
    npm install firebase
    firebase login
    firebase init
    ```
    - Which Firebase features do you want to set up for this directory? Press Space to select features, then Enter to confirm your choices. **Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys**
    - Please select an option: **Use an existing project**
    - Select a default Firebase project for this directory: **react-netgpt (React-NetGpt)**
    - What do you want to use as your public directory? build
    -  Configure as a single-page app (rewrite all urls to /index.html)? No
    - Set up automatic builds and deploys with GitHub? No

10. After this setup, you will see few firebase files has been generated like `.firebaserc, firebase.json`
11. `firebase deploy` - this command should deploy your app and it should give you hosting url of your app. 