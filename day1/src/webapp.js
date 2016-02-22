/* jshint esnext:true */

/*
Part 3
Creating a simple web app using functions.
==========================================
In this part you will construct a simple web app for displaying a contact list just using functions.
This assignment will provide a foundation for understanding how React works in the next series of the course.

Please implement the required functions below and test your app using the Output pane as you go along.

*/

/*
Description
-----------
The el function creates plain JavaScript objects describing HTML elements (and nested elements).
The type argument should be a valid HTML node name, like div or span.
The second argument can be either an object with html attribute names as keys and the values for these attributes as values, e.g. {class: 'your-class}, or the first child of this element (also created using el). All following arguments are treated as children.

Usage
-----------
el('div', {class: 'highlight'}, el('span', 'hello'))
returns
{type: 'div', props: {class: 'highlight'}, children: [{type: 'span', children: ['hello']}]}
*/

function el(type, ...rest) {
  if (rest[0].type || rest.length === 1) {
    return { type, children: rest }
  }
  return { type, props: rest[0], children: rest.slice(1) }
}

/*
The following helper functions can be used as shorthands to create descriptions of the most common elements.
*/

function div(...rest) {
  return el('div', ...rest)
}

function span(...rest) {
  return el('span', ...rest)
}

function ul(...rest) {
  return el('ul', ...rest)
}

function li(...rest) {
  return el('li', ...rest)
}

function h1(...rest) {
  return el('h1', ...rest);
}

function button(...rest) {
  return el('button', ...rest);
}

/**
 * An unordered list of optionally filtered and highlighted contacts.
 * Use Array.filter to filter the contacts.
 * Use Array.map to create li tags for the contacts.
 *
 * @param {array} persons - A list of person objects.
 * @param {function} highlight - A function that determines if a contact should be highlighted.
 * @param {function} filter - A function to filter the contact list.
 * @return {object} - An object representing this part of the app created by using el and its helper
 * functions.
 */

function Contacts(persons, highlight, filter) {

}

/**
 * This function will build the total description of your app, again using the element helper functions and
 * the Contacts function.
 * It shall contain a header (h1) with the app name 'Contacts', the contact list itself (Contacts), and
 * three buttons, one for each of the filter functions below (showPeopleOver30, showAll) and one for the
 * highlight function highlightNamesThatStartWithP.
 *
 * Tip: Use props to add onclick attributes to the buttons, onclick="yourFilterFunction()".
 *
 * @param {array} persons - A list of person objects.
 * @param {object} - An object containing a highlight and filter function.
 * @return {object} - An object representing the app.
 */

function app(persons, { highlight, filter } = {}) {

}

const contacts = [{name: 'Tommy', age: 40}, {name: 'John', age: 10}, {name: 'Peter', age: 29}, {name: 'Paul', age: 31}]

/**
 * This is a helper function that will be used by render to render the attribute list of an element.
 *
 * @param {object} props - The props to render.
 * @return {string} - The attributes as a string, e.g. class="highlight" id="foo".
 */

function renderProps(props = {}) {

}

/**
 * Create an HTML string for the entire app, starting with the top element (node).
 *
 * Tip: Start by considering the simplest case (the node is a string).
 * Tip: Map the children to HTML using Array.map and the render function again.
 * Tip: Array.join can be used to join all elements of an array.
 *
 * @param {object} node - An element description to turn into HTML. This element will typically have
 * children, which in turn have children, so you will need to call this function again from within itself
 * using recursion.
 * @return {string} - The node as HTML.
 */

function render(node) {

}

/**
 * Create an HTML string for the entire app, starting with the top element (node).
 *
 * @param {string} html - A string containing the html to render to the DOM.
 */

function DOM(html) {
  document.querySelector('main').innerHTML = html;
}

/**
 * This function should call app() with an appropriate filter function, call render with the result, and
 * finally DOM() to update the DOM.
 */

function showPeopleOver30() {

}

/**
 * This function should call app() without any filter (i.e. always return true), call render with the
 * result, and finally DOM() to update the DOM.
 */

function showAll() {

}

/**
 * This function should call app() with an appropriate highlight function, call render with the result, and
 * finally DOM() to update the DOM.
 */

function highlightNamesThatStartWithP() {

}

/**
 * Renders the app for the first time, before any buttons are pressed.
 */

DOM(render(app(contacts)));
