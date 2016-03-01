# Day 1 - functional programming in JavaScript

## Introduction

Welcome to day 1 of the course functional programming in JavaScript with React and Redux. This day is all about the basics of using functions to structure our programs and solve problems. Using functional programming on the front-end and web is quite new, but is very popular these days because it affords easier to understand programs with more controlled side-effects (like responding to user input, talking with REST APIs and updating data). Many libraries and frameworks like Angular and React have emerged to help us structure front-end code. They have varying approaches, but we find that a simple declarative and functional style helps us understand what we are doing. React is the most popular library that allows this style (when used correctly), so that is what we will use on day 2 and 3 of this course.

Day 1 starts with an introduction to how we use functions in JavaScript, both with the current and new language features making its way into the standard (EcmaScript2015/ES6). This part is more examples and theory. Then we will proceed to talk about some of the most useful built-in functions in JavaScript: map, filter and reduce, all of which are functions defined on Array that returns either a new Array or a new value based on on the functions you pass to them. These functions enable a more declarative style where you instead of imperatively tell the computer to loop, you state your intention by e.g. mapping a list of values to a new list of different values, filter an array based on some condition and return a new one with only those elements, or finally reduce a list of values to a single value (e.g. a sum of all the values).

After you have made a few functions yourself using map, filter and reduce, you will try your hand at a more involved case assignment. In this part you will combine a number of functions to construct representations of HTML elements. These elements can be combined and nested just like in regular HTML. Then you will implement a few functions that transform these JavaScript descriptions into HTML and render it to the DOM (in the browser so you can see the results). This will provide you with a basis for understanding how libraries like React really works (they are actually quite simple ;)).

Finally, if you have time, we have some assignments on more advanced functional programming concepts like composition and currying. Understanding these concepts is not in any way required for the next couple of days. In fact, if you follow along in part 1 and complete most of the assignments in part 2, you are more than ready for the adventures of React and Redux.

Remember, we are here to help you learn. Do not hesitate to ask questions. We will walk around and help you with the assignments. If a part is difficult, please tell us, or just skip it. We will provide a summary/solution before we proceed to the next part.

## Part 1 - Introduction to functions

