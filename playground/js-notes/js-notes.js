/*
Javascript Notes

** intro-to-programming.md **

What is code?
Meant more for humans than for computers. Optimize for maintaining code, make it plain and readable. Code is communication. JS is single threaded, only one thing happens at a time.

*/

console.log('js notes'); // making sure page is linked w/ html

// demoing variable and simple first program
const monthlyRent = 500;
const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

// template string included in backticks, new as of 2015
const firstName = 'Joe';
const lastName = 'Castle'
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you?`;
console.log(sentenceWithTemplate);

// control flow - if statements, used to assess conditions
const skyIsBlue = false;
if (skyIsBlue) {
    console.log('the sky is blue');
} else {
    console.log('the sky is not blue');
}

// control flow - can ask more than one question
const friendsAtYourParty = 10;
if (friendsAtYourParty === 0) {
    console.log('more nachos for me');
} else if (friendsAtYourParty >= 4) {
    console.log('perfect amount'); // prints this one because it is first true statement
} else {
    console.log('turn on the dance music'); // never gets here, can't print both
}

// loops - while loop functions like an if statement, similar to do loop where do loop happens at least once
let friendsAtYourParty1 = 0;
while (friendsAtYourParty1 < 10) {
    friendsAtYourParty1 = friendsAtYourParty1 + 1;
}
console.log(friendsAtYourParty1);

// same as one above using for loop, only ++ and --
let friendsAtYourParty2 = 0;
for (let i = 0; i < 10; i++) {
    friendsAtYourParty2++
}
console.log(friendsAtYourParty2);

/*
Exercise
1. Write some code that declares two values, character and timesToRepeat.
2. Use a loop to repeat the character that many times and then console.log it.
*/
let char = 'a';
const timesToRepeat = 50;
let answer = '';
for (let i = 0; i < timesToRepeat; i++) {
    answer += char;
}
console.log(answer);

/*
** functions and scope.md **

Function names are verbs, variables are nouns. Generally don't declare functions inside of functions.

*/

// Using template string to plug in variables
function greet(firstName, lastName, honorific, greeting) {
    return `${greeting} ${honorific} ${lastName} I'm extremely pleased to meet you, could you join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}
console.log(greet('Joe', 'Castle', 'Doctor', 'Hello'));

// Another example with template strings
const myHomeCity = 'Frederick';
const myHomeState = 'MD';
const myHomeCountry = 'USA';

function logOutYourHome(city, state, country) {
    console.log(`You are from ${city}, ${state}, and ${country}`);
}
// Passing arguments in order to parameters in function, they don't need the same name
logOutYourHome(myHomeCity, myHomeState, myHomeCountry); // passing representation strings
logOutYourHome('Madison', 'Wisconsin', 'USA'); // passing raw data strings

// Scope - global vs. local - consider what is inside and outside {}. Don't put things in global scope, keep it unpolluted because everything can see and possibly change the value which may cause bugs.
function addFive(number) {
    const someVariable = `you can't see me outside this function`;
    return number + 5;
}
console.log(addFive(10));
// console.log(someVariable); won't work, calling out of the function

// Built in functions - really methods because they are builtin to JS functions
const sentence = 'ThIS haS weirD TExt';
console.log(sentence.toLowerCase());
console.log(sentence.toUpperCase());

const number = 5.1;
console.log(Math.round(number));
console.log(Math.ceil(number));

const name = 'Joe Castle'
console.log(name.substr(6, 3)); // start at 6 and take 3 values

/*
** objects-and-arrays.md

Objects and arrays are collections of data types and functions. Keys all have to be unique, cannot have same key in same object or will overwrite. Values do not need to be unique, possible to have same value for a key.

*/

// Objects
const person = { 
    name: 'Joe Castle',
    city: 'Frederick',
    state: 'MD',
    favoriteFood: 'nachos',
    wantsNachosRightNow: true,
    numberOfNachosWanted: 10,
    // can have object in object
    address: {
        street: '1234 Place Road',
        apartment: '123',
    }
}
console.log(person);
console.log(person.name); // this is preferred
console.log(person["city"]); // same way to call object property as above
console.log(person.address.street);

