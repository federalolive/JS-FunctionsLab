// 1. (_completed below_) Define a function, as a function declaration, `maxOfTwoNumbers` that takes two numbers as arguments and returns the largest of them. If they are the same, return that number. Use the if-else construct or a ternary expression -  the Math.max method is not allowed.

function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  // Here are the remaining functions:
  
  // 2. Define a function as a function expression, `maxOfThree`, that takes three numbers as arguments and returns the largest of them. Again, the Math.max method is not allowed.
  
  let maxOfThree = function(a, b, c,) {
    if (a >= b && a >= c) {
      return a; 
    } else if (b >= a && b >= c) {
      return b;
    } else {
      return c;
    }
  }
console.log(maxOfThree(5, 10, 100));
  
  
  // 3. Define a function, as a function declaration, `isCharAVowel` that takes a character as an argument and returns true if it is a vowel, false otherwise.
  
  // function isCharAVowel() 

  function isCharAVowel(junk) {
    return ('aeiouy'.indexOf(junk) > -1);
  }
console.log(isCharAVowel('a'));

  // 4. Define a function, as a function expression, `sumArray` that takes an array of numbers and returns the sum of those numbers. For example, `sumArray([2, 4, 5]);` would return `11`.
  
 let sumArray = function(arr) {
   let sum = 0;
   arr.forEach(function(n) {
     sum += n;
  });
   return sum;
 };
console.log(sumArray([4, 5, 23]));

  // 5. Define a function, as a function declaration, `multiplyArray` that takes an array of numbers and returns the product of those numbers. For example, `multiplyArray([2, 4, 5]);` would return `40`.
  
  function multiplyArray(arr) {
    let sum = 1
    arr.forEach(function(n) {
      sum *= n;
    });
    return sum;
  };
console.log(multiplyArray([2, 3, 5, 2]));
  
  // 6. Define a function, as a function expression, `numArgs` that returns the number of arguments passed to the function when called.
  
  let numArgs = function(...args) {
    return args.length;
  };

  console.log(numArgs('blue', false, 23, 'purple', true));
  
  
  // 7. Define a function, as a function declaration, `reverseString` that takes a string, reverses the characters and returns it. For example, `reverseString('rockstar');` would return the string "ratskcor".
  
  function reverseString(s) {
    var rstr = '';
    for (var i = s.length - 1; i >= 0; i--)
      rstr += s[i];
    return rstr;
  }
  
    console.log(reverseString('hello world'));
  
  // 8. Define a function, as a function expression, `longestStringInArray` that takes an array of strings as an argument and returns the longest string'f length.
  
  let longestStringInArray = function(arr) {
    let longest = 0;
    arr.forEach(function(n) {
      if(n.length > longest) longest = n.length;
    });
    return longest;
  };
  console.log(longestStringInArray(['what', 'is', 'up']));


  // 9. Define a function, as a function declaration, `stringsLongerThan` that takes an array of strings and a number as arguments; and returns an array of the strings that are longer than the number passed in. For example, `stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);` would return `["hello", "morning"]`.

  function stringsLongerThan(arr, len) {
  const strings = [];
  arr.forEach(function(s) {
    if (s.length > len) strings.push(s);
  });
  return strings;
};
  
  console.log(stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3));