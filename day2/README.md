# Day 2 - Playing with React.js

## Introduction

Welcome to day 2 of the course functional programming in JavaScript with React and Redux. Today is all about getting familiar with React to create graphical user interfaces. We will combine react with some of the functional programming concepts we learned from day 1. Facebook open sourced React in 2013 and it has since then become one of the most popular libraries for creating the view of web applications.

The day will start with an introduction to React. In this part, we will be working on different assignments to get familiar with some of the core concepts of React. Will start with some basics and add more complexity on the way.

After we have been familiarized with React and created some components  we will start to work on a case assignment. The case is to create a Memory like game. Today we will work on the view logic and on the last day, we will work to connect everything together. Memory is the game where you have a number of card pairs facing down on a board.  On each card, there is a picture, and the job is to find all the matching pairs using the lowest amount of turns. A turn plays out by flipping two cards of the player’s choice, if the two cards flipped has the same image, these cards are removed from the board, if not the two cards are turned back on its back. The challenge is to memorize the location of flipped cards and remove all the pairs from the board as fast as possible.

Remember, we are here to help you learn. Do not hesitate to ask questions. We will walk around and help you with the assignments. If a part is difficult, please tell us, or just skip it.


## Part 1 - React warm up

### Some examples
#### Render a basic component with props:
```javascript

const Hello = (props) => {
  return (
    <div>
      { props.name }
    </div>
  );
};

ReactDOM.render(<Hello name='World'/>, document.getElementById('app'));
```

#### Nested components:
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

#### List example:
```javascript
const Fruits = () => {
  const fruitList = ['banana', 'apple', 'orange'];
  const fruits = fruitList.map(( fruit ) => {
      return ( <li>{ fruit }</li> );
  });
  return (
    <ul> { fruits } </ul>
  );
}
```

