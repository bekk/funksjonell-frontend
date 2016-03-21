## Instructions

Today we will complete our Memory Game app. For the basic setup of the game that we did last time, jsbin was a good platform. 
However, as our code base will be growing today, having all our code in one single file becomes more of an obstacle.
Thus, we have created an npm project with the React code from last time.  

### 1. Clone and install

Ensure that you have Node.js installed, otherwise install from https://nodejs.org/.

On the command line, clone this repo:

```
git clone https://github.com/bekk/funksjonell-frontend.git
cd funksjonell-frontend/day3
```

Install the project's dependencies:

```
npm install
```

Start the app:

```
npm start
```

### 2. Open the project
Open your favorite editor, if you don't have one installed, download sublime https://www.sublimetext.com/3.
We have put the components you created last time into separate files in `src/components`. 
You can also find the card data (`src/data.js`), the css-file (`src/app.css`) and the html-file (`public/index.html`)) from jsbin inside the project.

In addition we have created an `App` component in `src/containers` that wraps around the whole game. 
We have set up the Redux store for you in `src/configureStore`

There is also a `DevTools` component which gives you the helpful redux panel, as demonstrated in the lecture.

Enough information, time to code!


## Task 1 : 