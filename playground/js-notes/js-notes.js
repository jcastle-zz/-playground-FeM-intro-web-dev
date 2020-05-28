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