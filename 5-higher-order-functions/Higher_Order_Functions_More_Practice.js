var numbers = [1, 2, 3, 15, 58, -4, 5, -6, 23];

function each(coll, callback) {
      if(Array.isArray(coll)) {
        for(var i = 0; i < coll.length; i++) {
          callback(coll[i], i);
        }
      } else {
        for(var key in coll) {
          callback(coll[key], key);
        }
      }
}

function map(coll, callback) {
  var acc = [];
  each(coll, function(item) {
    acc.push(callback(item));
  });
  return acc;
}

function filter(coll, test) {
  var acc = [];
  each(coll, function(item) {
    if(test(item)) {
      acc.push(item);
    }
  });
  return acc;
}

function reduce(coll, combine, accumulative) {
  if(accumulative !== undefined) {
    var acc = accumulative;
    each(coll, function(item) {
      acc = combine(acc, item);
    });
    return acc;
  } else {
    var result = 0;
    each(coll, function(item) {
      result = combine(result, item);
    });
    return result;
  }
}

function square(num) {
  return num * num;
}

function cube(num) {
  return num * num * num;
}
// ### More Practice

// #### Summations

// 1.  Write a function `sumByAllElementsMultipliedByFour` that takes an array as an
//     argument and returns the sum of all elements multiplied by four.

function sumByAllElementsMultipliedByFour(array) {
  var multipplied = map(array, function(num) {
        return num * 4;
  });
  return reduce(multipplied, function(a, b) {
        return a + b;
  }, 0);
}

console.log(sumByAllElementsMultipliedByFour([2, 5, 8]));

// 2.  Observe that `sumByAllElementsMultipliedByFour` is a terrible name for a
//     function &#x2013; you should also notice that `sumByAllElementsMultipliedByFour`
//     looks a lot like `sumCubes` and `sumSquares`.

//     Write a function `sumBy` that accepts two arguments: an array of numbers and
//     a *function*. The function will be invoked upon each element in the array,
//     and its result will be used to compute the sum.

//     ```js

function sumBy(numbers, f) {
      var acc = 0;
      each(numbers, function(num) {
        acc = acc + f(num);
      });
      return acc;
}
console.log(sumBy(numbers, square)); // => 30
console.log(sumBy(numbers, cube)); // => 100
console.log(sumBy(numbers, function(number) {
  return number * 4;
}));
// => 40

// 3.  How can you use `sumBy` to compute the sum of an array of
//     numbers (just the plain sum)?

function sumByPlain(array) {
      var acc = 0;
      each(numbers, function(item) {
        acc += item;
      });
      return acc;
}
console.log(sumByPlain(numbers));  // => 10

// 4.  Write a function `productBy` that works like `sumBy`, but for **products**.

function productBy(array) {
  var total = 1;
  each(array, function(num) {
    total *= num;
  });
  return total;
}
console.log(productBy(numbers));  // => 24

// #### Refactoring

// As an extended exercise, run back through your data modeling code from the past
// few days and look for opportunities to refactor your use of `for` loops using
// `each`, `map` and `filter`.

// ### Advanced

// #### Finding Patterns: Mapping

// 1.  Write a function `doubleAll` that takes an array of numbers as a parameter
//     and returns an array of all of those numbers *doubled*:

function doubleAll(array) {
  return map(array, function(num) {
    return num * 2;
  });
}
console.log(doubleAll([1, 3, 10, 4, 7]));  //=> [2, 6, 20, 8, 14]

// 2.  Write a function `halveAll` that takes an array of numbers as a parameter and
//     returns an array of all of those numbers *halved* (divided by two).

function halvedAll(array) {
  return map(array, function(num) {
    return num / 2;
  });
}
console.log(halvedAll([1, 3, 10, 4, 7]));

// 3.  Write a function `uppercaseAll` that takes an array of **strings** as a
//     parameter, and returns an array of all of those strings, but transformed to
//     *upper case*. You can use `toUpperCase` to convert a string to upper case.
//     ```js
//     "hello, world".toUpperCase(); // => "HELLO, WORLD"
//     ```

function uppercaseAll(strings) {
  return map(strings, function(string) {
    return string.toUpperCase();
  });
}
console.log(uppercaseAll(['javier', 'lives', 'in', 'los angeles']));

// 4.  You should at this point notice a similarity between all of the above
//     functions, as well as the `cubeAll` function from the warmup. These functions
//     all define what we call **mappings**; that is, they *map* from one value to
//     another.

