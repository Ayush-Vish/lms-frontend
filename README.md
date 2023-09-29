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
    npm install -D tailwindcss
```
2. Creating Tailwing config file 

```bash
    npx tailwindcss init

```

3. Make config file like this 

```
    /** @type {import('tailwindcss').Config} */
    export default {
    content: ["./src/**/*.{html,js , jsx , ts , tsx}"],
    theme: {
        extend: {},
    },
    plugins: [],
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