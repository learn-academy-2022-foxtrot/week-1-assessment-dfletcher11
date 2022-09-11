// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
//const colors = ["tangerine", "magenta", "lilac", "daffodil"]
//console.log(colors.push("indigo"))

// a) Your answer:This will log indigo as the first color in the array of the other colors.
// b) Verify and explain: the answer came back as 5. it did not push indigo into the array as the first index as the colors had a const variable.


// --------------------1) What will this log?

const cohort = "LEARN 2022"
 //console.log(cohort.length)

// a) Your answer: it will show the length of the variable which is 9
// b) Verify and explain:the answer was 10, The length is the always the last index of the array plus one.


// --------------------2) What will this log?

const greeting = "Hello World!"
//console.log(greeting[4])

// a) Your answer: The greeting will show Hello with a capital O.
// b) Verify and explain: It return just the letter o which was marked as only show the letter in the 4th index in the array.


// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
//console.log(languages[index])

// a) Your answer:it will only show the language ruby,it is the first index in the array
// b) Verify and explain: the answer was ruby as it was the first index declared as a variable


// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
//console.log(weekendDays.toUpperCase())

// a) Your answer:It will capitalize both saturday and sunday
// b) Verify and explain: I received a error stating "to" is not a function. the .toUpperCase is a string method being called on in a array and it will not work.


// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: it will show the lenght of all the variables in the array which is 23
// b) Verify and explain: it returned the variable named number.The length is the always the last index of the array plus one.
