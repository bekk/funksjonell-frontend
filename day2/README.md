# Day 2 - React

## Introduction
Welcome to day 1 of the course functional programming in JavaScript with React and Redux. This day is all about React . . .


## Part 1 - React warm up
This part will give an basic introduction to React

### Hello world

Plain Javascript
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

With JSX:
```javascript
var App = React.createClass({
  render() {
      return (
        <div> Hello world </div>
      );
  }
});

ReactDOM.render(<App/>, document.getElementById('main'));
```
JsBin: [Live example](http://jsbin.com/deluji/20/edit?html,js,output)

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


### Lifecycle methods
[Lifecycle docs](https://facebook.github.io/react/docs/component-specs.html#lifecycle-methods)


### State




## Part 2 - Calendar application
### Setup Node
Goto . . .
