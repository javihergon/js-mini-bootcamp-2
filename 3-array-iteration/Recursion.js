var numbers = [4, 9, 7, 2, 1, 8];

function rest(array) {
  return array.slice(1);
}

function first(array) {
  return array[0];
}
console.log(first(numbers));

function conj(array, x) {
  array.push(x);
  return array;
}

function cons(array, x) {
  array.unshift(x);
  return array;
}

function mystery(array) {
  if (array.length === 0) {
    return [];
  }
  return conj(mystery(rest(array)), first(array)); // REVERSE THE ITEMS ==> [ 8, 1, 2, 7, 9, 4 ]
}

mystery(numbers);

// Using first, rest, conj and/or cons, write functions that accomplish the following:

// sum all the elements of an array
// Given an array, returns a new array with each element squared
// Given an array of numbers, returns a new array of just the even numbers
// HINT: After figuring out how the mystery function works above, use it as a reference for how to write this type of function.

function sum(array) {
  if(array.length === 0) {
    return 0;
  }
  return first(array) + sum(rest(array));   //==> 31
}

console.log(sum(numbers));

function squared(array) {
  if (array.length === 0) {
    return [];
  }
  return cons(squared(rest(array)), (first(array) * first(array)));  //==> [ 16, 81, 49, 4, 1, 64 ]
}

console.log(squared(numbers));

function even(array) {
  if(array.length === 0) {
    return [];
  }
  return cons(even(rest(array)), (first(array) % 2 === 0 ? first(array) : "?") );   // I need to figure out ==> [ 4, '?', '?', 2, '?', 8 ]
}

console.log(even(numbers));



