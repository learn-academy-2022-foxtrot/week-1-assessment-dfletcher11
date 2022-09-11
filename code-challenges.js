// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create the code that determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:

// Set one:
//const fruit1 = "apple"
//const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
// const fruit1 = "cherry"
// const fruit2 = "kiwi"
// Expected outcome: "cherry"

// --------------------1) Create the code that determines if a given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

//1> Describe your process:1>I determined to use conditional statements
//2>created a variable of boilingPoint
//3>declare the variable with the let command
//4>console log the temperatures in the instructions.


let boilingPoint = (42 , 350 , 212 )
if (boilingPoint === 42) {
    console.log("below boiling point")
}else if (boilingPoint === 350) {
    console.log("350 is above boiling point")
}else if (boilingPoint === 212) {
    //console.log("212 is at boiling point")
}

//const temp = 42
// Expected output: "42 is below boiling point"

// const temp = 350
// Expected output: "350 is above boiling point"

// const temp = 212
// Expected output: "212 is at boiling point"

 //--------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process: 1.I created two variables for the two different arrays
//2.I console log with the concat method to combine the arrays
//3.I console log the first variable since they are combined and used the length method to show how many indexes their are in the array.

let padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
let padres1998WorldSeriesRuns = [6, 3, 5, 3]
console.log(padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns))
console.log(padres1998WorldSeriesRuns.length)
//const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
//const padres1998WorldSeriesRuns = [6, 3, 5, 3]
 //Expected output: 9


 
 // --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

 //1.created a variable named currentCohort
 //2.declared the variable as an array foxtrot 2022
 //3.console.log the variable with the reverse 

let currentCohort = ["Foxtrot 2022"]
 console.log(currentCohort.reverse)

 // Describe your process:

//const currentCohort = "Foxtrot 2022"
// Expected output: "2202 tortxoF"



// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

let myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
let givenValue1 = 42
let givenValue2 = 10
console.log(myNumbers.lastIndexOf(42))
console.log(myNumbers.lastIndexOf(10))

//1.created a variable mynumbers for array of integers
//2.declared variable for two given numbers
//3.console.log my variable of arrays and used lastindex function for given value of numbers.

// Describe your process:

//const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
// const givenValue1 = 42
// // Expected output: 7

// const givenValue2 = 10
// // Expected output: 8

let sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76 ]
let sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
sanDiegoSummerTemperatures.sort()
console.log(sanDiegoSummerTemperatures)
sanDiegoWinterTemperatures.sort()
console.log(sanDiegoWinterTemperatures)

//1.Created two variables and declared their value within a Array
//2.Added the function sort to arrange temperature in order for for both arrays
//3.console.log both variables


// // --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// // Describe your process:

// const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// // Expected output: [82, 80, 79, 77, 76, 73, 72]

// const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// // Expected output: [68, 67, 66, 66, 62, 59, 59]
