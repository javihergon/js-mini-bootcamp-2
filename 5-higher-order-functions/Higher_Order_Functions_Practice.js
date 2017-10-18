// # Part V: Higher-Order Functions

// Before getting started, make sure that you have a JavaScript console open (like <a href="http://www.repl.it/languages/javascript" target="_blank">repl.it</a>), so you can complete these exercises.


// ### Two Forms of Functions

// ```js
// // function declaration
// function square(x) {
//   return x * x;
// }

// function expression
var square = function(x) {
      return x * x;
};
// ```

// ## Exercises

// ### Basic Requirements

// #### Rewrite Functions

// 1. We have two ways of writing a function. The **function declaration** is what we've
//   used so far, and the **function expression** is new to us. Rewrite the following
//   *function declarations* using a *function expression*:

//   ```js
//   // 1.
//   function cube(x) {
//     return x * x * x;
//   }
var cube = function(x) {
      return x * x * x;
};
//   // 2.
//   function fullname(first, last) {
//     return first + " " + last;
//   }
var fullname = function(first, last) {
      return first + " " + last;
};
//   // 3.
//   function power(base, exp) {
//     if (exp === 0) {
//       return 1;
//     }
//     return base * power(base, exp - 1);
//   }
var power = function(base, exp) {
      if (exp === 0) {
        return 1;
      } else {
        return base * power(base, exp - 1);
      }
};
console.log(power(4, 3));
//   // 4.
//   function sumCubes(numbers) {
//     var total = 0;
//     for (var i = 0; i < numbers.length; i++) {
//       total = total + cube(numbers[i]);
//     }
//     return total;
//   }
//   ```

var sumCubes = function(numbers){
      var sum = 0;
      for(var i = 0; i < numbers.length; i++) {
        sum = sum + cube(numbers[i]);
      }
      return sum;
};

console.log(sumCubes([2, 9, 6, 45, 23, 11]));

// #### Iterating Over Arrays Using `each`

// 1. Write `each` as seen below in your `main.js` file.

//EACH///////////
function each(coll, callback) {
    if (Array.isArray(coll)) {
      for (var i = 0; i < coll.length; i++) {
        callback(coll[i], i);
      }
    } else {
      for (var key in callback) {
        callback(coll[key], key);
      }
    }
}


//MAP///////////
function map(array, callback) {
    var acc = []; 
    each(array, function(item) {
      acc.push(callback(item));
    });
    return acc;
}

//FILTER///////////
function filter(array, test) {
    var acc = [];
    each(array, function(item) {
      if (test(item)) {
        acc.push(item);
      }
    });
    return acc;
}

// function reduce(array, callback, initial) {
//   if (initial !== undefined) {
//     var acc = initial;
//     each(array, function(item) {
//       acc = callback(item, acc); 
//     });
//     return acc;
//   } else {
//     var result = array.shift();
//     each(array, function(item) {
//       result = callback(item, result); 
//     });
//     return result;
//   }
// }
function reduce(array, itirator, accumulative) {
  if(accumulative !== undefined) {
    var acc = accumulative;
    each(array, function(item) {
      acc =  itirator(item, acc);
    });
    return acc;
  } else {
    var initial = array[0];
    each(array, function(item) {
      initial =  itirator(item, initial);
    });
    return initial;
  }
}
//   ```js
// 2. Finish the implementation of `sumSquares` below (using `each`):

function sumSquares(numbers) {
   var squared =  map(numbers, function(item) {
     return square(item);
   });
   return reduce(squared, function(a, b) {
    return a + b;
   });
}

console.log(sumSquares([2, 3, 1]));


// 3.  Rewrite `sumCubes` using `each`:

//     ```js
//     function sumCubes(numbers) {
//       var total = 0;
//       for (var i = 0; i < numbers.length; i++) {
//         total = total + cube(numbers[i]);
//       }
//       return total;
//     }
//     ```

function sumCubesNew(array) {
  var sum = 0;
  each(array, function(item) {
    sum = sum + cube(item);
  });
  return sum;
}
console.log(sumCubesNew([2, 3, 1]));


// 3.  Write a function called `product` that calculates the product of an array of
//     numbers using a `for` loop; then, refactor it to use `each`.

function product(array) {
    var total = 1;
     each(array, function(item) {
      total = total * item;
    });
    return total;
}
console.log(product([2, 3, 4]));

// 4.  Write a function called `cubeAll` that cubes each number in an array, and
//     returns an array of all the numbers *cubed* using a `for` loop; then,
//     refactor it to use `each`.

function cubeall(array) {
  return map(array, function(item) {
    return cube(item);
  });
}
console.log(cubeall([2, 3, 4]));

// 5.  Write a function called `odds` that accepts an array as a parameter and
//     returns an array of just the odd numbers. If you wrote it using `each`,
//     great! If you used anything else, refactor it to use a `for` loop.

function odds(array) {
    // var odd = [];
    // each(array, function(item) {
    //   if(item % 2 !== 0) {
    //     odd.push(item);
    //   }
    // });
    // return odd;
    return filter(array, function(item) {
      return item % 2 !== 0;
    });
}
console.log(odds([2, 3, 4, 5]));


