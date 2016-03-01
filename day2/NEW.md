# Day 2 - React.js

## Introduction

Welcome to day 1 of the course functional programming in JavaScript with React and Redux. This day is all about React . . .

## Part 1 - React warm up

Hello World example:
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
### Assignment:
1. Create a component `<Actor />` that displays `"Leonardo DeCaprio"` and render it to the screen.
[Solution](http://jsbin.com/sojejoz/5/edit?html,js,output)

2. Add the property `name` to the `<Actor/>` component and pass `Leonardo DeCaprio` as a property rather than setting the name as a hard coded value.
[Solution](http://jsbin.com/sojejoz/6/edit?js,output)

3. Create a new component `<Actors/>` that displays 3 actors of your choice using the `<Actor/>` component for each actor.
[Solution](http://jsbin.com/sojejoz/12/edit?js,output)

4. Use the list of actors bellow as a prop to the `<Actors/>` component. Render each actor in the list as a `<Actor/>` component. [Solution](http://jsbin.com/sojejoz/15/edit?js,output)
```javascript
const actorList = [
  'Leonardo DiCaprio',
  'Matt Damon',
  'Michael Fassbender',
  'Cate Blanchett',
];
```
Hint:
```javascript
const fruitList = ['banana', 'apple', 'orange'];
const fruits = fruitList.map((fruit) => {
    return ( <div>{ fruit }</div> );
});
```

5. Extend the `<actors/>` and `<actor/>` components to show the name and number of Oscars for each actor. [Solution](http://jsbin.com/sojejoz/24/edit?js,output)
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
5. Sort the actors by number of Oscars. [Solution](http://jsbin.com/sojejoz/29/edit?js,output)

6. Show only Actors with more than 2 Oscars. [Solution](http://jsbin.com/sojejoz/34/edit?js,output)

7. Show the actor currently holding the highest number of Oscars. [Solution](http://jsbin.com/sojejoz/42/edit?js,console,output)

## Part 2 - Memory game
In this part we will start to setup the layout for a Memory game.

[Solution example](http://jsbin.com/yetiqok/179/edit?css,js,output)


[Simple game](http://jsbin.com/yetiqok/214/edit?js,output)
