// data-is any thing that meaning full to computer.

// data-type in js = undefined null boolean,string,number bigInt,symbol,object.

// store data in variable

// variable is label that allow data to store and manupulate.

// var & let is changable and but const is not.

var a = "abc";
//   var a(declare) & = "abc"(initialized it)
a = 134;
let b = "aa";
const c = 1;

// var and functions are caSe sensitive.

var myNum = 56;
myNum++;
myNum--;
var decilmalNum = 5.7;
decilmalNum = 0.009;

// Reminder
var rem = 11 % 3;

// Agumented the variable

var allMe = 12;
var thenCall = 34;
var callMe = 67;

allMe += 1;
thenCall += 1;
callMe += 1;

allMe -= 1;
thenCall -= 1;
callMe -= 1;

allMe *= 1;
thenCall *= 1;
callMe *= 1;

allMe /= 1;
thenCall /= 1;
callMe /= 1;

console.log(allMe + thenCall + callMe);

// Declare String var

let firstName = " Sarfraj";
let lastName = " Abbasi";

// Escaping Literal Quotes in Strings(it just a quotestion mark)
let mylife =
  'Succk all "thing mess up an no hope in my "life becoz " those mental" peace';

console.log(firstName + lastName);
mylife += firstName;
console.log(mylife);

/*
\' --> single quote
\" --> double quote
\\ --> backslash
\n --> newline
\r -->  carriage return
\t -->  tab
\b --> backspace
\f --> form feed
*/
let myStr = "FirstLine\n NewLine";

console.log(myStr);

let ourName = "freeCodeCamp";

let ourStr = "Hello, our name is " + ourName + ", how are you?";

let myName = "sarfraj";

let myStr2 = "My name is " + myName + " and I am Well!";

console.log(myStr2);

// find length and char at specific index.but string are immutable data type

console.log(myStr2.length);
console.log(myStr2[myStr2.length - 1]);

function wordBlank(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";

  result += `The ${myAdjective} ${myNoun} ${myVerb} to the store ${myAdverb}.`;

  return result;
}
console.log(wordBlank("dog", "big", "ran", "quickly"));
console.log(wordBlank("bike", "slow", "flew", "slowly"));

// Arrays:--

let ourArray = ["John", 23];

// nested array
let myArray = [
  ["the uni", 34],
  ["unknown beast", 76],
];

// access arr with [] notation

console.log(ourArray[0]);

// modifed array data with Indexes

ourArray[0] = ["hello beautiful girls"];
console.log(ourArray[0]);

// access multi-dimesntional array
console.log(ourArray[0][0]);

// manipulate arrays with push()

ourArray.push(["no you can't do this to meee :("]);

console.log(ourArray[2].join());

// manipulate arrays with pop()
console.log(ourArray.pop());

console.log(ourArray);

// manipluate with shift and unshift

console.log(ourArray.shift());
ourArray.unshift([1, 2], 12, "12");
console.log(ourArray);

let myList = [
  ["ceral", 2],
  ["milk", 2],
  ["helo", 4],
  ["chips", 100],
  ["mango", 12],
];

function resuableCode(name) {
  console.log(name);
}

function ourResuableCode(name) {
  console.log("Not \n Marrid still " + name);
}
resuableCode("holaHull");
resuableCode("kill me");
resuableCode("Morgan FreeTestrone");
resuableCode("Mickhel NotAMen");
resuableCode("Billy ThGay");
resuableCode("pushpa Chirkut");
ourResuableCode("pushpa Chirkut");

function ourFunctionWithArg(a, b) {
  console.log(a - b);
}
ourFunctionWithArg(10, 9);

function FunctionWithArg(a, b) {
  console.log(a + b);
}
FunctionWithArg(10, 9);

// global scope(visibility of variable) and local scope

var myGlobal = 10;
function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal:" + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal:" + oopsGlobal;
  }
  console.log(output);
}

fun1();
fun2();

// local sc0pe

var outerWear = "T-Shirt";

function myOutFit() {
  var outerWear = "Sweater";
  return outerWear;
}

console.log(myOutFit());

function myLocalScope() {
  var myVar = 5;
  console.log(myVar);
}

myLocalScope();
// console.log(myVar);

var meChan = "Cat";

function doremonFriend() {
  // var meChan = "DOG"
  return meChan;
}

console.log(doremonFriend());

function minusSeven(num) {
  return num - 7;
}

console.log(minusSeven(10));

function nextInLine(arr, item) {
  arr.push(item);
  return arr.shift();
}