Basic functions [jsbin](http://jsbin.com/yazuho/edit?js,output)

Basic functions in ES6 [jsbin](http://jsbin.com/ziyuju/edit?js,console)

Other features in ES6 [jsbin](http://jsbin.com/vomeri/edit?js,console)

## Part 2 - Map, filter, reduce

## Introduction to some jargon

Functional programmers love to talk fancy about all the cool features that they use, so we should explain some of them.

### Imperative vs. declarative
Imperative means telling "this is how you do it". For example in order to find the largest number in a list, you will go through the list at index n in the list, check if this value is larger than the previous largest, update the largest value it is and stop when n is equal to the list length minus 1. This type of programming is prone to errors like "off by one", and requires more code than declarative solutions.

Declarative means declaring what we want to achieve, rather than how. By using well-named functions, we can clearly describe our intents through well-established and tested abstractions. Instead of looping through a list, we would call a function findLargest(list) that return the largest number. This function can then again be implemented with other functions, like Array.reduce, which we will cover last in this part.

This part will cover the built-in functions map, filter and reduce that Array provides. We will first show you how they look in an imperative style, and then using a declarative style.

### First-class functions
Unlike Java, functions in JavaScript can be put in variables. They can also be passed as arguments to other functions, so that the function can delegate some of its behavior to the arguments. Functions can even return functions! We call them function factories, because the create functions. All of this means that functions are first-class citizens, treated like every other part of the language, and not like some special bastards.

### Higher-order functions
This is a fancy name for what we just said functions could do: They can take other functions in as arguments and even return other functions. We will see later why this is useful.

### Pure functions
Functions that do not change anything outside of the function itself. They have no side-effects. Given the same arguments, they always return the same thing. A function that stores a record in the database is not pure. A function that accepts an array and returns the sum of all the elements is pure. These are the best functions.

### Filter
Filter is a higher-order function that takes an array and a predicate function, and returns a new array with the values that the predicate function returns true for. An example is to remove all objects in an array with odd index. This could be done using a traditional for-loop.

#### How it looks with a traditional for-loop

```javascript
function removeOddIndicesFor(array) {
        var newArr = [];
        for (var i = 0; i < array.length; i++) {
            if (i % 2 === 0) {
                newArr.push(array[i]);
            }
        }
        return newArr;
    }

//removeOddIndicesFor([0,1,2,3,4]) === [0,2,4]
```

But for-loops involve alot of manual steps, which makes it error prone. Thankfully, javascript have a `filter` function on `Array.prototype`. For each iteration of filter it invokes the function with three arguments: the current value, the current index, the entire collection. So we can write it like this instead:

#### Look how clean it is using Array.filter
```javascript
function removeOddIndices(array) {
      return array.filter((val, index, collection) => index % 2 === 0);
    }

//removeOddIndices([0,1,2,3,4]) === [0,2,4]
```

### Map
Map is a higher-order function that takes an array and a function, and returns a new array with the given function applied to each element of the original array. An example is to square all element in a list. This could also be done using a for-loop, or by using the `map` function, which is also available on `Array.prototype`.

#### How it looks with a traditional for-loop

```javascript
function squareFor(numbers) {
      var newArr = [];
      for (var i = 0; i < numbers.length; i++) {
        newArr.push(numbers[i] * numbers[i]);
      }
      return newArr;
    }

//squareFor([2,3,4]) === [4,9,16]
```
#### How it looks using Array.map
```javascript
function square(numbers) {
      return numbers.map((value, index, collection) => value * value);
    }

//square([2,3,4]) === [4,9,16]
```

#### [Tasks](http://jsbin.com/tetevo/edit?js,console)

### Reduce
The last function we will look at for now is reduce. Reduce applies a function against an accumulator and each value of the array to reduce it to a single value. Reduce is different from map and filter in that it returns a value rather than a collection. However, the value could also be a collection.

A classic example  is to sum all numbers in an array. This can be achieved using a classic for loop:
#### Example for-loop
```javascript
function sumFor(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
```
This could also be done using reduce:

#### How it looks using Array.reduce
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
#### [Demonstration](https://jsbin.com/mocohi/edit?js,console)
#### [Tasks](https://jsbin.com/basuxog/edit?js,console)

## Part 3 - Case study: Making HTML with functions

[Tasks](https://jsbin.com/pigadel/edit?js,output)

In this assignment you will create a simple web app by using functions to create descriptions of HTML elements (inspired by [Hyperscript](https://github.com/dominictarr/hyperscript)). We will use a similar approach as React where HTML elements are represented by plain JavaScript objects, and only later transformed to actual HTML. This way we can construct an entire app just using nested functions that return objects representing the element itself and all its child elements. In the assignments you will find a function for creating these descriptions along with helper functions for creating the most common elements, like div(), ul() etc.

### Object structure for HTML elements

```javascript
{
  type: 'div',
  props: {
    class: 'highlighted'
  },
  children: [{
    type: 'span',
    children: 'hello',
  }]
}
```
The type key contains the node name of this element, e.g. div, span, ul and li. The props key is an object that contains all the attributes this HTML element will have e.g. class, onclick, disabled and so on. The children key will contain an array of child elements that are objects of the same structure as the parent, so that we can create e.g. `<div><span>Hello</span></div>`.

```javascript
div({ class: 'highlighted' }, span('hello'))

const heroes = ul(
  li('Santa Claus'),
  li('Batman')
)

const submitButton = buttonText => button({ onclick: 'myFunction()'}, buttonText)

div(
  h1('My awesome app'),
  heroes,
  submitButton('Yes I am')
)
```

## Part 4 - Advanced functions

### Function factories
Functions that return other functions.
```javascript
function makeAdder(arg) {
  return function(arg2) {
    return arg + arg2;
  }
}

const twoAdder = makeAdder(2);
//twoAdder = function(arg2){
//              return 2 + arg2;
//      }

//twoAdder(8) === 10
```

### Composition
Composition chains together functions to create a new function. The compose function is a function factory.
f ∘ g = f(g(x))

```javascript
const result = add1(square(5))
const addToSquare = x => compose(add, square)(x)
result === addToSquare(5) === 26 // > true

// Simple implementation (supports only two functions)
function compose(f, g) {
  return function(...args) {
    return f(g(...args))
  }
}

// Advanced implementation (supports arbitrary number of functions)
function compose(...funcs) {
  return (...args) => {
    if (funcs.length === 0) {
      return args[0]
    }

    const last = funcs[funcs.length - 1]
    const rest = funcs.slice(0, -1)

    return rest.reduceRight((composed, f) => f(composed), last(...args))
  }
}
```

### Partial application
It is possible to partially apply arguments to functions. Then we get a new function with these partial arguments "pre-filled", so that we can call the function with only the rest of the arguments. This can be achieved using the built-in function "bind" that exists on every function in JavaScript. Note that bind takes a context as the first argument. The value of the context is accessible in the function with the keyword "this". In this course we do not need to worry about the context, so we can always pass null as the first parameter when you use bind.

```javascript

function plus(a, b) {
      return a + b;
}
// Now, let's bind the first of these parameters, `a`, to
// the value 2.
const addTwo = plus.bind(null, 2);
//addTwo = function(b){
//              return 2 + b;
//      }

//addTwo(2) === 4
```
### Currying
A curried function is a function that will return a new function until it receives all of its arguments. You can think of it as automatic partial application.

```javascript
function curriedAdder(first, second) {
      if (second === undefined) {
        return (second) => first + second
      }
      return first + second;
    };
  };

const twoAdder = curriedAdder(2);
//twoAdder = second => 2 + second;
//twoAdder(8) === 10;
//curriedAdder(2,8) === 10;

```

#### [Tasks](http://jsbin.com/keqoha/edit?js,console)
