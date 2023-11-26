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
console.log(myStr2[myStr2.length-1]);

function wordBlank(myNoun,myAdjective,myVerb,myAdverb){

var result = "";

result += `The ${myAdjective} ${myNoun} ${myVerb} to the store ${myAdverb}.`


return result
}
console.log(wordBlank("dog","big","ran","quickly"));
console.log(wordBlank("bike","slow","flew","slowly"));

// Arrays:--

