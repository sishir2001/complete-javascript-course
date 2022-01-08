"use strict";

// ! can be called before the declaration for function declaration
// ? happens due to the process called 'hoisting'
const age3 = calAge(2001);
console.log(`age3 : ${age3}`);
// function declaration
function calAge(birthYear) {
    const age = 2022 - birthYear;
    return age;
}

const age1 = calAge(2001);
console.log(`age1 : ${age1}`);

// function expression
const age2 = function (birthYear) {
    return 2022 - birthYear;
};

console.log(`age2 : ${age2(2001)}`);

// Arrow function
const age4 = (birthYear) => 2022 - birthYear;
console.log(`age4 : ${age4(2001)}`);

const age5 = (birthYear) => {
    console.log("Inside the arrow function");
    console.log(`birthYear : ${birthYear}`);
    return 1; // use of return statement
};
console.log(`age5 : ${age5(2001)}`);
