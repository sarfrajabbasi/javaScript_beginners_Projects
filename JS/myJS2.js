// Build JS Objects

var myBike = {
  name: "Dream yuga",
  wheels: 2,
  gear: 4,
  company: "Honda",
  "hello world": () => {
    return "Booooom boooom";
  },
};

//  access property  . and []
var wheels = "wheels";

console.log(myBike.name);
console.log(myBike[wheels]);
console.log(myBike["hello world"]());

// update obj prop

myBike.wheels = 4;
console.log(myBike.wheels);

// add new prop

myBike.HeadLightColor = "white";
myBike.backLight = "red";

// delete prop

delete myBike.backLight;

console.log(myBike.backLight);

// use object for lookup

function phonetucLookup(val) {
  var result = "";
  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };

  result = lookup[val];

  return result;
}

console.log(phonetucLookup("charlie"));

// testing object for property

var myObj = {
  gift: "pony",
  pet: "Kitten",
  bed: "Sleigh",
};

function checkObj(checkProp) {
  return myObj.hasOwnProperty(checkProp)
    ? myObj[checkProp]
    : "not found => " + checkProp;
}

console.log(checkObj("gift"));

// manipualting complex object

var myMusic = [
  {
    artist: "coolieo",
    title: "Gangster Paradise",
    release_Year: 1990,
    formats: ["cd", "8T", "LP"],
    gold: true,
  },
  {
    artist: "BoomBastic",
    title: "Gachite",
    release_year: 1998,
    formats: ["mp4", "mp3", "wvp"],
    gold: true,
  },
];

var myStorage = {
  car: {
    inside: {
      gloveBox: "maps",
      passangerSeat: "Crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

var gloveBoxContents = myStorage.car.inside.gloveBox;

console.log(gloveBoxContents);

// nested arrays

var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandlion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

var collection = {
  1501: {
    album: "i hate you",
    artist: "chintu Bhadwa",
    tracks: [
      "whiteHat junior se coding sikh kar app banaya ha",
      "company ko chutiya banaya ha maine",
      "mere baap se jyadha salary h meri",
    ],
  },
  1502: {
    album: "not my problem",
    artist: "kamlesh gandu",
    tracks: ["muje kuch nahi malum", "pasie de de", "ma greeb huu"],
  },
  1503: {
    album: "Dark",
    artist: "Usmaan koillaa",
    tracks: [
      "hum kaale hue toh kya hua dilwale ha",
      "beejli chor",
      "fokat ma laphda nahi krne ka",
    ],
  },
  1504: {
    album: "kill me softly",
    artist: "papu langda",
    tracks: [
      "whiteHat junior se coding sikh kar app banaya ha",
      "company ko chutiya banaya ha maine",
      "mere baap se jyadha salary h meri",
    ],
  },
};

var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}
console.log(updateRecords(1504, "artist", "chill me"));
console.log(updateRecords(1504, "tracks", "black magic"));

// loops:--------

// while loops

var myArray2 = [];
var i = 0;

while (i < 5) {
  myArray2.push(i);
  i++;
}

console.log(myArray2);

// for loops

var ourArr = [];
for (var i = 0; i < 5; i++) {
  ourArr.push(i);
}

console.log(ourArr);

// iterate odd numbers with a for loops
var arrMe = [];
var num = 50;
for (let i = 1; i < num; i += 2) {
  if (i % 2 !== 0) {
    arrMe.push(i);
  }
}
console.log(arrMe);

// count backward with for loops

var arrOur = [];
var num2 = 20;
for (let i = num2; i > 1; i -= 2) {
  arrOur.push(i);
}

console.log(arrOur);
var ourtotal = 0;

for (let i = 0; i < arrOur.length; i++) {
  ourtotal += arrOur[i];
}

console.log(ourtotal);

// nesting for loop

function mutlipAll(arr) {
  var product = 1;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

var product = mutlipAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(product);

// do while loop

let myAr = [];
let num3 = 1;

do {
  myAr.push(num3);
  num3++;
} while (num3 < 5);

console.log(i, myAr);
var contact = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "098765233",
    likes: ["Pizza", "Browine", "Points"],
  },
  {
    firstName: "billu",
    lastName: "elee",
    number: "098765789",
    likes: ["Pizza", "Browine", "Points"],
  },
  {
    firstName: "kil",
    lastName: "till",
    number: "098765243",
    likes: ["Pizza", "gete", "adferes"],
  },
];

function lookup(name, prop) {
  for (let i = 0; i < contact.length; i++) {
    if (contact[i].firstName === name) {
      return contact[i][prop] || "No such Property";
    }
  }
  return "No such contact";
}

var data = lookup("Akira", "lik");

console.log(data);

// Generate Random Fractions and whole number

function randomFraction() {
  // whole number
  return Math.floor(Math.random() * 10) + 1 || 0;
}
console.log(randomFraction());

// random number within the range

function randomWithRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
console.log(randomWithRange(1, 100));

var convertToInt = (str, base = 0) => {
  return parseInt(str, base);
};

console.log(convertToInt("123"));
console.log(convertToInt("10011", 2));

// ternary operator

var checkEqual = (a, b) => {
  return a === b ? true : false;
};
var checkEqual1 = (num) => {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
};

console.log(checkEqual(2, 4));
console.log(checkEqual1(0));

// prevent Object mutation

function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.14,
  };

  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }

  return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);

