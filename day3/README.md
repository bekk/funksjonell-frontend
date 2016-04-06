#Day 3 - Redux
##Introduction
Welcome to day 3, and the last day of the course - Functional programming in JavaScript with React and Redux. Today we are going to have a look at Redux - A predictable state container for JavaScript apps. We will continue where we left at day 2 and finish up the Memory game in Redux pattern style.

First of all we will have a recap of some basic React to ensure that everyone knows the concepts from day 2. We will then start introducing the concepts of actions and reducer and explain how the data flows through your application. For more information about Redux, see [Redux](http://redux.js.org/).

Remember, we are here to help you learn. Do not hesitate to ask questions. We will walk around and help you with the assignments. Don't hesitate to ask us if you're stuck!

Let's get started!

## Summary from day 2 - React
You can find the material from day 2 [here](https://github.com/bekk/funksjonell-frontend/tree/master/day2).

### React
At day 2 we introduced React - A JavaScript library for creating user interfaces. React was created by Facebook back in 2011 and open-sourced in 2013. So why has React been such a big hit in the frontend world during the last years? Well, first of all React is simple.
You build reusable components, which make testing and separation of concerns much more easier. React handles all UI updates when underlying data changes, and it´s declarative, which ensures that when data changes React knows how to only update changed parts.

#### Components, Props, Render
React is all about building components.

Here is an extract of what we used in day 2.

```jsx
const data = {
    score: 30,
};

const Score = ( props ) => {
  return (
    <div className='score'>Score: { props.score }</div>
  );
}

const Game = ( props ) => {
  return (
  <div className='game'>
    <Score score={ props.data.score } />
  </div>
  )
}

React.render(<Game data={ data } />, document.body);
```

In this extract, both `Score` and `Game` are view components that we used last time. The `Game` component is the one being rendered by React, and this component uses the `Score` component. In the render function, we are passing the data object as a prop to the Game component, which is passed on down to the Score component. At last the Score component uses the receiving prop to show the score in a div.

This was just an example with one child component, but a `React` component can have as many children as you like.

## Redux
All applications need a way to handle state (server response, cached data, selected button or filter etc.). And as an app grows larger and becomes more complex, a simple way to handle the state will help to make your app development much easier.

Redux is a predictable state container which means that, by imposing restriction on how and when updates can happen, you can be sure that you always know what your state will be like.

So let´s dig deeper into the most important concepts of Redux.

#### Unidirectional data flow
In Redux all data flows in one direction.

```
         +------+
         |      |
    +----> View +-----+
    |    |      |     |
    |    +------+     |
+---+---+        +----v---+
|       |        |        |
| Store <--------+ Action |
|       |        |        |
+-------+        +--------+
```

### Actions
Actions are the way to pass data in Redux. It's just plain JavaScript objects that consist of type, and if you want, you can also pass data payload with the action.

Example
```javascript
const CARD_FLIPPED = 'CARD_FLIPPED'
const action = {
    type: CARD_FLIPPED,
    payload: card
};
```

#### Action creator
Action creators are functions that create actions. To trigger an action, you'll need to run the dispatch function with the action.

Example
```javascript
function flipCard(card) {
  return {
    type: CARD_FLIPPED,
    payload: card
  };
}

dispatch(flipCard({ id: 0, ... ,open: false }))
```

### Reducers
With actions you trigger something to happens, but we will need something that can change the state and do an act based on the action as well. This is where the reducers will do their magic.

The reducer is a pure function, which means that it takes the previous state and the action, and creates the next state.
```
(previousState, action) => newState
```
Do you remember that we used reducers in day 2? https://github.com/bekk/funksjonell-frontend/tree/master/day2#reduce
Back then we used it to calculate a sum of Oscars. In Redux we are using reducers to update the state and store it as one JavaScript object.

Here is one an example of a reducer that we will work with today.

```javascript

const gameReducer = (state = initialStateGame, action) => {
  switch (action.type) {
  case CARD_FLIPPED:
    return Object.assign({}, state, {
      flips: state.flips + 1
    });
  default:
    return state;
  }
};

```

#### Object.assign() - Part of ES6
As you can see in the reducer, we are using a function called `Object.assign`. Let's have a look and see what it does.

To ensure that the current state is not mutated, `Object.assign` copies the values from one source object to a target object.

```javascript
let state = { flips: 0, finished: false };
let action = { flips: state.flips + 1 }

let newState = Object.assign({}, state, action);

```
- The first argument is an empty target object.
- The second argument is the source object or in this case the current state
- The third argument is what we want to merge with the source object and to be part of the target object.

### Store
In Redux we have one single store. The store brings the reducers and the actions together, and the its responsibility are the following:

- Hold the application state
- Allow access to getState()
- Allow state to be updated via dispatch(action)
- Handle registration and unregistration of listeners.

In this workshop we are doing Redux with React, and by using the npm package called react-redux, we can use the function `connect`. `connect` is a function that makes the Redux store available to the component. And by this you get access to call the dispatcher and get data from the reducers.

### DevTools
The Redux DevTools is a handy browser tool when developing Redux. It gives you the opportunity to inspect state and action payload, lets you go back in time by redoing actions and let's you see potential errors your reducer throws. In the source code provided for day 3, DevTools is included.

## Instructions
Now, enough introduction. Let´s start the fun!

Today we will complete our Memory Game app. For the basic setup of the game that we did last time, jsbin was a good platform.
However, as our code base will be growing today, having all our code in one single file becomes more of an obstacle.
Thus, we have created a "real-world" project structure with the React code from last time.

### Clone and install

Ensure that you have Node.js installed, otherwise install from https://nodejs.org/.

Download this zip file containing the project https://github.com/bekk/funksjonell-frontend/archive/master.zip, or use
```shell
git clone https://github.com/bekk/funksjonell-frontend.git
```
if you have git installed.

Open the terminal/command line window and open the day3 folder:

```shell
cd funksjonell-frontend/day3
```

Install the project's dependencies:

```shell
npm install
```

Start the app:

```shell
npm start
```

### Open the project
Open your favorite editor, if you don't have one installed, download sublime https://www.sublimetext.com/3.
We have put the components you created last time into separate files in `src/components`.
You can also find the card data (`src/data.js`), the css-file (`src/app.css`) and the html-file (`public/index.html`) from jsbin inside the project.

In addition, we have created an `App` component in `src/components` that wraps around the whole game.
We have set up the Redux store for you in `src/configureStore`

There is also a `DevTools` component which gives you the helpful redux panel, as demonstrated in our introduction.

Enough information, time to code!


### Task 1: Make a component that calls a `GAME_RESET` action
We start by implementing the Reset button (as shown in the introduction).
Our first goal with Redux will be to make a button that trigger's the `GAME_RESET` action in the Redux debug panel.
Create a React component `ResetGame` (`src/components/ResetGame.js`), consisting of a button element with an onClick-handler that calls a function passed through the `props`.
Insert the new component into the `Game` component. Remember to import it at the top of the file.

The onClick callback that is passed from the `Game` parent should dispatch the `GAME_RESET` action by calling the `resetGame()` action creator (`src/actions.js`).
First, `connect` the `Game` component when exporting it, like so:
```js
export default connect()(Game);
```
Once the component is connected, the `dispatch` function is automatically available as a prop.
```jsx
<ResetGame onButtonClick={ () => props.dispatch(resetGame()) }/>
```
We have already imported the `resetGame` action for you at the top of `src/components/Game.js`.

Open the game in the browser and press your newly created button, an action should be firing in the debug panel on the right side!

### Task 2: Turning static data into dynamic data - implement your first reducer
Now that we are able to fire an event with an action creator, we need to be able to pick up this event. This is where the reducers are used.
We want all the cards to flip when we press reset. Currently, our cards are static data, we need to move them into the `reducers.js` file and make them respond to the action we have dispatched.
Thus, we copy the card data from `data.js` and set the initial card state like so
```js
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
This is where you should reset the state of the cards.
You want to map over the array of cards (`state.map`) and set `open` to `false` and `matched` to `false`.  Here you should use the `Object.assign` function https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign, as mentioned in the introduction. Lets take a trip down memory lane, here is an example on how to use it:
```javascript
const actorsAcademyAwards2015 = [
    { name: 'Jack Nicholson', oscars: 3 },
    { name: 'Tom Hanks', oscars: 2 },
    { name: 'Leonardo DeCaprio', oscars: 0 },
    { name: 'Johnny Depp', oscars: 0 }
];
const awardOscars2016 = {type: ACADEMY_AWARDS_2016};
const reducer = (actors, action) => {
    switch (action.type) {
        case ACADEMY_AWARDS_2016:
            return actors.map((actor) => {
                if (actor.name === 'Leonardo DeCaprio') {
                    return Object.assign({}, actor, {oscars: 1});
                } else {
                    return actor;
                }
            });
        default:
            return actors;
    }
}
const actorsAcademyAwards2016 = reducer(actorsAcademyAwards2015, awardOscars2016)
```

You can check if you are doing things correctly by inspecting the `cardReducer` object in the Redux panel and see if the cards have changed.

Now, to complete this task, we need to insert the state data into our `App`, instead of the static data from `data.js`.
The `App` is already connected to the store by the statement at the bottom of the file:
```js
export default connect(state => ({
    cards: state.cards
}))(App);
```
Thus, all you need to do is to pass `props.cards` to the `Game` component. Now, when you press the Restart button, all cards should flip!

### Task 3: Flip a single card - practicing the Redux pattern
Start by creating a new action creator `flipCard(card)` that returns an object with the type `CARD_FLIP` in `actions.js`.
Remember to export the action type constant at the top of the file.
In the action returned by `flipCard` you also need to send the card data, so that the reducer "knows" which card to flip.

### Task 4: Sending an onClick handler from the Game component to the Card component - passing functions down the hierarchy
Now, we need to dispatch the `CARD_FLIP` action when you click on a card.
In Task 1 we connected the `Game` component, which gave us access to the `dispatch` function.
Thus, in the Game component, we can can create a callback function `handleCardClick()` that dispatches `flipCard`, and pass this callback down to the `Card` component.
(Hint: see ResetGame.js, the only difference here is that we need to pass the callback through the `Board` component, as the `Card`component is not a direct child of `Game`.)
Check the Redux panel to see if the action is firing when you click on a card.

Lastly, implement the corresponding reducer, i.e. expand the switch statement that you created in `reducers.js`.
When you have finished this task, cards should open when you click on them.

### Task 5: Keeping track of the game state - creating a reducer from scratch
We want the score to increase each time we flip a card. Right now the score is static.
We need to create a new reducer, `gameReducer`, to keep the game state (`flips` and `bestScore`).
This reducer has to increase the number of flips each time the `CARD_FLIP` action is called.
It should also reset the score (but not the `bestScore`) when the `GAME_RESET` action is fired.
Create this reducer, remember to set the initial state and to export the reducer (i.e. pass it as an argument to the `combineReducers`function).

##### A note about `combineReducers`
`combineReducers` takes an object as an argument. The keys of this object (`cards` and `game` in our case) will be the names of the properties on the `state` argument we have seen in the `connect` function. The values of the object passed to `combineReducers` are individual reducers that each manage their own subtree of the application state.

You may also want to set the initial state of all the cards to be closed and not matched.

Make sure that the `App` component receives the game state, hint: take a look at the `connect` function in `App.js`.
You have completed this task when the score increases as you flip the cards AND is reset to zero when you press the reset button.

### Task 6: Putting the game logic into the app - functional programming
There are many ways to implement the game logic, you can try doing it yourself or you can follow our tips:
Let's go back to the `handleCardClick` callback in `Game,` which is called when you press a card, this is where we found it best to put the following game logic.
##### a)
On each turn, the player should only be allowed to open two cards at a time. Thus, implement the function `canFlipCard(card, cards)` that checks if you are allowed to dispatch the `flipCard` action creator.
##### b)
If the player manages to open a matching pair of cards, we need to change the state of these two cards, i.e. set `matched` to `true`.
Create a function `findMatch(card, cards)` that checks for a match. If a match is found, dispatch a new action creator: `matchCards(card1, card2)`.
Implement this function and the corresponding reducer.
##### c)
If you have a match, you need to check if you have enough matches to finish the game. Implement the function `willMatchFinishGame(cards)`.
If this function returns `true`, dispatch a new action creator: `finishGame()`. Implement this function and the corresponding reducer. Hint: you may want to add a new prop `isFinished` to the the game reducer state.

### Task 7: Finishing touch on the UI
When the game is finshed, the ui should indicate this. Implement a `GameFinished` component that shows the final score and maybe some other html elements. Wrap the `ResetGame` component inside this component. This component should be shown instead of the `Board`, when `isFinished` is `true`.

## Outro
Thanks for your attention during this 3-days course. Hope you enjoyed it!

If you want to learn more of React and Redux visit the following sites:

- About React: https://facebook.github.io/react/
- Learn more Redux at Egghead.io : https://goo.gl/2uUnBg
- Check out one of the first talks from the creator of Redux (Dan Abramov): https://www.youtube.com/watch?v=xsSnOQynTHs


If you want to know more about BEKK visit www.bekk.no. And if you are searching job opportunities send a mail to jobb@bekk.no
