/* jshint esnext:true */

function el(type, ...rest) {
  if (rest[0].type || rest.length === 1) {
    return { type, children: rest }
  }
  return { type, props: rest[0], children: rest.slice(1) }
}

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

const Contacts = (persons, highlight, filter) => ul(
  ...persons.filter(filter || () => true).map(person => li(
    highlight && highlight(person) ? {class: 'highlight'} : {}, person.name
  ))
)

const app = (persons, { highlight, filter } = {}) => div(
  h1('Contacts'),
  button({onclick: 'showAll()'}, 'Show all persons'),
  button({onclick: 'showPeopleOver30()'}, 'Show persons over 30'),
  button({onclick: 'highlightNamesThatStartWithP()'}, 'Highlight names starting with P'),
  Contacts(persons, highlight, filter)
)

const contacts = [{name: 'Tommy', age: 40}, {name: 'John', age: 10}, {name: 'Peter', age: 29}, {name: 'Paul', age: 31}]

function showPeopleOver30() {
  DOM(render(app(contacts, {filter: person => person.age > 30})))
}

function showAll() {
  DOM(render(app(contacts)))
}

function highlightNamesThatStartWithP() {
  DOM(render(app(contacts, {highlight: person => person.name.startsWith('P')})))
}

function renderProps(props = {}) {
  return ' ' + Object.keys(props).map(key => key + '=' + props[key]).join(' ') + ' '
}

function render(node) {
  if (typeof node === 'string') {
    return node
  }
  return '<' + node.type + renderProps(node.props) + '>' + node.children.map(render).join('') + '</' + node.type + '>'
}

function DOM(html) {
  document.querySelector('main').innerHTML = html;
}

DOM(render(app(contacts)));
