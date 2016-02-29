# Day 2 - React

## Introduction
Welcome to day 1 of the course functional programming in JavaScript with React and Redux. This day is all about React . . .


## Part 1 - React warm up
This part will give a basic introduction to React. First we will go trough some code examples and then we will get our hands dirty by creating a small Stopwatch application.

### Hello world

**Plain Javascript**
```javascript
var HelloWorld = React.createClass({
  displayName: 'HelloWorld',

  render() {
    return React.createElement('div', null, 'Hello world, no JSX');
  }
});

ReactDOM.render(React.createElement(HelloWorld), document.getElementById('app'));

```
JsBin: [Live example](http://jsbin.com/bejifoj/8/edit?js,output)

**Using JSX syntax:**
```javascript
var HelloWorld = React.createClass({
  render() {
      return (
        <div> Hello world </div>
      );
  }
});

ReactDOM.render(<HelloWorld/>, document.getElementById('main'));
```
JsBin: [Live example](http://jsbin.com/deluji/20/edit?html,js,output)


**Functional component:**
```javascript
var HelloWorld = () => (
  return (
    <div>Hello world</div>
  );
);

ReactDOM.render(<HelloWorld />, mountNode);
```

### Transferring Props
**Component:**
```javascript
var Hello = React.createClass({
  render() {
    return (
      <div>Hello { this.props.message }</div>
    );
  }
});

ReactDOM.render(<Hello message={'World!'} />, mountNode);
```

**Functional component:**
```javascript
var Hello = (props) => {
  return (
    <div>Hello { props.message }</div>
  );
}

ReactDOM.render(<Hello message={'World!'} />, mountNode);
```

### Render a list of items
```javascript
var moviestars = [
  'Leonardo DiCaprio',
  'Matt Damon',
  'Michael Fassbender',
  'Cate Blanchett',
];

var Moviestars = React.createClass({
  render() {
    var actors = this.props.actors.map((actor) => {
      return <li>{ actor }</li>
    });

    return (
      <ul>{ actors }</ul>
    );
  }
});

ReactDOM.render(<Moviestars actors={ moviestars } />, mountNode);

```

### Handle click event
```javascript
var HelloClick = React.createClass({
  printMsg() {
      console.log('Hello world');
  },

  render() {
    return (
      <button onClick={ this.printMsg }>
        Click me!
        </button>
    );
  }
}):
```

**Functional component**
```javascript
function printMsg() {
    console.log('Hello world');
},

var HelloClick = (props) => {
  return (
    <button onClick={ props.onClick }>
      Click me!
    </button>
  );
}:

ReactDOM.render(<HelloClick onClick={ printMsg } />, mountNode);
```

### Working with State
```javascript
var Counter = React.createClass({
  getInitialState() {
    return {
      count: 0
    }
  },

  addOne() {
      this.setState({ count: this.state.count + 1 });
  },

  render() {
    return (
        <div>
          { this.state.count }
          <button onClick={this.addOne}>Add</div>
        </div>
    );
  }
});
```

### Lifecycle methods
[Lifecycle docs](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)



### Assignment 1 - Stopwatch:
In this assignment we will warm up to React by creating a simple stopwatch application.

JsBin [Assignment](http://jsbin.com/yevegat/6/edit?css,js,output)

JsBin [Solution](http://jsbin.com/bificad/96/edit?css,js,output)

#### 1.1 - Stopwatch layout
First we need to setup the basic layout for the stopwatch application. The first assignment is to implement the `render()` method of the ** `<Stopwatch />`** component. The layout should look something like this:

![Layout](http://imgur.com/FWbLl5O.png)


#### 1.2 - Set and display initial time


#### 1.3 - Start, Pause and Reset time
Implement the functions `onStart(), onStop() and onReset()` and connect the function to its respective button.

#### 1.4 - Add lap times
Create a *Functional component* `<Lap />` to represent each lap time. The Lap component should take to values as props, Lap number and lap time.

#### 1.5 - Show best round time
Extra

## Part 2 - Calendar application
### Setup Node
Goto . . .
