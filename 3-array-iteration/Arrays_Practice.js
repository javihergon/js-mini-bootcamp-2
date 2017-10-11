// # Part II: Arrays

// Before getting started, make sure that you have a JavaScript console open (like <a href="http://www.repl.it/languages/javascript" target="_blank">repl.it</a>), so you can complete these exercises.

// ## Exercises

// ### Basic Requirements

// #### Creating Arrays

// 1. Using the array: `["cat", "fox", "dog", "monkey"]`, what is the index of:

//   + "dog"?
//   + "monkey"?
//   + "cat"?

// 2. Fix the syntax/style in the following arrays:

//   ```js
//   [1, 3, 4, 7, 9]
//   ["the", "quick", "brown","fox", "jumped","over", "the lazy", "dog"]
//   [true, false, true]
//   ```

// 3. Create arrays in the *global scope* of your program consisting of strings that represent:

//   + Your favorite TV shows/movies
//   + Names of people you know/care about
//   + Favorite sports/activities

// #### Accessing Array Elements

// 1. Using the arrays that you created in the last exercise, use the console to access:

//     + First elements,
//     + Last elements,
//     + Other elements!

// 2. Write a function `first` that takes an array as an argument and returns the
//   first element in that array.

// 3. Write a function `last` that takes an array as an argument and returns the
//   *last* element in the array. **Hint:** What is the relationship between the
//   *index* of the last element in the array and the *length* of the array?

// #### Modifying Arrays

// 1. Using `push` and `unshift`, make this array contain the
//   numbers from zero through seven:

//   ```js
//   var arr = [2, 3, 4];
//   // your code here
//   arr; // => [0, 1, 2, 3, 4, 5, 6, 7]
//   ```

// 2. What is *returned* by `push`? Before throwing this into the console, form a
//   hypothesis about what you think the return value will be:

//   ```js
//   var arr = [5, 7, 9];
//   arr.push(6); // => ???
//   ```

//   Were you correct? What is the returned by `push`? Does `unshift` work in the
//   same way?

// 3. We can use the *assignment operator* (`=`) to replace elements in arrays with
//   other ones like so:

//   ```js
//   var animals = ['dog', 'elephant', 'zebra']
//   // let's replace 'dog' with 'hippo'
//   animals[0] = 'hippo';
//   animals; // => ['hippo', 'elephant', 'zebra']
//   ```

//   Using the same principle, perform the following:

//   ```js
//   // 1. Change all odd numbers to be those numbers multiplied by two:
//   var numbers = [4, 9, 7, 2, 1, 8];
//   // TODO: your code here
//   numbers; // => [4, 18, 14, 2, 2, 8]

//   // 2. Fix the typos by replacing each element with a correctly spelled version
//   var places = ['snfranisco', 'oacklannd', 'santacrus']
//   // TODO: your code here
//   places; // => ['san francisco', 'oakland', 'santa cruz']
//   ```

// ### More Practice

// 1. Write a function called `nth` that accepts an array and an index as
//   parameters, and returns the element at that index.

//   ```js
//   function nth(array, index) {
//     // TODO: your code here
//   }
//   var animals = ['dog', 'cat', 'gerbil'];
//   nth(animals, 2); // => 'gerbil'
//   nth(animals, 1) === animals[1]; // => true
//   ```

// 2. Write a function `rest` that returns all the elements in the array *except*
//   for the first one. **HINT:** Read about the `slice` method on
//   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
//   and/or experiment with `slice` at the console like so:

//   ```js
//   var numbers = [3, 2, 7, 5];
//   numbers.slice(0);
//   numbers.slice(1);
//   numbers.slice(2);
//   numbers.slice(0, 2);
//   ```

// 3. Write a function `butlast` that returns all of the elements in the array
//   *except* for the last one (you may want to use `slice` for this one as well).

// 4. Complete the function `cons` that accepts an element and an array, and
//   returns an array with the element added to the *front* of the array:

//   ```js
//   function cons(x, array) {
//     // your code here
//   }
//   ```

// 5. Complete the function `conj` that accepts an array and an element, and
//   returns an array with the element added to the *end* of the array:

//   ```js
//   function conj(array, x) {
//     // your code here
//   }
//   ```

// 6. What benefit(s) might there be to using functions like `cons` or `conj` over
//   `unshift` or `push`?

// 7. Try the following in a console:

//   ```js
//   var arr = [];
//   arr[7] = "Hello."
//   arr; // => ???
//   ```

//   What is the value of `arr` after assigning an element to its seventh index?
//   Explain the result in plain English.

// ### Advanced

// 1. Without running the below function, use a whiteboard to figure out what it
//   should return by repeatedly expanding function invocations:

//   ```js
//   function mystery(array) {
//     if (array.length === 0) {
//       return [];
//     }
//     return conj(mystery(rest(array)), first(array));
//   }
//   ```

// 2. Using `first`, `rest`, `conj` and/or `cons`, write functions that accomplish
//   the following:

//   + `sum` all the elements of an array
//   + Given an array, returns a new array with each element *squared*
//   + Given an array of numbers, returns a new array of just the *even* numbers

