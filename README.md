# Learning management System frontEnd 

### Setup 

1.Clone the project 

```bash
    git clone https://github.com/Ayush-Vish/lms-frontend.git
```
2. Move into the directory

```bash
    cd lms-frontend
```
3. Install dependencies

```bash
    npm i 
```

4. Run the server 
```bash
    npm run dev 
```

## Setting up TAILWIND

1. Installing

```bash
    npm install -D tailwindcss npm install -D tailwindcss postcss autoprefixer

```
2. Creating Tailwind config file and postcss config file 

```bash
    npx tailwindcss init

```

```bash
    npm tailwindcss init -p 
```

3. Make config file like this 

```
    /** @type {import('tailwindcss').Config} */
    export default {
    content: [ "./index.html",  "./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {},
    },
     plugins: [require("daisyui") , require("@tailwindcss/line-clamp")],
    }


        
```
4. Add the tailwind directives at the top of the directives file . 

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
```

## Installing all libraries and plugins 

```bash
    npm i @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js diasyui axios react-hot-toast @tailwindcss/line-clamp
```

## Configure auto-import-sort eslint 

1. Install simple Import file 
```bash
    npm i -D eslint-plugin-simple-import-sort
```

2. Add some rule in `.eslint.cjs`
```
 rules: {
    'simple-import-sort/imports' : 'error',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },

```

3. Add simple import sort plugin in `eslint.cjs` 

```
    plugins: ['react-refresh',  'simple-import-sort'],
```

4. To enable auto import sort in file save in vscode 
    - Open `setting.json` 
    - And add The following config 
    ```
         "editor.codeActionsOnSave": {
        "source.fixAll.eslint" : true
    }
    ```