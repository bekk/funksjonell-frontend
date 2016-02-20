# Day 1 - functional programming in JavaScript

## Higher-order functions
### Map
Map is a higher-order function that takes an array and a function, and returns a new array with the given function applied to each element of the original array. 

#### Example: for-loop

```javascript
function squareFor(...rest) {
      var newArr = [];
      for (var i = 0; i < rest.length; i++) {
        newArr.push(arr[i] * rest[i]);
      }
      return newArr;
    }
```
#### Example: map
```javascript
function square(...rest) {
      return rest.map(function(value, index, collection) {
        return value * value;
      });
    }
```

### Filter
Filter is a higher-order function that takes an array and a predicate, and returns a new array with the values that the predicate accepts.

#### Example: for-loop

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
```
#### Example: filter
```javascript
function removeOddIndices(array) {
      return array.filter((val, index) => index % 2 === 0);
    }
```

#### [Tasks](http://jsbin.com/tetevo/7/edit?js,console)

### Reduce
The last applicative function we will look at for now is reduce. Reduce applies a function against an accumulator and each value of the array to reduce it to a single value.
Reduce is different from map and filter in that it returns a value rather than a collection. However, the value could also be a collection. 

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

#### Example reduce
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
```

#### [Tasks](https://jsbin.com/yiwoku/edit?js,console)

## Making HTML with functions

https://jsbin.com/mugusi/edit?js,output

In this assignment you will create a simple web app by using functions to create HTML. We will do this in two parts. First you'll create some simple functions that return object descriptions of HTML elements like div and span. Then you'll combine these functions to make a tree of objects each describing itself and its children. Finally you'll make a few functions that will transform the object tree to HTML and then render that to the document.

### Object structure for HTML elements

```javascript
{
  type: 'div',
  props: {
    class: 'highlighted'
  },
  children: []
}
```
The type key contains the node name of this element, e.g. div, span, ul and li. The props key is an object that contains all the attributes this HTML element will have e.g. class, onclick, disabled and so on. The children key will contain an array of child elements that are objects of the same structure as the parent, so that we can create f.ex `<div><span>Hello</span></div>`.

#### Assignment: Create a function for describing HTML elements
```javascript
function el(type, ...rest) {

}
el('div', {class: 'highlighted'}, el('span', 'Hello'));
// {type: 'div', props: {class: 'highlighted'}, children: [{type: 'span', children: ['Hello']}]}
```
#### Assignment: Create some helper functions for creating common elements
```javascript
function div(...rest) {

}
function span(...rest) {

}
function ul(...rest) {

}
```
Hint: Just call the el function with the correct type and pass rest as ...rest.

## More functions
### Function factories
Functions that return other functions.
```javascript
function makeAdder(arg) {
  return function(arg2) {
    return arg + arg2;
  }
}

const twoAdder = makeAdder(2);
//twoAdder(8) === 10
```
### Partial application
It is possible to partiall apply arguments to functions.
```javascript
function addOne() {
      return this + 1;
}

const fourPlusOne = addOne.bind(4)
//fourPlusOne() === 5

function plus(a, b) {
      return a + b;
}
// Now, let's bind the first of these parameters, `a`, to
// the value 2.
const addTwo = plus.bind(null, 2);
//addTwo(2) === 4
```
### Currying
### Composition
### 