//   **HINT:** After figuring out how the `mystery` function works above, use it
//   as a reference for how to write this type of function.

// -------------------------------------------------------------------------------------------------------
// Array-iteration

// # Part III: Array Iteration

// Before getting started, make sure that you have a JavaScript console open (like <a href="http://www.repl.it/languages/javascript" target="_blank">repl.it</a>), so you can complete these exercises.

// ## Exercises

// Try to write *all* of the exercises using **both** the `for` loop *and* `while`
// loop.

// ### Basic Requirements


// 1. Write a function `sum` that computes the sum of the numbers in an array.

// 2. Write a function `max` that accepts an array of numbers and returns the
//   *largest* number in the array.

// 3. Try the following at a console:

//   ```js
//   "the quick brown fox jumped over the lazy dog".split(" ");
//   "Hello, world!".split("")
//   "1,2,3,4,5,6".split(",")
//   ```

//   What is returned by `split` (You can read more about it
//   [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)),
//   and how does it work?

//   Use `split` to write a function `longestWord` that takes a string as an
//   argument and returns the longest word.

var str = 'This is the longest word a';

function longestWord(str) {
  var arr = str.split(' ');
  var longest = '';
  arr.forEach(function(each) {
    if(each.length > longest.length){
            longest = each;
    }
  // });
  // for(var i = 0; i < arr.length; i++){
  //   if(arr[i].length > longest.length){
  //     longest = arr[i];
  //   }
  // }
  });
    return longest;
}
longestWord(str);

// 4. Write a function `remove` that accepts an *array* and an *element*, and
//   returns an array with all ocurrences of *element* removed.

function remove(array, element) {
  // your code here
  var removed = array.filter(function(num) {
    return num !== element;
  });
  return removed;
}
remove([1, 3, 6, 2, 3], 3); // => [1, 6, 2]
  
// 5. Write a function `evens` that accepts an array as an argument, and returns
//   an array consisting of all of the *even* numbers in that array.

var array = [1, 3, 6, 2, 3];

function each(coll, callback) {
      if(Array.isArray(coll)) {
        for(var i= 0; i < coll.length; i++) {
        callback(coll[i], i);
        }
      } else {
        for(var key in coll) {
          callback(coll[key], key);
        }
      }
}

function filter(array, predicate) {
      var arr = [];
      each(array, function(item) {
            if(predicate(item)) {
              arr.push(item);
            }
      });
      return arr;
}

function events(array){
  return filter(array, function(element){
            return element % 2 === 0;
  });
}
events(array);

// ### More Practice

// 1. Write a function called `average` that takes an array of numbers as a
//   parameter and returns the *average* of those numbers.

function reduce(collection, callback, start) {
      var acc = start;
      each(collection, function(item) {
          acc = acc + callback(item, start);
      });
      return acc;
}

function sum(newArray){
  return reduce(newArray, function(a, b) {
        return (a + b);
  }, 0);
}

var newArray = [1, 3, 6, 2, 18];
console.log(sum(newArray));


function average(func, array) {
   return func / array.length;
}

console.log(average(sum(newArray), newArray));

// 2. Write a function called `min` that finds the *smallest* number in an array of
//   numbers.

function min(numbers) {
  var smallest = numbers[0];
    each(numbers, function(num) {
          if(num < smallest) {
            smallest = num;
          }
  });
 return smallest;
}
console.log(min([1, 3, 6, 2, 18]));

// 3. Write a function `shortestWord` that works like `longestWord`, but returns
//   the *shortest* word instead.

function shortest(str) {
  var arrStr = str.split(' ');
  var shortest = arrStr[0];
   each(arrStr, function(item) {
        if(item.length < shortest.length){
          shortest = item;
        }
  });
  return shortest;
}
console.log(shortest('This is the shortest string'));

// 4. Write a function `countChar` that takes two arguments: any string, and a
//   *character* (string of one letter), and returns an object with the key as each letter and as value the number of 
//   times that the character occurs in the string.

var myString = 'This is the shortest string';
 
function countChat(str) {
  var myObj = {};
  for(var i = 0; i < str.length; i++) {
    var letter = str[i];
        if(myObj[letter]) {
             myObj[letter] = myObj[letter] + 1;
        } else {
          myObj[letter] = 1;
        }
  }
  return myObj;
}
console.log(countChat(myString));

// 5. Write a function `evenLengthWords` that takes an array of *strings* as an
//   argument, and returns an array of just the words that have an even length.

var string = 'this is an array if strings and I am looking for the even length strings';
var arrayStr = string.split(' ');

// function evenLengthWords(arrayStr){
//     var evenLegnth = arrayStr.filter(function(str){
//         return str.length % 2 === 0;
//   });
//   return evenLegnth;
// }
// console.log(evenLengthWords(arrayStr));

// ### Advanced

// 1. Read about the `join` method on
//   [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
//   and use it to implement a function that accepts a string as an argument and
//   returns that string *reversed*.

