## Instructions

Today we will complete our Memory Game app. For the basic setup of the game that we did last time, jsbin was a good platform. 
However, as our code base will be growing today, having all our code in one single file becomes more of an obstacle.
Thus, we have created an npm project with the React code from last time.  

### Clone and install

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

### Open the project
Open your favorite editor, if you don't have one installed, download sublime https://www.sublimetext.com/3.
We have put the components you created last time into separate files in `src/components`. 
You can also find the card data (`src/data.js`), the css-file (`src/app.css`) and the html-file (`public/index.html`)) from jsbin inside the project.

In addition, we have created an `App` component in `src/containers` that wraps around the whole game. 
We have set up the Redux store for you in `src/configureStore`

There is also a `DevTools` component which gives you the helpful redux panel, as demonstrated in our introduction.

Enough information, time to code!


### Task 1: Make a component that calls a `GAME_RESET` action
We start by implementing the Reset button (as shown in the introduction). 
Our first goal with Redux will be making this button trigger the `GAME_RESET` action in the Redux debug panel.
Create a React component `ResetGame`, consisting of a button element with an onClick-handler that dispatches the `resetGame()` action creator (`src/actions.js`).
Remember to `connect` the component when exporting it, like so:
```
export default connect()(ResetGame);
```
Once the component is connected, the `dispatch` function is automatically available as a prop.
```
props.dispatch(resetGame())
```
Insert the new component `ResetGame` into the `Game` component. Remember to import it at the top of the file.
Open the game in the browser and press your newly created button, an action should be firing in the debug panel on the right side!

### Task 2: Turning static data into dynamic data - implement your first reducer
Now that we are able to fire an event with an action creator, we need to be able to pick up this event, this is where the reducers come in.
We want all the cards to flip when we press reset. Currently, our cards are static data, we need to move them into the `reducers.js` file and make them respond to the action we have dispatched.
Thus, we copy the card data from `data.js` and set the initial card state like so 
```
const initialStateCards = [
                              { id: 0, item: 'http://lorempixel.com/200/200/cats/1/', matched: false, open: false},
                              { id: 1,item: 'http://lorempixel.com/200/200/cats/6/', matched: true, open: true},
                              { id: 2,item: 'http://lorempixel.com/200/200/cats/4/', matched: false, open: false},
                              { id: 3,item: 'http://lorempixel.com/200/200/cats/5/', matched: true, open: true},
                              { id: 4,item: 'http://lorempixel.com/200/200/cats/2/', matched: false, open: false},
                              { id: 5,item: 'http://lorempixel.com/200/200/cats/2/', matched: false, open: false},
                              { id: 6,item: 'http://lorempixel.com/200/200/cats/1/', matched: false, open: true},
                              { id: 7,item: 'http://lorempixel.com/200/200/cats/4/', matched: false, open: true},
                              { id: 8,item: 'http://lorempixel.com/200/200/cats/3/', matched: false, open: false},
                              { id: 9,item: 'http://lorempixel.com/200/200/cats/6/', matched: true, open: true},
                              { id: 10,item: 'http://lorempixel.com/200/200/cats/3/', matched: false, open: false},
                              { id: 11,item: 'http://lorempixel.com/200/200/cats/5/', matched: true, open: true},
                          ]
```

Now, inside the reducer function named `cardReducer` there is a switch statement waiting for the action `GAME_RESET`. 
In here is where you should reset the cards.
You want to map over the array of cards (`state.map`) and set `open` to `false` and `matched` to `false`.
You can check if you are doing things correctly by inspecting the `cardReducer` object in the Redux panel and see if the cards have changed.
 
Now, to complete this task, we need to insert the state data into our `App`, instead of the static data from `data.js`. 
The `App` is already connected to the store by the statement at the bottom of the file:
```
export default connect(state => ({
    cards: state.cardReducer
}))(App);
```
Thus, all you need to do is to pass `props.cards` to the `Game` component. Now, when you press the Restart button, all cards should flip!
    
### Task 3: Flip a single card - practicing the Redux pattern 
Start by creating a new action creator `flipCard(cardData)` that returns the type `CARD_FLIP` in `actions.js`. Remember to export the type at the top of the file.
In this function you need to return the card that was flipped as well (cardData).
Next, call this action creator when you click on a card (Hint: see `ResetGame`), remember to import the `connect` function. 
Check the Redux panel to see if the action is firing.
Lastly, implement the corresponding reducer, i.e. expand the switch statement that you created in `reducers.js`. 
When you have finished this task, cards should open when you click on them. 

### Task 4: Keeping track of the game state - creating a reducer from scratch 
We want the score to increase each time we flip a card. Right now the score is static. 
We need to create a new reducer, `gameReducer`, to keep the game state (`rounds`and `highscore`).  
This reducer has to increase the number of rounds each time the `CARD_FLIP` action is called.
It should also reset the score when the `GAME_RESET` action is fired.
Create this reducer, remember to set the initial state and to export the reducer (i.e. pass it as an argument to the `combineReducers`function).

You may also want to set the initial state of the cards to be face down.

Make sure that the `App` component receives the game state, hint: take a look at the `connect` function in `App.js`.
You have completed this task when the score increases as you flip the cards AND is reset to zero when you press the reset button.

### Task 5: Putting the game logic into the app - functional programming
Instructions to game logic HERE

###Format Task 6: Structuring your app - where should the data flow?
Instructions on how to move the store connection higher up in the component tree HERE.

