// Task 1: Introduction

//console.log('Hello,,,, ES6!!!!');

// ---------------------------------------------
// Task 2: Variables (let) and Scoping

console.log(dogo)
var dogo = "Akita";
console.log(dogo);
var dogo = 'Shibe';
console.log(dogo);
dogo = 'Chow Chow';
console.log(dogo);

// console.log(cate); // let variables are not by default declared with 'undefine'
let cate = 'British Shorthair';
console.log(cate);
// let cate = something -- will give an error  because re declaration is not possoble for the variables declared with 'let'
cate = 'Turkish Angora'; // we can redefin it
console.log(cate);

// var have only function scope so the variable defined inside the function is not available outside the function
var dogo = 'Akita';
function printBreed() {
    var dogo = 'Cocker spaniel';
    console.log('inside: ' + dogo);
}

printBreed();
console.log('outside: ' + dogo);

//var does not have a block scope so it is also available outside of the block also
for(var i = 0; i< 2; i++) {
    var parrot = 'Hey!';
}

console.log(parrot);
console.log(i);

// let does have a block scope as well as function scope so it will not available outside
for(let j = 0; j< 2; j++) {
    let crow = 'Hey!';
}

// will give error because it is not available outside of the class
// console.log(crow);
// console.log(j);

// Task 2: Execise 1: Fix the code to print 15

var age = 15;

for (let age = 1; age <= 10; age++) {
    console.log(age);
}

console.log(age); // Should print 15 instead of 10

// Task 2: Execise 2: Fix the code to print Jack Russell Terrier

var myDog = "Jack Russell Terrier";
var shortLeggies = true;

if (shortLeggies) {
    let myDog = "Welsh Corgie";
    console.log(myDog);
} else {
    let myDog = "Border Collie";
    console.log(myDog);
}

console.log(myDog); // Jack Russell Terrier







// ---------------------------------------------
// Task 3: Variables (const) and Immutability

// will give error because const variables should be initialized with a value
// const artist;
const artist = 'Van Gogh';
console.log(artist);
// artist = 'Goggin'; // will give error  because const variables can neither be redefined nor redeclared
// console.log(artist);

const paintings = [
  'The starry Night',
  'The Night Cafe'  
];

// we can change the value or do operations on const
paintings.push('Irises');
console.log(paintings);
paintings[0] = 'Almond Blossoms';
console.log(paintings);

// but we cannot redefine it because the binding itself is constant but values are not
// paintings = []; // this will give error

const paintingInformation = {
    name: 'Strray Night',
    painter: "van Gogh",
    location: {
        museum: "MoMA",
        city: "New York City",
    }
}
console.log(paintingInformation);
Object.freeze(paintingInformation); // it will freeze the values of the paintingInformation only for one level 
Object.freeze(paintingInformation.location); // it will freeze the location values inside the paintingInformation

paintingInformation.year = 1889;
paintingInformation.name = "The " + paintingInformation.name;
paintingInformation.location.country = 'USA';
console.log(paintingInformation);




// TASK 3: Exercise: Refactor the code to use let/const

const painter = {
    name: "Van Gogh",
    nationality: "Dutch",
    paintings: ["The Starry Night", "Irises", "Almond Blossoms"]
};
Object.freeze(painter);
Object.freeze(painter.paintings);

// painter.birthDate = "March 30, 1853";
// painter.paintings.push("Something");

console.log(painter); // Should print { name: 'Van Gogh', nationality: 'Dutch', paintings: [ 'The Starry Night', 'Irises', 'Almond Blossoms' ] }


// ---------------------------------------------
// TASK 4: Destructuring
const recipe = {
    name: 'Red Lentil Danl',
    timeInMinutes: 30,
    ingredients: [
        'red lentils',
        'cumin',
        'turmeric',
    ]
}

// const name = recipe.name;
// const ingredients = recipe.ingredients;

// const { name, ingredients } = recipe; //it will create variables with the name 'name' and 'ingredients'
const { name: myName, ingredients: myIngredients } = recipe;
console.log(recipe, "\n", myName, "\n", myIngredients);

const spices = ['cardomom', 'turmeric', 'cumin'];
const [first, second] = spices;
console.log(first, second);

function cook({name, ingredients}) {
    console.log(name);

    console.log(ingredients);
}
cook(recipe);

// Task 4: Exercise: Extract data with destructuring