// use arrow functions to write concise anonymus functions and higher order arrow functions

var margic = (date = "27/11/2023") => {
  return `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

console.log(margic(new Date()));

const realNumberArray = [4, 4.5, -9.8, 3.14, 8.34, -2, -3, 5, 6, 1, 2];
const squareList = (arr = [1, 2, 3, 4, 5]) => {
  const squaredInt = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((num) => num * num);
  return squaredInt;
};

const squaredInt = squareList(realNumberArray);
console.log(squaredInt);

// rest operator

const sum = (function () {
  return function sum(...args) {
    // const args = [x,y,z];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// eval array

const arr1 = ["Jan", "Feb", "Mar", "Apr", "May"];

let arr2;
(function () {
  arr2 = [...arr1];
  arr1[0] = "pinkyPiee";
})();

console.log(arr1);
console.log(arr2);

// use Destructuring Assignment to assign var form objects

var [jan, feb, mar] = arr2;
console.log(jan, feb, mar);

voxel = { z: 3.6, y: 7.5, x: 9.45 };

var { x: a, y: bb, z: cc } = voxel;
console.log(a, bb, cc);

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79,
};

function getTempOfTmrw(avgTemp) {
  "use strict";

  const { tomorrow: tempTorrw } = avgTemp;
  console.log(tempTorrw);
}
getTempOfTmrw(AVG_TEMPERATURES);

// destructuring with nested objects

const LOCAL_FORCES = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.3 },
};

function getMaxOfTmrw(forecast) {
  "use strict";
  const {
    tomorrow: { max: MAX_OF_TOMORROW },
  } = forecast;
  return MAX_OF_TOMORROW;
}

console.log(getMaxOfTmrw(LOCAL_FORCES));

// use destructuting assignment to assign var from arrays

const [z, x, , y] = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(z, x, y);

let appy = 10,
  jeera = 12;

(() => {
  "use strict"[(appy, jeera)] = [jeera, appy];
})();

console.log(appy);
console.log(jeera);

// use destruct assign with rest operator

const SRC = [1, 2, 3, 4, 7, 9, 8, 5];

function rFirstTwo(list) {
  const [, , ...arr] = list;
  return arr;
}

const arrNum = rFirstTwo(SRC);
console.log(SRC);
console.log(arrNum);

// use Destruct assign to pass an object as a function's parameters

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  avg: 35.38,
};

// commonly use in api calls when get info from ajax request and api request
const half = (function () {
  return function hlaf({ max, min }) {
    return (max, min) / 2.0;
  };
})();
console.log(stats);
console.log(half(stats));

// template literals

const person = {
  name: "abw",
  age: 23,
};
const greeting = `hello, my name is ${person.name}! I am ${person.age} years old.`;

console.log(greeting);

const result = {
  sucess: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-var", "var-on-top", "linebreak"],
  skipped: ["id-blackList", "no-dup-keys"],
};

function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class ="test-success">${arr[i]}</li>`);
  }
  return resultDisplayArray;
}

const resultDisplayArray = makeList(result.sucess);
console.log(resultDisplayArray);

// write concise object literal declarations using simple fields

// const createPerson = (name,age,gender)=>{
//   return {
//     name:name,
//     age:age,
//     gender:gender,
//   }
// }
const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("jeus", 56, ""));

// concise declartive functions
const bicylce = {
  gear: 2,
  setgear(newGear) {
    "use strict";
    this.gear = newGear;
  },
};

bicylce.setgear(3);
console.log(bicylce.gear);

// use class syntax to define a consrtuctor functions

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

let zeus = new SpaceShuttle("jupiter");

console.log(zeus.targetPlanet);


// use getters and setters to control access to an objects

class Book{
  constructor(author){
    this._author = author;
  }

  // getter
  get writer(){
    return this._author
  }
  // setter
  set writer(updatedAuthor){
    this._author = updatedAuthor
  }
}

class Thermostat{
  constructor(temp){
    // convert to celsius
    this._temp = 5/9 * (temp-32);
  }

  // getter
  get temprature(){
    return this._temp
  }
  // setter
  set temprature(updatedTemp){
    this._temp = updatedTemp
  }
}

const thermostat = new Thermostat(76);
let temp = thermostat.temprature;
console.log(temp);
thermostat.temprature =23;
temp  = thermostat.temprature
console.log(temp);

// require:-(past for import code for other files)
// now have import and export

 import * as capt from "./myJS3";
//  import sucess from;
const hello = capt.capitalStr("ehllo")
console.log(hello);
 console.log(foo);
 console.log(bar);
const cap =  capitalStr('Hello!')
console.log(cap);
console.log("hello");

// create an export falback with export default