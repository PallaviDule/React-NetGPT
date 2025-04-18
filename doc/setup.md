1.  Using Create-React-app  
    `npx create-react-app my-project`
    - It generates react project with webpack bundler.
    - It generates master branch as default. Let's make it main.    
        ```
        git branch -m master main
        git push -u origin main // The -u flag sets main as the default upstream branch for future pushes.
        ```
2. [tailwindcss guide doc with create-react-app](https://v3.tailwindcss.com/docs/guides/create-react-app)
    - Create React App does not support custom PostCSS configurations and is incompatible with many important tools in the PostCSS ecosystem, like `postcss-import`.
    - Tailwind doc highly recommend using Vite, Parcel, Next.js, or Remix instead of Create React App. They provide an equivalent or better developer experience but with more flexibility, giving you more control over how Tailwind and PostCSS are configured.
    - What we did then for this project     
    ```bash
    npm install -D tailwindcss@3 postcss 
    npx tailwindcss init  // this command should generate tailwind.config.js and postcss.config.js
    ```
    - Add in ./index.css
    ```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
    ```