const ingredients = {
    tea: 'black',
    milk: 'soy',
    sweetener: 'honey',
    spices: ['ginger', 'cardamom', 'cinnamon', 'nutmeg']
}

// Destructure the parameters
function prepareChai({tea = "regular", spices, milk, sweetener}) {
    // const tea = ingredients.tea;
    // const spices = ingredients.spices;
    // const milk = ingredients.milk;
    // const sweetener = ingredients.sweetener;

    console.log("Mix the " + tea + " tea " +
        "with the " + spices + " in a small pot. " + 
        "Add a cup of water and bring to boil. Boil for 2-3 min. " +
        "Add " + milk + " milk and " + sweetener + ". " + 
        "Simmer for 3 min. Serve masala chai hot or warm!");
}

prepareChai(ingredients);

// const spices = ['cardomom', 'turmeric', 'cumin'];

const [ spice1, ...restOfTheSpices ] = spices;
console.log(spice1); 
console.log(restOfTheSpices);

const [,, thirdSpice] = spices; // To skip the first two element
console.log(thirdSpice);

// ---------------------------------------------
// TASK 5: Strings and Interpolation


const language = "English";
console.log(language.includes("sh"));
console.log(language.startsWith("e"));
console.log(language.startsWith("E"));
console.log(language.endsWith("sH"));
console.log(language.repeat(3));

console.log("I speak " + language);
console.log(`I speak ${language}`);
console.log(`I speak 
some languages like
${language === "English" ? "British English" : "none"}`);


// TASK 5: Exercise: Refactor the code to use the ES6 String utility methods

const country = "Bulgaria";
const city = "Sofia";

if (country.includes("Bulg")) {
    console.log("The country starts with Bulg");
}

if (city.startsWith("So")) {
    console.log("The name starts with So");
}

if (city.endsWith("a")) {
    console.log("The name ends with a");
}

console.log(
    `The capital of ${country} sis the city of ${city}`
);

// ---------------------------------------------
// TASK 6: Arrow functions

const numbers = [1, 2, 3, 4, 5, 6];
//using function keyword
// let doubleNumbers = numbers.map(
//     function(number) {
//         return 2*number;
//     }
// );

// code is equivalent to the upper one
// const numbers = [1, 2, 3, 4, 5, 6];
// let doubleNumbers = numbers.map(
//     function(number) {
//         return 2*number;
//     }
// );

// more simplification
// let doubleNumbers = numbers.map(
//     number => 2*number // if we have a single line in function and that is the thing we are returning, then we can remove the 'return' keyward
// );

calculateDouble = number => 2*number;
let doubleNumbers = numbers.map(calculateDouble);

console.log(doubleNumbers);


// TASK 6: Exercise: Filter out only the prime numbers from the array

const isPrime = num => {
    let flag = 0;
    for(let i = num - 1; i>1; i--) {
        if(num%i == 0) {
            flag = 1;
        }
    }
    if (flag == 0 && num != 1)  
        return num; 
}
const primeNumbers = [1, 2, 3, 4, 5, 6].filter(isPrime);
console.log(primeNumbers);


// ---------------------------------------------
// TASK 7: Arrow functions and this

/*
function Dog() {
    this.age = 0;

    setInterval(
        function() {
            this.age += 1;
            console.log(this.age);
        }, 1000
    );
}*/

function Dog() {
    this.age = 0;

    setInterval(
        () => {
            this.age += 1;
            console.log(this.age);
        }, 1000
    );
}
// const puppy = new Dog();


// const isOdd = () => arguments[0] % 2 === 1; 
// console.log(isOdd(1));

// const isOdd = ()  => {
//     console.log(arguments);
//     console.log(arguments[0]);
//     return arguments[0] % 2 === 1;
// };
// using rest operator to access only the necessary part
const isOdd = (...args)  => {
    console.log(args);
    return args[0] % 2 === 1;
};
console.log(isOdd(1,2,3,4));






// Task 7: Exercise

// function Translator() {
//    this.phrase = "good day";
//    this.englishBulgarianDictionary = {
//        good: "добър",
//        day: "ден"
//    }
// }

// Translator.prototype.getBulgarianPhrase = function() {
//    return this.phrase
//        .split(" ")
//        .map(function(word) {
//            return this.englishBulgarianDictionary[word]
//        })
//        .join(" ");
// }
 
// const translator = new Translator();
// console.log(translator.getBulgarianPhrase());