// Objects within functions
const person1 = {
    name: 'Joe',
    ageRange: '25-35',
}
const person2 = {
    name: 'Steve',
    ageRange: '65-75',
}

function suggestMusic(person) {
    if (person.ageRange === '25-35') {
        console.log('You hipster');
    } else if (person.ageRange === '65-75') {
        console.log('Old man');
    } else {
        console.log('Listen to David Bowie');
    }
}
suggestMusic(person1);
suggestMusic(person2);

// Objects can have functions
const dog = {
    name: 'Fido',
    speak() {
        console.log('woof, woof');
    }
};
dog.speak();

// Context - similar feel to scope.
const me = {
    name: {
        first: 'Brian',
        last: 'Holt', 
    },
    location: {
        streetNumber: '123',
        street: 'Fake',
        city: 'Seattle',
        state: 'WA',
        zipCode: '55555',
        country: 'USA',
    },
    // using this keyword, refers to nearest object, not always true
    getAddress() {
        return `${this.name.first} ${this.name.last}
        ${this.location.streetNumber} ${this.location.street}
        ${this.location.city} ${this.location.state} 
        ${this.location.zipCode} ${this.location.country}
        `;
    }
};
console.log(me.getAddress());
// would be better to do function outside of the object. Better design pattern and less chance for messing up.

// Arrays - order list of data. Objects do not store data in order. Arrays start at zero.
const daysOfTheWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
];
console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]); // first element of array
console.log(daysOfTheWeek[1]);

// Arrays have built in properties and functions ()
const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join (" | "));

// Add element to array with push()
const courses = [
    {teacher: 'Kyle Simpson', course: 'JS Function Lite'},
    {teacher: 'Sara Drasner', course: 'Intro to Vue'},
];
// puts another element at the end of the array
courses.push(
    { teacher: 'Brian Holt', course: 'Intro to React' },
);
console.log(courses);

// adding data to specific place in array
courses[2] = { teacher: 'Brian Holt', course: 'Another class' };
console.log(courses);

// Log something in array
const cities = [
    'Seattle',
    'Baltimore',
    'Washington',
];

// method 1 - loop syntax to loop through an array and console value
for (let i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}

// method 2 - function built into arrays to iterate through the array and console value
cities.forEach(function(city) {
    console.log(city.toLowerCase()); // doing this to see better in console
});

/*
** dom.md **
*/

// Document Object Model (DOM) - the way JS interacts with HTML & CSS. 
// The following aren't on HTML or CSS, writing here for notes
const redSquare = document.querySelector('.class'); // to select for instance of class on page
const allRedSquare = document.querySelectorAll('.class'); // for selecting all instances with this class
redSquare[0].style.paddingLeft = '5px'; // assigning CSS values with JS
allRedSquare[0].style.backgroundColor = 'black';

// Events and listeners - events are actions on page (alert) and listeners wait for an event to happen (click). Alerts are super annoying, only use for debugging.

const button = document.querySelector('.event-button');
// Event is the alert, Listener is waiting on the click

button.addEventListener('click', function() { 
    alert('Hey there!');
});

// Another example with an input
const input = document.querySelector('.input-to-copy');
const paragraph = document.querySelector('.p-to-copy-to');

input.addEventListener('keyup', function() {
    // take text value from input and output to paragraph
    paragraph.innerText = input.value;
})

// Another example with change. Changes happen when you unfocus an input.
const input = document.querySelector('.color-input');
const paragraph = document.querySelector('.color-box');

input.addEventListener('change', function() {
    paragraph.style.backgroundColor = input.value;
});

// Event delegation - listening to multiple elements.
document.querySelector('.button-container').addEventListener('click', function(event) {
    alert(`You clicked on button ${event.target.innerText}`);
});

// Another example of events
document.querySelector('.button-container').addEventListener('click', function (event) {
    if (event.target.tagName === 'button') {
        alert(`You clicked on button ${event.target.innerText}`);
    }
    event.stopPropagation();  // another option is event.stopDefault()
});