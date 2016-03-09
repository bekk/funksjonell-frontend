# Day 2 - React.js

## Introduction

Welcome to day 2 of the course functional programming in JavaScript with React and Redux. Today is all about getting familiar with React to create graphical user interfaces. We will combine React with some of the functional programming concepts we learned on day 1. Facebook open sourced React in 2013 and it has since then become one of the most popular libraries for creating the view of web applications.

The day will start with an introduction to React. In this part, we will be working on different assignments to get familiar with some of the core functionality of React. Will start with some basic stuff and add more complexity on the way.

After we have warmed up with some React components, we will start to work on a case assignment. The case is to create a Memory-like game. Today we will work on the view logic and on the last day, we will work on putting everything together. For more information on the game, see [wikipedia](https://en.wikipedia.org/wiki/Concentration_(game)

Remember, we are here to help you learn. Do not hesitate to ask questions. We will walk around and help you with the assignments. Don't hesitate to ask us if you're stuck!

## Summary from day 1 - Map, Filter and reduce
You can find the material from day 1 [here](https://github.com/bekk/funksjonell-frontend/tree/react/day1).

### Filter
Filter is a higher-order function that takes an array and a predicate function, and returns a new array with the values that the predicate function returns true for. An example is to remove all objects in an array with odd index.

```javascript
function removeOddNumbers(array) {
  return array.filter(val => val % 2 === 0);
}

//removeOddNumbers([0,1,2,3,4]) === [0,2,4]
```

### Map
Map is a higher-order function that takes an array and a function, and returns a new array with the given function applied to each element of the original array. An example is to square all element in a list.

```javascript
function square(numbers) {
  return numbers.map(value => value * value);
}

//square([2,3,4]) === [4,9,16]
```

### Reduce
Reduce applies a function against an accumulator and each value of the array to reduce it to a single value. Reduce is different from map and filter in that it returns a value rather than a collection. However, the value could also be a collection.


```javascript
  function sum(arr) {
    return arr.reduce((acc, value) =>{
      // What is returned in this function is used as `acc` for
      // the next iteration
      return acc + value;
    }, 0);
    // 0 is the starting value for `acc`

    // What we return on the last iteration is the result of
    // the reduce.
  }

// sum([1,2,3]) === 6
```

## Part 1 - React Warm Up
Here are some basic React examples. Feel free to go to the Live examples and
play with the code.

#### Render a component

```javascript
const Component = () => {
  return <div>Hello World!</div>;
};

ReactDOM.render(<Hello name='World'/>, document.getElementById('app'));
```


#### Render a component with props
[Live example](http://jsbin.com/xuxalo/55/edit?js,output)
```javascript
const Hello = (props) => {
  return (
    <div>
      Hello { props.name }
    </div>
  );
};
```


#### Composition
[Live example](http://jsbin.com/xuxalo/56/edit?js,output)
```javascript
const HelloFruit = () => {
  return (
    <div>
      <Hello name='banana' />
      <Hello name='apple' />
      <Hello name='orange' />
    </div>
  );
}
```

#### List
[Live example](http://jsbin.com/xuxalo/64/edit?js,output)
```javascript
const Fruits = () => {
  const fruitList = ['banana', 'apple', 'orange'];
  const fruits = fruitList.map(( fruit ) => {
      return <li>{ fruit }</li>;
  });
  return <ul> { fruits } </ul>;
  // React will render the <li> elements in fruits

}
```

#### If
[Live example](http://jsbin.com/xuxalo/58/edit?js,output)
```javascript
const Fruit = (props) => {
  if (props.name === 'banana') {
    return <Banana />;
  }
  else if (props.name === 'orange') {
    return <Orange />;
  }
  return null;
}
```

### Children
[Live example](http://jsbin.com/xuxalo/59/edit?js,output)
```javascript
const FruitBowl = (props) => {
  return <div> { props.children } </div>;
}

// In some other component
<FruitBowl>
  <Orange />
  <Apple />
  <Banana />
</FruitBowl>
```

### Handle click
[Live example](http://jsbin.com/xuxalo/60/edit?js,output)
```javascript
const Clickable = (props) => {
  return (
    <button onClick={ props.onClickFn }> Click me! </button>
  );
}
```

### Styling
[Live example](http://jsbin.com/xuxalo/62/edit?css,js,output)
```javascript
const SomeComponent = () => {
  return (
    <div className="some-css-class"> // Use CSS class
      <div style={{ fontSize: '20px' }}> Some text </div> // inline styling
    </div>
  )
}

```

### Tasks:
We will use `JsBin` as our online editor for the day. Start on the assignment by cloning this bin (**[clone me!](http://jsbin.com/yoceve/12/edit?js,output)**).

* Task 1 - Create and render a component `<Actor>` that displays `"Leonardo DeCaprio"`.

* Task 2 - Add a property `name` to the `<Actor>` component and pass `"Leonardo DeCaprio"` as a property rather than setting the name as a hard coded value.

* Task 3 - Create a new component `<Actors>` that displays 3 hardcoded actors of your choice. Use the `<Actor>` component for each actor.

* Task 4 - Pass the `actorList` bellow as a prop `actors` to the `<Actors>` component. Render each actor in the list instead of rendering the hardcoded actors from the previous task.

```javascript
const actorList = [
  'Leonardo DiCaprio',
  'Matt Damon',
  'Michael Fassbender',
  'Cate Blanchett'
];
```

* Task 5 - Change the `actorList` to the `actorsWithOscars` list and do the necessary changes to show the name and number of Oscars for each actor.

```javascript
const actorsWithOscars = [
    { name: 'Jack Nicholson', oscars: 3 },
    { name: 'Katharine Hepburn', oscars: 4 },
    { name: 'Kevin Spacey', oscars: 2 },
    { name: 'Tom Hanks', oscars: 2 },
    { name: 'Leonardo DeCaprio', oscars: 1 },
    { name: 'Johnny Depp', oscars: 0 }
];
```
* Task 6 - Sort the actors by number of Oscars.

* Task 7 - Show only Actors with more than 2 Oscars.

* Task 8 - In the bottom of the Actors component create a new component that displays the total amount of Oscars and actors e.g. `6 actors with a total of 13 Oscars`. Use `reduce` to find the total number of Oscars.


## Part 2 - Memory
In this part, we will start to setup the view logic of the Memory game. We have provided an object `game` that represent a snapshot of the game state. We will use this state to help us create and test the layout of the game. The result should look something like this: **[Goal of the day](http://jsbin.com/yetiqok/288)**

1. A click on a `<Card>` opens it
2. A click on a second `<Card>` opens it
3. If two `<Card>` tiles matches, they stay open
4. If a third `<Card>` is clicked and there are two other non matching `<Cards>` open, the other are closed.
5. Every click increments the `number of moves`
6. The game is finished when there are no more `<Card>` to match


```javascript
const game = {
    cards: [
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
    ],
    rounds: 10,
    highscore: 0
};

const cardBacksideUrl = "http://lorempixel.com/image_output/abstract-q-g-200-200-10.jpg";
```

### Card component
We will start to create a `<Card>` component. The `<Card>` component will represent one card in the game. A card could have three possible states, `face up`, `face down` and `matched`.

**Start in this JsBin: [Clone me and start here](http://jsbin.com/cucuxuqoxo/1/edit?js,output)**

* Create a `<Card>` component and pass `game.cards[0]` as a prop named `card`. The component should render a `<div>` with the className `"card"`. Render a text "card" for now.
```
<div className="card">Hello card</div>
```
* Let the `<Card>` component render an image from the URL passed in from `props.card.item`.

* When `props.game.open` is set to `false`, render an image using the URL `cardBacksideUrl` rather than the URL from `props.game.item`. Remember that you can test different states by changing the values in the `game` object.

* If `props.game.matched` is set to `true`, add the className `matched` to the card `<div>`

* Add an `onClick` listener on the card component that triggers an window.alert.

### Board component
Next we need to create the `<Board>`. The `<Board>` component will be used as an container for all of the `<Card>` components.

* Create and render a `<Board>` component and pass `game.cards` as a prop named `cards`. The component should render a `<div>` with className `"board"`

* Render a `<Card>` component for each of the cards in `props.cards`.

### Game component
Now we will create a `<Game>` component. The game component will be the top level component and will hold the `<Board>`, `<MoveCounter>` and `<Highscore>` components

* Create a `<Game>` component and pass `game` as a prop.

* Move the `<Board>` component inside the `<Game>` component and pass the correct props.

* Create a header `<h1>` with a game title

### MoveCounter

* Create a `<MoveCounter>` and insert it inside the `<Game>` component.

* Pass `game.rounds` as props and display the current score

### Highscore component

* Create a `<Highscore>` component and insert it inside the `Game` component

* Display the highscore from `game.highscore`

### Extra
* Add a key `gameComplete` to the `game` object and create a restart button and some game won graphics.

* Add a highscore list of `names` and `scores` to the `game` object and create a render a list of the best players.

* Create a function `flipCard(cardIndex)` that changes the `open` value of a given card. Pass this method down to the `<Card>` components. Trigger this on a card click, and re-render the game to show the new state.

### Extra Extra

* Read about `Proptypes` in functional stateless components and add this to all of the components used in the game.

* Read about `key` attribute and add this where it is needed.


## Solutions to tasks

### Part 1
1. [Solution task 1](http://jsbin.com/sojejoz/5/edit?html,js,output)
2. [Solution task 2](http://jsbin.com/sojejoz/6/edit?js,output)
3. [Solution task 3](http://jsbin.com/sojejoz/12/edit?js,output)
4. [Solution task 4](http://jsbin.com/sojejoz/15/edit?js,output)
5. [Solution task 5](http://jsbin.com/sojejoz/24/edit?js,output)
6. [Solution task 6](http://jsbin.com/sojejoz/29/edit?js,output)
7. [Solution task 7](http://jsbin.com/sojejoz/34/edit?js,output)
8. [Solution task 8](http://jsbin.com/goqemu/4/edit?js,output)

### Part 2
[Solution example](http://jsbin.com/yetiqok/edit?js,output)
