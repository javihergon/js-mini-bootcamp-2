// 1.  The function `clean` should accept an object as an argument and return a new
//   object that has all of the key/value pairs of its parameter except for those
//   that begin with `_`.

var dirtyObject = {
    _fht: 192492,
    name: "Alyssa P. Hacker",
    age: 26,
    _byz: 939205,
    _ttrs: 510852
};

function clean(obj) {
  var newObj = {};
    for(var key in obj) {
          if(key[0] !== '_') {
            newObj[key] = obj[key];
          }
      }
  return newObj;
  }
clean(dirtyObject); // => {name: "Alyssa P. Hacker", age: 26}

// 2. Write a function `removeOddValues` that takes an object as an argument and
//   returns an object with all key/value pairs removed for which the value holds
//   an *odd number*. You'll need to use the \`typeof\` operator to first check that
//   the values are numbers:

function removeOddValues (object) {
  var noOddValues = {};
    for(var key in object) {
      if(typeof object[key] === 'number') {
        if(object[key] % 2 === 0) {
          noOddValues[key] = object[key];
        }
      } else {
        noOddValues[key] = object[key];
      }
    }
  return noOddValues;
}

removeOddValues (dirtyObject);

// 3. Write a function `countWords` that, when given a string as an argument,
//   returns an *object* where *keys* are the words in the string, and *values*
//   are the number of occurrences of that word within the string:

function countWords(s) {
  var obj = {};
  var array = s.split(' ');
    for(var i = 0; i < array.length; i++) {
      if(obj[array[i]] === undefined) {
        obj[array[i]] = 1;
      }else {
        obj[array[i]] = obj[array[i]] + 1;
      }
    }
    return obj;
    }
countWords("hello hello hello"); // => {"hello": 2}
countWords("Hello hello"); // => {"Hello": 1, "hello": 1}
countWords("The quick brown brown"); // => {"The": 1, "quick": 1, "brown": 1}

// 4. Write a function `countCharacters` that, when given a string as an argument,
//   returns an object containing counts of the ocurrences of each *character* in
//   the string.

function countCharacters(s) {
  var obj = {};
  var array = s.toLowerCase().split('');
    array.forEach(function(item) {
      if(obj[item] === undefined) {
        obj[item] = 1;
      }else {
        obj[item] = obj[item] + 1;
      }
    });
    return obj;
    }
countCharacters("hello"); // => {"h": 1, "e": 1, "l": 2, "o": 1}

// 5. Write a function `select` that accepts two arguments: an object and an
//   array. The **array** should contain names of keys that will be *selected* from
//   the object:

//   ```js
  function select(obj, keys) {
    // ...
    var newObj = {};
    for(var key in obj) {
      for (var i = 0; i < keys.length; i++) {
        if(obj[keys[i]] === obj[key]) {
            newObj[key] = obj[key];
        }
      }
    }
    return newObj;
  }
select({a: 1, b: 2, c: 3}, ["a"]); // => {a: 1}
select({a: 1, b: 2, c: 3}, ["a", "c"]); // => {a: 1, c: 3}
select({a: 1, b: 2, c: 3}, ["a", "c", "d"]); // => {a: 1, c: 3}

// 5. Write a function `extends` that accepts two objects as arguments, and
//   *extends* all of the key/value pairs of the second one to the first one.

//   ```js
  function extend(obj1, obj2) {
    // ...
  for(var key in obj1) {
    for(key in obj2) {
      if(obj2[key] !== obj1[key]) {
        obj1[key] = obj2[key];
      }
    }
  }
    return obj1;
  }
extend({a: 1}, {b: 2}); // => {a: 1, b: 2}
extend({a: 1, c: 3}, {b: 2, c: 4}); // => {a: 1, b: 2, c: 4}