//     ```js
//     // doubleAll maps from an array of numbers to an array of doubled numbers
//     // [1, 2, 3, 4] => [2, 4, 6, 8]


//     // halveAll maps from an array of numbers to an array of halved numbers
//     // [1, 2, 3, 4] => [0.5, 1, 1.5, 2]
//     ```

// 5.  Write a function `map` that takes two parameters: an array and a *function*
//     that, when applied to a single element, produces a new element. `map` should
//     return an *array* of all elements in the input array transformed using the
//     input function. Your function should work like this:

//     ```js
//     function map(array, f) {
//     
//     }

    map([1, 2, 3, 4], function(x) {
      return x * 2;
    });     // => [2, 4, 6, 8]

// 6.  Complete the invocations of `map` below to produce the desired output (you'll
//     need to replace `???` with a function):

//     ```js

map(["hello", "world"], function(string) {
        return string.toUpperCase();
}); // => ["HELLO", "WORLD"]

map(["HelLo", "WorLD"], function(str) {
  return str.toLowerCase();
}); // => ["hello", "world"]

map(["the", "quick", "brown", "fox", "jumped"], function(str) {
  return str.length;
}); // => [3, 5, 5, 3, 6]
 
    var people = [
      {name: "Alyssa P. Hacker", age: 26},
      {name: "Ben Bitdiddle", age: 34},
      {name: "Eva Lu Ator", age: 19},
      {name: "Lem E. Tweakit", age: 40}
    ];

map(people, function(person) {
    return person.name;
}); // => ["Alyssa P. Hacker", "Ben Bitdiddle", "Eva Lu Ator", "Lem E. Tweakit", "Allen G"]

map(people, function(person) {
  return person.name + ' is ' + person.age;
});    // => ["Alyssa P. Hacker is 26", "Ben Bitdiddle is 34", "Eva Lu Ator is 19", "Lem E. Tweakit is 40"]

// #### Finding Patterns: Filtering

// 1.  Write a function called `evens` that takes an array of **numbers** as a
//     parameter, and returns **an array of only the even numbers** in the parameter.

function even(numbers) {
  return filter(numbers, function(item) {
    return item % 2 === 0;
  });
}
even(numbers);

// 2.  Write a function called `multiplesOfThree` that takes an array of **numbers** as a
//     parameter, and returns an array of only the numbers that are multiples of
//     three.

function multiplesOfThree(numbers) {
  var multiples = [];
  each(numbers, function(num) {
    if (num % 3 === 0) {
      multiples.push(num);}
  });
  return multiples;
}
multiplesOfThree(numbers); 

// 3.  Write a function called `positives` that takes an array of **numbers** as a parameter, and
//     returns an array of only the numbers that are positive.

function positives(numbers) {
  var result = [];
  each(numbers, function(item) {
    if(item > 0) {
      result.push(item);
    }
  });
  return result;
}
positives(numbers);

// 4.  Write a function called `evenLength` that takes an array of **strings** and
//     returns an array of only the strings with an even length.

var strings = ["Alyssa P. Hacker", "Ben Bitdiddle", "Eva Lu Ator", "Lem E. Tweakit", "Allen G"];
 
 filter(strings, function(str) {
   return str.length % 2 === 0;
 })

// 5.  At this point, you should notice a pattern; write a function called `filter`
//     that takes two parameters: an array and a **function** that, when invoked with
//     an argument, will return `true` or `false`. `filter` should return a *new
//     array* of only the elements for which the function returns `true`:

//     ```js
//     function filter(array, f) {
//       // ...
//     }
//     filter([1, 2, 3, 4], function(x) {
//       return x % 2 === 0; // x is even?
//     }); // => [2, 4]
//     ```

// 6.  Use `filter` to write/rewrite:

//     -   `largerThanSix` (given an array of numbers, returns those larger than 6)

filter(numbers, function(num) { 
  return num > 6;
})

// 7.  Using `filter`, write a function `startsWithChar` that accepts two
//     parameters: an array of strings, and a character (*e.g.* "a"), and returns an
//     array of only the strings that start with that character:

//     ```js

function startsWithChar(strings, character) {
      return filter(strings, function(str) {
        return str.charAt(0).toLowerCase() === character;
      })
}
startsWithChar(strings, 'a'); // => ["Alyssa P. Hacker", "Allen G"]
var words = "the quick brown fox jumps over the lazy dog".split(" ");
startsWithChar(words, "q"); // => ["quick"]
startsWithChar(words, "t"); // => ["the", "the"]
