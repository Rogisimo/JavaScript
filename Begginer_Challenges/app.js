//1.Calculate the remainder
// Given two numbers, return their remainder when divided by each other
// Example 4,2 -> 0     7,8 -> 7      9,8 -> 1

function calculateRemainder(number1, number2){
    return number1%number2
}

console.log(calculateRemainder(9,8))
console.log("------------------------")

//2.Is the number odd?
//Given two numbers, return true if the number is odd
// 1 -> true  2 -> false  3-> true

function checkIfNumberIsOdd(number){
    return number%2 !== 0
}

console.log(checkIfNumberIsOdd(3))
console.log("------------------------")

//3.If a number is even, return 1 otherwise return -1

function isNumberEven(number){
    return number%2 === 0 ? 1: -1;
}

console.log(isNumberEven(5))
console.log("------------------------")

//4. Check if user is logged in and subsribed given two strings

function isLoggedinAndSubscribed(loggedIn, subsribed){
    return loggedIn === "loggedIn" && subsribed === "subscribed" ? true : false
}

console.log(isLoggedinAndSubscribed("loggedIn", "subscribed"))
console.log("------------------------")