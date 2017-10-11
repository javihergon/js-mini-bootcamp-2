// //   The function `clean` should accept an object as an argument and return a new
// //   object that has all of the key/value pairs of its parameter except for those
// //   that begin with `_`.

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

// // 2. Write a function `removeOddValues` that takes an object as an argument and
// //   returns an object with all key/value pairs removed for which the value holds
// //   an *odd number*. You'll need to use the \`typeof\` operator to first check that
// //   the values are numbers:

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

// // 2. Write a function `countWords` that, when given a string as an argument,
// //   returns an *object* where *keys* are the words in the string, and *values*
// //   are the number of occurrences of that word within the string:

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

// 3. Write a function `countCharacters` that, when given a string as an argument,
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