var textArr = [1, 2, 3, 4, 5];

console.log("Before: " + JSON.stringify(textArr));
console.log(nextInLine(textArr, 6));
console.log("After: " + JSON.stringify(textArr));

// Boolean Values and if/else statement

function ourTrueOrFalse(isItTrue) {
  if (isItTrue) {
    return "Yes, it's true ";
  }
  return "No, it's false";
}

function trueOrFalse(wasThatTrue) {
  return wasThatTrue ? "That was 1" : "That was 0";
}

// test equal
function testEqual(val) {
  if (val === 12) {
    return "Equal";
  }
  return "Not Equal";
}

// console
console.log(ourTrueOrFalse(true));
console.log(ourTrueOrFalse(false));
console.log(trueOrFalse(true));
console.log(trueOrFalse(false));

console.log(testEqual(10));

// Comparison with the strict Equality Operator

/*

3 === 3
3 ==="3"

*/

function tripleComparison(val1, val2) {
  return val1 == val2 ? "Equal" : "Not-Equal";
}

// test
console.log(tripleComparison(10, "10"));

// Inequality operator

function inequalityOper(val1, val2) {
  return val1 !== val2 ? "Not-Equal" : "Equal";
}

// test
console.log(inequalityOper(10, "10"));

// Logical and Operator

function logicalOper(val1, val2) {
  // return val1 >= val2 ? "Not-Equal" : "Equal";
  return val1 <= val2 ? "Not-Equal" : "Equal";
}

// test
console.log(logicalOper(10, "10"));

// And/Or operator

function logicalOper(val1, val2) {
  // return val1 >= val2 ? "Not-Equal" : "Equal";
  return val1 <= val2 && typeof val1 === typeof val2 ? "Equal" : "Not-Equal";
}

// test
console.log(logicalOper(10, "10"));

function test1(val) {
  if (val < 10) {
    return "less then 10";
  }
  if (val < 20) {
    return "less then 20";
  }

  return "inside the both";
}
test1(12);

// else statment

function test2(val) {
  var result = "";
  if (val > 10) {
    result = "Bigger than 5";
  } else if (val < 5) {
    result = "5 or smaller";
  } else {
    result = "B/W 5 and 10";
  }

  return result;
}

// test
console.log(test2(11));

// logical order in if/else

function test3(val) {
  var result = "";
  if (val < 10) {
    result = "less than 10";
  } else if (val < 5) {
    result = "less than 5 ";
  } else {
    result = "Grater then or equla to 10";
  }

  return result;
}

// test
console.log(test3(7));

// chaining if else

// else statment

function test4(val) {
  var result = "";
  if (val < 5) {
    result = "Tinny";
  } else if (val < 10) {
    result = "Small";
  } else if (val < 15) {
    result = "Medium";
  } else if (val < 20) {
    result = "Large";
  } else {
    return "huge";
  }

  return result;
}

// test
console.log(test4(29));

// golf  code
var namesArr = [
  "Hole-in-one",
  "Eagle",
  "Bridie",
  "Par",
  "Bogey",
  "Double Bogey",
  "abc",
  "apt",
  "jackass",
];
function golfScore(par, stroke) {
  if (stroke == 1) {
    return namesArr[0];
  } else if (stroke <= par - 2) {
    return namesArr[1];
  } else if (stroke == par - 1) {
    return namesArr[2];
  } else if (stroke == par) {
    return namesArr[3];
  } else if (stroke == par + 1) {
    return namesArr[4];
  } else if (stroke == par + 2) {
    return namesArr[5];
  } else if (stroke == par + 3) {
    return namesArr[6];
  }
}

console.log(golfScore(5, 4));

// switch statement

function caseInSwitch(val) {
  var answar = "";
  switch (val) {
    case 1:
      answar = "alpha";

      break;

    case 2:
      answar = "beta";

      break;

    case 3:
      answar = "gamma";

      break;

    case 4:
      answar = "delta";

      break;

    default:
      "invalid";
      break;
  }
  return answar;
}
console.log(caseInSwitch(1));

// multiple identical options

function caseInSwitch2(val) {
  var answar = "";
  switch (val) {
    case 1:
    case 2:
    case 3:
      answar = "Low";

      break;

    case 4:
    case 5:
    case 6:
      answar = "Medium";

      break;
    case 7:
    case 8:
    case 9:
      answar = "High";

      break;
    default:
      "invalid";
      break;
  }
  return answar;
}
console.log(caseInSwitch2(9));


// return  boolean from func

function isless(a,b){
return a < b
}
console.log(isless(23,20));