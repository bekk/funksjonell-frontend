#Day 3 - Redux
##Introduction
Welcome to day 3, and the last day of the course - Functional programming in JavaScript with React and Redux. Today we are going to have a look at Redux - A predictable state container for JavaScript apps. We will continue where we left at day 2 and finish up the Memory game in Redux pattern style.

First of all we will have a recap of some basic React to ensure that everyone knows the concepts from day 2. We will then start introducing the concepts of actions, reducer and explain how the data flows through your application. For more information about Redux, see [Redux](http://redux.js.org/).

Remember, we are here to help you learn. Do not hesitate to ask questions. We will walk around and help you with the assignments. Don't hesitate to ask us if you're stuck!

Let´s get started!

## Summary from day 2 - React
You can find the material from day 2 [here](https://github.com/bekk/funksjonell-frontend/tree/master/day2).

### React
At day 2 we introduced React - A JavaScript library for creating user interfaces. React was created by Facebook back in 2011 and open-sourced in 2013. So why has React been such a big hit in the frontend world during the last years? Well, first of all React is simple.
You build reusable components, which make testing and separation of concerns much more easier. React handles all UI updates when underlying data changes, and it´s declarative, which ensures that when data changes React knows how to only update changed parts.

#### Components, Props, Render
React is all about building components.

Here is an extract of what we used in day 2.

```javascript
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

In this extract, both Score and Game are view components that we used last time. The Game component are the one being rendered by React, and this component is using the Score component. In the render function, we are passing the data object as a prop to the Game component, which are passed on down to the Score component. At last the Score component are using the receiving prop to show the score in a div.

This was just an example of one child component, but there are now problem with React to create as many children as you want. 

## Instructions

Ensure that you have Node.js installed, otherwise install from https://nodejs.org/.

Clone this repo:

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
