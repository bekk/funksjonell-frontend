# Day 2 - React

## Introduction
Welcome to day 1 of the course functional programming in JavaScript with React and Redux. This day is all about React . . .


## Part 1 - React warm up
This part will give a basic introduction to React. First we will go trough some code examples and then we will get our hands dirty by creating a small Stopwatch application.

### Hello world

```javascript
const HelloWorld = () => (
  return (
    <div>Hello world</div>
  );
);

ReactDOM.render(<HelloWorld />, mountNode);
```

### Transferring Props

```javascript
const Actor = (props) => {
  return (
    <div>Actor { props.actor.name } has won { props.actor.oscars } Oscar awards</div>
  );
}

ReactDOM.render(<Actor actor={{ name: 'ebsb', oscars: 2 }} />, mountNode);
```

### Render a list of items
```javascript
const moviestars = [
  'Leonardo DiCaprio',
  'Matt Damon',
  'Michael Fassbender',
  'Cate Blanchett',
];

const Moviestars = React.createClass({
  render() {
    const actors = this.props.actors.map((actor) => {
      return <li>{ actor }</li>
    });

    return (
      <ul>{ actors }</ul>
    );
  }
});

ReactDOM.render(<Moviestars actors={ moviestars } />, mountNode);

```

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

