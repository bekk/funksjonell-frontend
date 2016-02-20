# Day 1 - functional programming in JavaScript


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