var string = 'this is an array of strings and...';
function reversed(str) {
    var reversedStr = str.split('').reverse().join('');
   return reversedStr;
}
reversed(string);

// 2. Write a function `keep` that "keeps" certain elements in an array. The
//   function will need to take *two* arguments, an array, and something else --
//   the second argument will be what is used to determine which elements to keep.

function keep(array, callback) {
  var result = [];
        for(var i = 0; i < array.length; i++) {
          if(callback(array[i])) {
            result.push(array[i]);
          }
      
      // each(array, function(item){
      //       if(callback(item)){
      //         result.push(item);
      //       }
      // });
  return result;
}

function even(element) {
    return element % 2 === 0;
}
console.log(keep([1, 3, 6, 2, 18], even));

//   You should be able to use this function to write `evens`, `evenLengthWords`,
//   a hypothetical `odds` function, or `oddLengthWords` *without changing the
//   `keep` function*.

function evenLengthWords(element) {
      return element.length % 2 === 0;
}
console.log(keep(arrayStr, evenLengthWords));

////////////////////////////////////////////////////////////////////////////////////////////////////

// Part II: Arrays

// Before getting started, make sure that you have a JavaScript console open (like repl.it), so you can complete these exercises.

// Exercises

// Basic Requirements

// Creating Arrays

// Using the array: ["cat", "fox", "dog", "monkey"], what is the index of:

// "dog"?
// "monkey"?
// "cat"?
// Fix the syntax/style in the following arrays:

// [ 1, 3 4 7,9, ]
// "the""quick""brown","fox" "jumped","over" the lazy, "dog",  ]
// [true false,true
// Create arrays in the global scope of your program consisting of strings that represent:

// Your favorite TV shows/movies
// Names of people you know/care about
// Favorite sports/activities
// Accessing Array Elements

// Using the arrays that you created in the last exercise, use the console to access:

// First elements,
// Last elements,
// Other elements!
// Write a function first that takes an array as an argument and returns the first element in that array.

// Write a function last that takes an array as an argument and returns the last element in the array. Hint: What is the relationship between the index of the last element in the array and the length of the array?

// Modifying Arrays

// Using push and unshift, make this array contain the numbers from zero through seven:

// var arr = [2, 3, 4];
// // your code here
// arr; // => [0, 1, 2, 3, 4, 5, 6, 7]
// What is returned by push? Before throwing this into the console, form a hypothesis about what you think the return value will be:

// var arr = [5, 7, 9];
// arr.push(6); // => ???
// Were you correct? What is the returned by push? Does unshift work in the same way?

// We can use the assignment operator (=) to replace elements in arrays with other ones like so:

// var animals = ['dog', 'elephant', 'zebra']
// // let's replace 'dog' with 'hippo'
// animals[0] = 'hippo';
// animals; // => ['hippo', 'elephant', 'zebra']
// Using the same principle, perform the following:

// // 1. Change all odd numbers to be those numbers multiplied by two:
// var numbers = [4, 9, 7, 2, 1, 8];
// // TODO: your code here
// numbers; // => [4, 18, 14, 2, 2, 8]

// // 2. Fix the typos by replacing each element with a correctly spelled version
// var places = ['snfranisco', 'oacklannd', 'santacrus']
// // TODO: your code here
// places; // => ['san francisco', 'oakland', 'santa cruz']
// More Practice

// Write a function called nth that accepts an array and an index as parameters, and returns the element at that index.

// function nth(array, index) {
//   // TODO: your code here
// }
// var animals = ['dog', 'cat', 'gerbil'];
// nth(animals, 2); // => 'gerbil'
// nth(animals, 1) === animals[1]; // => true
// Write a function rest that returns all the elements in the array except for the first one. HINT: Read about the slice method on MDN and/or experiment with slice at the console like so:

// var numbers = [3, 2, 7, 5];
// numbers.slice(0);
// numbers.slice(1);
// numbers.slice(2);
// numbers.slice(0, 2);
// Write a function butlast that returns all of the elements in the array except for the last one (you may want to use slice for this one as well).

// Complete the function cons that accepts an element and an array, and returns an array with the element added to the front of the array:

// function cons(x, array) {
//   // your code here
// }
// Complete the function conj that accepts an array and an element, and returns an array with the element added to the end of the array:

// function conj(array, x) {
//   // your code here
// }
// What benefit(s) might there be to using functions like cons or conj over unshift or push?

// Try the following in a console:

// var arr = [];
// arr[7] = "Hello."
// arr; // => ???
// What is the value of arr after assigning an element to its seventh index? Explain the result in plain English.

// Advanced

// Without running the below function, use a whiteboard to figure out what it should return by repeatedly expanding function invocations:

// function mystery(array) {
//   if (array.length === 0) {
//     return [];
//   }
//   return conj(mystery(rest(array)), first(array));
// }
// Using first, rest, conj and/or cons, write functions that accomplish the following:

// sum all the elements of an array
// Given an array, returns a new array with each element squared
// Given an array of numbers, returns a new array of just the even numbers
// HINT: After figuring out how the mystery function works above, use it as a reference for how to write this type of function.

