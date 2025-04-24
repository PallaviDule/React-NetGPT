# React Setup with Tailwind (CRA)

This guide covers how to set up a **Create React App** project with **Tailwind CSS**, while noting the key limitations and workarounds.


## Step 1: Create React App (CRA)

```bash
npx create-react-app my-project
```

- This sets up a React project with **Webpack** as the default bundler.
- By default, CRA creates a `master` branch. It’s a good practice to rename it to `main`:

```bash
git branch -m master main
git push -u origin main
```

> `-u` flag sets `main` as the upstream branch for future `git push`.


## Step 2: Adding Tailwind CSS

Tailwind CSS official guide for CRA:  
📘 [Tailwind + CRA Setup Guide](https://v3.tailwindcss.com/docs/guides/create-react-app)

### ⚠️ Important Note from Tailwind Docs:

> **Create React App does not support custom PostCSS configurations** and is incompatible with tools like `postcss-import`.

### Recommendation:         
Tailwind recommends using **Vite**, **Next.js**, **Remix**, or **Parcel** instead of CRA, as they offer:
- Better flexibility
- Full control over PostCSS config
- Improved developer experience

### What We Did for This Project

Despite the limitations, here’s how Tailwind was added manually:

1. Install Tailwind and PostCSS

    ```bash
    npm install -D tailwindcss@3 postcss
    npx tailwindcss init
    ```

    This generates:
    - `tailwind.config.js`
    - `postcss.config.js`

2. Configure Tailwind in `index.css`    
    Inside `./src/index.css`, add the Tailwind base layers:

    ```css
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```

Tips: 
- Avoid advanced PostCSS plugins unless you eject from CRA (not recommended).