### Tasks:
* Create and render a component `<Actor>` that displays `"Leonardo DeCaprio"`.
[Solution](http://jsbin.com/sojejoz/5/edit?html,js,output)

* Add a property `name` to the `<Actor>` component and pass `Leonardo DeCaprio` as a property rather than setting the name as a hard coded value.
[Solution](http://jsbin.com/sojejoz/6/edit?js,output)

* Create a new component `<Actors>` that displays 3 actors of your choice using the `<Actor>` component for each actor.
[Solution](http://jsbin.com/sojejoz/12/edit?js,output)

* Use the `actorList` bellow as a prop `actors` to the `<Actors>` component. Render each actor in the list using a `<ul>` element.

* In the `<Actors>` component. Render each actor in the list as a `<Actor>` component. [Solution](http://jsbin.com/sojejoz/15/edit?js,output)

```javascript
const actorList = [
  'Leonardo DiCaprio',
  'Matt Damon',
  'Michael Fassbender',
  'Cate Blanchett',
];
```

* change the `actorList` to the `actorsWithOscars` list and do the necessary changes to show the name and number of Oscars for each actor. [Solution](http://jsbin.com/sojejoz/24/edit?js,output)

```javascript
const actorsWithOscars = [
    {
      name: 'Jack Nicholson',
      oscars: 3
    },
    {
      name: 'Katharine Hepburn',
      oscars: 4
    },
    {
      name: 'Kevin Spacey',
      oscars: 2
    },
    {
      name: 'Tom Hanks',
      oscars: 2
    },
    {
      name: 'Leonardo DeCaprio',
      oscars: 1
    },
    {
      name: 'Johnny Depp',
      oscars: 0
    },
];
```
* Sort the actors by number of Oscars. [Solution](http://jsbin.com/sojejoz/29/edit?js,output)

* Show only Actors with more than 2 Oscars. [Solution](http://jsbin.com/sojejoz/34/edit?js,output)

* Show the actor currently holding the highest number of Oscars. Use `reduce` to find the actor. [Solution](http://jsbin.com/sojejoz/42/edit?js,console,output)

* In the bottom of the Actors component create a new component that displays the total amount of Oscars and actors e.g. `6 actors with a total of 13 Oscars`

#### Extra:
* In the list of actors create some kind of visual highlight for the actor with the most Oscars.

* Show a list of how many actors that have a given number of Oscars. e.g `2 actor(s) has 1  Oscar(s) `

* Create a list Grouped by number of Oscars
```
One Oscar
    * Leonardo DeCaprio
Two Oscars
    * Kevin Spacey
    * Tom Hanks
```


## Part 2 - Memory game
In this part, we will start to setup the view logic of the Memory game. We have provided an object `data` that represent a snapshot of the game state. We will use this state to help us create and test the layout of the game.

[Solution example](http://output.jsbin.com/yetiqok)

```javascript
const data = {
  cards: [
    { item: "http://lorempixel.com/200/200/cats/1/", matched: false, open: true},
    { item: "http://lorempixel.com/200/200/cats/1/", matched: false, open: false},
    { item: "http://lorempixel.com/200/200/cats/2/", matched: false, open: false},
    { item: "http://lorempixel.com/200/200/cats/2/", matched: false, open: false},
    { item: "http://lorempixel.com/200/200/cats/3/", matched: false, open: false},
    { item: "http://lorempixel.com/200/200/cats/3/", matched: false, open: false},
    { item: "http://lorempixel.com/200/200/cats/4/", matched: false, open: true},
    { item: "http://lorempixel.com/200/200/cats/4/", matched: false, open: true},
    { item: "http://lorempixel.com/200/200/cats/5/", matched: true, open: true},
    { item: "http://lorempixel.com/200/200/cats/5/", matched: true, open: true},
    { item: "http://lorempixel.com/200/200/cats/6/", matched: true, open: true},
    { item: "http://lorempixel.com/200/200/cats/6/", matched: true, open: true},
  ],
  rounds: 10,
  highscore: 0,
};

const cardBacksideUrl = "http://lorempixel.com/image_output/abstract-q-g-200-200-10.jpg";
```
### Create a Card component
We will start to create a `<Card>` component. We will use the `<card>` component to represent one card in the game. A card could have three possible states, `backside up`, `image side up` and `matched`.

* Create a `<Card>` component and pass `data.cards[0]` as a prop named `data`. The component should render a `<div>` with the className `"card"`. Render a text string for now.
```
<div className="card">Hello card</div>
```
* Have the `<Card>` component render an image from the URL passed in from `props.data.item`.

* When `props.data.open` is set to `false`, render an image from the URL `cardBacksideUrl` rather than the URL from `props.data.item`. Remember that you can test different states by changing the values in the `data` object.

* If `props.data.matched` is set to `true`, add the className `matched` to the card `<div>`

### Create a Board
Now we will create the `<Board />` component holding the `<Cards />`

* Create and render a <Board /> component and pass `data.cards` as a prop named `cards`. The component should render a `<div>` with className `"board"`

* Render a `<Card />` for all the card data in `props.cards`

### Create a Game component
// todo

### MoveCounter
// todo

### Highscore
// todo


### 6. Extra
* Create a function `flipCard(cardIndex)` that changes the `open` value of a given card. Pass this method down to the `<card>` components. Trigger this on a card click and re-render the game.


[Solution example](http://jsbin.com/yetiqok/179/edit?css,js,output)


[Simple game](http://jsbin.com/yetiqok/214/edit?js,output)








### Mapping and filtering

Samme som over, vise kun dem med 2+ Oscars.
Gjøre om "moviestars" til array av objekter med name og #oscars.

### Komposisjon: Bruke <Actor> i <Moviestars>

## Memory

Spillstruktur:

{
  tiles: [{ type: 'url', revealed: false, matched: false }, ...],
  reveals: 0,
  highscore: 999
}

1. Lage <Tile> - vise/skjule avhengig av flagg, inneholde bilde, alert() med onClick - her hooker vi opp flipTile senere
2. Lage <Board> - bruker <Tile>, mapper over array
3. Lage <MoveCounter>
4. Lage <Game> som toppnivåwrapper
5. Lage <Highscore>


Extra:
* Send inn funksjon til en Tile som endrer gamestate og rendrer på nytt
*
*

---

1. Klikk på Tile åpner den
2. Klikk på enda en Tile åpner denne også
3. Håndtere at man kan ikke kan vise tre samtidig (avslutt tur-knapp eller skjul en vist Tile)
4. Hvis to Tiles matcher forblir de åpne
5. Hvert klikk inkrementerer antall moves
