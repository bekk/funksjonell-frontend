# Day 2 - React.js

## Introduction

Welcome to day 2 of the course functional programming in JavaScript with React and Redux. Today is all about getting familiar with React to create graphical user interfaces. We will combine React with some of the functional programming concepts we learned on day 1. Facebook open sourced React in 2013 and it has since then become one of the most popular libraries for creating the view of web applications.

The day will start with an introduction to React. In this part, we will be working on different assignments to get familiar with some of the core functionality of React. Will start with some basic stuff and add more complexity on the way.

After we have warmed up with some React components, we will start to work on a case assignment. The case is to create a Memory like game. Today we will work on the view logic and on the last day, we will work on putting everything together. Memory is the game where you have a number of card pairs facing down on a board.  On each card, there is a picture, and the job is to find all the matching pairs using the fewest number of turns. A turn plays out by flipping two cards of the player’s choice, if the two cards flipped has the same image, these cards are removed from the board, if not the two cards are turned back on its back. The challenge is to memorize the location of flipped cards and remove all the pairs from the board as fast as possible.

Remember, we are here to help you learn. Do not hesitate to ask questions. We will walk around and help you with the assignments. If a part is difficult, please tell us, or just skip it.

## Summary from day 1 - Map, Filter and reduce
You can find the material from day 1 [here](https://github.com/bekk/funksjonell-frontend/tree/react/day1).

### Filter
Filter is a higher-order function that takes an array and a predicate function, and returns a new array with the values that the predicate function returns true for. An example is to remove all objects in an array with odd index.

```javascript
function removeOddIndices(array) {
  return array.filter((val, index, collection) => index % 2 === 0);
}

//removeOddIndices([0,1,2,3,4]) === [0,2,4]
```

### Map
Map is a higher-order function that takes an array and a function, and returns a new array with the given function applied to each element of the original array. An example is to square all element in a list.

```javascript
function square(numbers) {
  return numbers.map((value, index, collection) => value * value);
}

//square([2,3,4]) === [4,9,16]
```

### Reduce
Reduce applies a function against an accumulator and each value of the array to reduce it to a single value. Reduce is different from map and filter in that it returns a value rather than a collection. However, the value could also be a collection.


```javascript
  function sum(arr) {
    return arr.reduce((acc, value, index, collection) =>{
      // What is returned in this function is used as `acc` for
      // the next iteration
      return acc + value;
    }, 0);
    // 0 is the starting value for `acc`

    // What we return on the last iteration is the result of
    // the reduce.
  }
```

## Part 1 - React warm up
Here are some basic React examples. Feel free to go to the Live examples and
play with the code.

#### Render a component with props
[Live example](http://jsbin.com/xuxalo/4/edit?js,output)
```javascript
const Hello = (props) => {
  return (
    <div>
      Hello { props.name }
    </div>
  );
};

ReactDOM.render(<Hello name='World'/>, document.getElementById('app'));
```


#### Composition
[Live example](http://jsbin.com/xuxalo/7/edit?js,output)
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
[Live example](http://jsbin.com/xuxalo/8/edit?js,output)
```javascript
const Fruits = () => {
  const fruitList = ['banana', 'apple', 'orange'];
  const fruits = fruitList.map(( fruit ) => {
      return ( <li>{ fruit }</li> );
  });
  return (
    <ul> { fruits } </ul> // React will render the <li> elements in fruits
  );
}
```

#### If
[Live example](http://jsbin.com/xuxalo/18/edit?js,output)
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
[Live example](http://jsbin.com/xuxalo/26/edit?js,output)
```javascript
const FruitBowl = (props) => {
  return (
    <div> { props.children } </div>
  )
}

// In some other component
<FruitBowl>
  <Orange />
  <Apple />
  <Banana />
</FruitBowl>
```

### Handle click
[Live example](http://jsbin.com/xuxalo/30/edit?js,output)
```javascript
const Clickable = (props) => {
  return (
    <button onClick={ props.onClickFn }> Click me! </button>
  );
}
```

### Styling
[Live example](http://jsbin.com/xuxalo/48/edit?css,js,output)
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

* Task 4 - Pass the `actorList` bellow as a prop `actors` to the `<Actors>` component. Render each actor in the list instead of renderning the hardcoded actors from the previous task.

```javascript
const actorList = [
  'Leonardo DiCaprio',
  'Matt Damon',
  'Michael Fassbender',
  'Cate Blanchett',
];
```

* Task 5 -Change the `actorList` to the `actorsWithOscars` list and do the necessary changes to show the name and number of Oscars for each actor.

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
* Task 6 - Sort the actors by number of Oscars.

* Task 7 - Show only Actors with more than 2 Oscars.

* Task 8 - Show the actor currently holding the highest number of Oscars. Use `reduce` to find the actor.

* Task 9 - In the bottom of the Actors component create a new component that displays the total amount of Oscars and actors e.g. `6 actors with a total of 13 Oscars`.

#### Extra:

* Task 10 - Create a `<Oscar>` component that displays the year and title of an award. Render the awards for each actor in the `<Actor>` component.

* Task 11 - Create a `<OscarMovies>` component and a `<Movie>` component. Render a list of containing all of the movie titles from the actor `actorsWithOscarsExtended` list. Sort the movies by year.

* Task 12 - In the list of actors create some kind of visual highlight for the actor with the most Oscars.

* Task 13 - Show a list of how many actors that have a given number of Oscars. e.g `2 actor(s) has 1 Oscar(s) `

```javascript
const actorsWithOscarsExtended = [
    {
        name: 'Jack Nicholson',
        oscars: 3,
        nominations: 12,
        awards: [
            {
                title: 'One flew over the cuckoos nest',
                year: '1975'
            },
            {
                title: 'As Good as It Gets',
                year: '1997'
            },
            {
                title: 'Terms of Endearment',
                year: '1983'
            }
        ]
    },
    {
        name: 'Katharine Hepburn',
        oscars: 4,
        nominations: 12,
        awards: [
            {
                title: 'Morning Glory',
                year: '1933'
            },
            {
                title: 'Guess Whos Coming to Dinner',
                year: '1967'
            },
            {
                title: 'The Lion in Winter',
                year: '1968'
            },
            {
                title: 'On Golden Pond',
                year: '1981'
            }
        ]
    },
    {
        name: 'Kevin Spacey',
        oscars: 2,
        nominations: 2,
        awards: [
            {
                title: 'American Beauty',
                year: '1999'
            },
            {
                title: 'The Usual Suspects ',
                year: '1995'
            }
        ]
    },

    {
        name: 'Tom Hanks',
        oscars: 2,
        nominations: 5,
        awards: [
            {
                title: 'Philadelphia',
                year: '1993'
            },
            {
                title: 'Forrest Gump',
                year: '1994'
            }
        ]
    },
    {
        name: 'Leonardo DeCaprio',
        oscars: 1,
        nominations: 6,
        awards: [
            {
                title: 'The Revenant',
                year: '2016'
            }
        ]
    },
    {
        name: 'Johnny Depp',
        oscars: 0,
        nominations: 3,
        awards: []
    }
];
```

### Solutions part 1
1. [Solution task 1](http://jsbin.com/sojejoz/5/edit?html,js,output)
2. [Solution task 2](http://jsbin.com/sojejoz/6/edit?js,output)
3. [Solution task 3](http://jsbin.com/sojejoz/12/edit?js,output)
4. [Solution task 4](http://jsbin.com/sojejoz/15/edit?js,output)
5. [Solution task 5](http://jsbin.com/sojejoz/24/edit?js,output)
6. [Solution task 6](http://jsbin.com/sojejoz/29/edit?js,output)
7. [Solution task 7](http://jsbin.com/sojejoz/34/edit?js,output)
8. [Solution task 8](http://jsbin.com/sojejoz/42/edit?js,console,output)
9. [Solution task 9](http://jsbin.com/goqemu/4/edit?js,output)
10. [Solution task 10](http://jsbin.com/jixijo/122/edit?js,output)
11. [Solution task 11](http://jsbin.com/caqace/25/edit?js,output)


## Part 2 - Memory game
In this part, we will start to setup the view logic of the Memory game. We have provided an object `data` that represent a snapshot of the game state. We will use this state to help us create and test the layout of the game. The result should look something like this: **[Goal of the day](http://jsbin.com/yetiqok/282)**

1. A click on a `<Card>` opens it
2. A click on a second `<Card>` opens it
3. If two `<Card>` tiles matches, they stay open
4. If a third `<Card>` is clicked and there are two other non matching `<Cards>` open, the other are closed.
5. Every click increments the `number of moves`
6. The game is finished when there are no more `<Card>` to match


```javascript
const data = {
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

**Start in this JsBin: [Clone me and starte here](http://jsbin.com/sujekun/9/edit?js,output)**

* Create a `<Card>` component and pass `data.cards[0]` as a prop named `data`. The component should render a `<div>` with the className `"card"`. Render a text "card" for now.
```
<div className="card">Hello card</div>
```
* Let the `<Card>` component render an image from the URL passed in from `props.data.item`.

* When `props.data.open` is set to `false`, render an image using the URL `cardBacksideUrl` rather than the URL from `props.data.item`. Remember that you can test different states by changing the values in the `data` object.

* If `props.data.matched` is set to `true`, add the className `matched` to the card `<div>`

* Add an `onClick` listener on the card component that triggers an window.alert.

### Board component
Next we need to create the `<Board>`. The `<Board>` component will be used as an container for all of the `<Card>` components.

* Create and render a `<Board>` component and pass `data.cards` as a prop named `cards`. The component should render a `<div>` with className `"board"`

* Render a `<Card>` component for each of the cards in `props.cards`.

### Game component
Now we will create a `<Game>` component. The game component will be the top level component and will hold the `<Board>`, `<MoveCounter>` and `<Highscore>` components

* Create a `<Game>` component and pass `data` as a prop.

* Move the `<Board>` component inside the `<Game>` component and pass the correct props.

* Create a header `<h1>` with a game title

### MoveCounter

* Create a `<MoveCounter>` and insert it inside the `<Game>` component.

* Pass `data.rounds` as props and display the current score

### Highscore component

* Create a `<Highscore>` component and insert it inside the `Game` component

* Display the highscore from `data.highscore`

## Solution
[Solution example](http://jsbin.com/yetiqok/282)

### Extra
* Add a key `gameComplete` to the `data` object and create a restart button and some game won graphics.

* Add a highscore list of `names` and `scores` to the `data` object and create a render a list of the best players.

* Create a function `flipCard(cardIndex)` that changes the `open` value of a given card. Pass this method down to the `<Card>` components. Trigger this on a card click, and re-render the game to show the new state.

### Extra Extra

* Read about `Proptypes` in functional stateless components and add this to all of the components used in the game.

* Read about `key` attribute and add this where it is needed.

EOF
