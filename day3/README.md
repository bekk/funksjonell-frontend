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


## Task 1: Make a component that calls a `GAME_RESET` action
We start by implementing the Reset button (as shown in the lecture). 
Our first goal with Redux will be making this button trigger the `GAME_RESET` action in the Redux debug panel.
Create a React component consisting of a button element with an onClick-handler that dispatches the `resetGame()` action creator (`src/actions.js`).
Remember to `connect` the component when exporting it, like so:
```
export default connect()(ResetGame);
```
Once the component is connected, the `dispatch` function automatically  available as a prop.
```
props.dispatch(resetGame())
```
Insert the new component `ResetGame` into the `Game` component. Remember to import it at the top of the file.
Open the game in the browser and press your newly created button, an action should be firing in the debug panel on the left side!

## Task 2: Turning static data into dynamic data
Now that we are able to fire an event with an action creator, we need to be able to pick up this event, this is where the reducers come in.
We want all the cards to flip when we press reset. Currently, our cards are static data, we need to move them into the `reducers.js` file and make them respond to the action we have dispatched.
Thus, we copy the card data from `data.js` and set the initial card state like so 
```
const initialStateCards = [
                              { item: 'http://lorempixel.com/200/200/cats/1/', matched: false, open: false},
                              { item: 'http://lorempixel.com/200/200/cats/6/', matched: true, open: true},
                              { item: 'http://lorempixel.com/200/200/cats/4/', matched: false, open: false},
                              { item: 'http://lorempixel.com/200/200/cats/5/', matched: true, open: true},
                              { item: 'http://lorempixel.com/200/200/cats/2/', matched: false, open: false},
                              { item: 'http://lorempixel.com/200/200/cats/2/', matched: false, open: false},
                              { item: 'http://lorempixel.com/200/200/cats/1/', matched: false, open: true},
                              { item: 'http://lorempixel.com/200/200/cats/4/', matched: false, open: true},
                              { item: 'http://lorempixel.com/200/200/cats/3/', matched: false, open: false},
                              { item: 'http://lorempixel.com/200/200/cats/6/', matched: true, open: true},
                              { item: 'http://lorempixel.com/200/200/cats/3/', matched: false, open: false},
                              { item: 'http://lorempixel.com/200/200/cats/5/', matched: true, open: true},
                          ]
```

Now if 