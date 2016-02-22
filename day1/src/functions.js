/**
 *
 * Simple functions.
 * ===========================================================
 *
 */

// Declaring a named function:

function add(a, b) {
  return a + b
}

// Invoking a function with arguments:

add(2, 2)

// JavaScript doesn't care if you include all the arguments:

console.log(add(2)) // > NaN

// which can be used to our advantage:

function print(name, salutation) {
  if (salutation) {
    console.log(salutation + '' + name)
  } else {
    console.log(name)
  }
}

print('Peter', 'Mr.') // > Mr. Peter
print('Paul') // > Paul

// a function can be referred to by its name and assigned to variables

var theSameAdd = add;
theSameAdd(2, 2) // > 4

// that means we also can pass them as arguments to other functions

function increaseWithTen(num, adder) {
  return adder(num, 10)
}

increaseWithTen(2, add) // 12

// Functions don't need names

(function (name) {
  console.log(name)
})('Andy')
// > Andy

// so we can assign anonymous functions to variables

var multiply = function (a, b) {
  return a * b
}

// and then invoke the function by using the variable name

multiply(3, 3)
// > 9

function thinkHard() {
  var random = Math.random() * 10;
  return random > 5 ? random : -1;
}

function compute(success, error) {
  var result = thinkHard()
  if (result > 0) {
    success(result)
  } else {
    error('Booo')
  }
}

compute(
  function (result) {
    console.log(add(2, result))
  },
  function (result) {
    console.log(result)
  }
)
// > 8
// > Booo

// a function can have side effects (changes something outside it):

var num = 3
function changeNum() {
  num = num + 2
}

changeNum()
changeNum()
console.log(num)
// > 7

// or the function can be pure and have no side effects:

function pureChangeNum(num) {
  return num + 2
}

// Always prefer pure functions when possible. They are easier to reason about // and test.

/**
 *
 * Anonymous functions in the new version of JavaScript (ES6)
 * ===========================================================
 *
 */

// The new version af JavaScript called EcmaScript2015 (or ES6 for short)
// allows a simpler way to create anonymous (lambda) functions:

() => {
  return 'hello'
}

// we call them 'fat arrow functions'

// we can omit the brackets if we only have on statement which will be the
// return value:

() => 'hello'

// we can omit the first parentheses if we only have one argument

name => 'hello ' + name

// but we need the parentheses if we have more than one:

(name, salutation) => 'hello ' + salulation + ' ' name

// calling compute function from earlier becomes simpler:

compute(
  result => console.log(add(2, result)),
  error => console.log(error)
)

// we can also assign these lambda functions to variables:

const add = (a, b) => a + b

// and invoke them as usual:

add(2, 3)

// notice we used const instead of var. This means add can never be reassigned.

add = null; // > Error

// You should prefer using const when using ES6

/**
 *
 * Other nice things in ES6
 * ====================================================================
 *
 */

// Destructuring objects

const headAndTail = array => ({
  head: array[0],
  tail: array.slice(-1)[0]
})

// headAndTail returns an object with two keys: the first and last element of
// the array passed to it:

const { head, tail } = headAndTail(['Paul', 'Peter'])
console.log('head is ' + head)
console.log('tail is ' + tail)

// now we have two variables called head and tail containing the values for
// these keys in the returned object. This is equivalent to:

const result = headAndTail(['Paul', 'Peter'])
const head = result.head
const tail = result.tail

// notice also that we used parentheses around the object that is returned
// from headAndTail. This is required when returning an object directly, but we
// could have done:

array => {
  return {
    head: array[0],
    tail: array.slice(-1)[0]
  }
}

// The spread operator ... (three dots) can be used to convert from a
// comma separated argument list to an array, and back again

function types(firstArg, ...theRestOfTheArgs) {
  console.log(firstArg)
  console.log(theRestOfTheArgs[1])
}

types('hello', 'my name', 'is John')
// > hello
// > is John

types('hello', ...['my name', 'is John'])
// > hello
// > is John

/**
 * There are many, many more new features in ES6 that you can explore on your
 * own, and we encourage you to do so later :)
 *
 */
