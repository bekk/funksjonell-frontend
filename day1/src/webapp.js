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

const Persons = persons => ul(
  ...persons.map(person => li(
    person.isSpecial ? {class: 'highlight'} : {}, person.name
  ))
)

const app = persons => div(
  h1('Kursholdere'),
  Persons(persons),
  button({onclick: 'addPerson()'}, 'Legg til kursholder')
)

const initialPersons = [{name: 'Emil', isSpecial: true}, {name: 'Simen'}, {name: 'Øystein'}]

function addPerson() {
  initialPersons.push({name: 'New person'});
  document.querySelector('main').innerHTML = toHtml(app(initialPersons))
}

function propsToHtml(props = {}) {
  return ' ' + Object.keys(props).map(key => key + '=' + props[key]).join(' ') + ' '
}

function toHtml(node) {
  if (typeof node === 'string') {
    return node
  }
  return '<' + node.type + propsToHtml(node.props) + '>' + node.children.map(toHtml).join('') + '</' + node.type + '>'
}

document.querySelector('main').innerHTML = toHtml(app(initialPersons))
