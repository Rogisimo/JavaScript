//STRINGS
console.log("Robert")
console.log("Hello my name is" + " Robert")
console.log("Robert"[0])
console.log("Robert"[5])
console.log('Robert'.length)
let str = "Robert"
console.log(str[0])
console.log(str[str.length-1])

//NUMBERS
console.log(100 / (4*5) + 10 - 3)
console.log(16%5)

//BOOLEAN
console.log(5>1)

//NULL (value of nothing)
//UNDEFINED (value was never set)
//NaN (not a number)


//VARIABLES
var variable = 'Robert'//var outdated dont use it
let variable2 = 'Robert'
const variable3 = 5 //cannot be changed or error

let firstName = "Robert"
let lastName = "Murnikovas"
let age = 23
console.log(firstName + ' ' +lastName + ' age: ' + age)

//Convertiong celsius to fahrenheit (F = C x 1.8 + 32)

let celsius = 100
let fahrenheit
fahrenheit = celsius*1.8+32
console.log(celsius + " " + "celsius converted to fahrenheit is: " + " " + fahrenheit)

//Equality
//== checks the values
//=== checks values and the types

let bool = '1' === 1 //this gives false
let bool2 = '1' == 1 //this gives true

console.log(bool)

//CONDITIONALS

let subscribed = true
let loggedIn = false

if(subscribed === true){
    console.log("Subscribed")
}
else if(loggedIn === true){
    console.log("Upbrade subscription")
}
else{
    console.log("Not subscribed")
}

// other operators - <,>, <=, >= , !=, !==, &&, ||
//Converting theese falsy values will always give false : undefined
//null, Nan, 0, "", false
//Truthy values - 10, 1,5, "Hello", "false", "0", [], {}
//If you want to check do this -> !!0 or !!"0" in console


//TERNARY OPERATORS (a shortcut for an if else condition)

let fat = false

fat ? console.log("Human is fat") : console.log("Human is fit")

let adult = true
let humanAge = 21
let ageForAlchohol = 21

let string = adult && humanAge >= ageForAlchohol ? "Human can buy alchohol and cigarettes" : "Human can only buy cigarettes"
console.log(string)



let cash = 50
let price = 40
let isStoreOpen = true

let storeResultString = cash >= price && isStoreOpen ? "Give receipt" : "do not give receipt"
console.log(storeResultString)

//LOOPS (repeat block of code until specified)
//DRY = dont repeat yourself

let count = 0
 
for(let i=0; i<3; i++){
    console.log(count)
    count++
}

console.log("--------------")

let number = 1

while(number <= 100){
    console.log(number)
    number++
}

console.log("--------------")

//Write a for-loop that loops through 1 to 20
//If the number is divisable by 3, print "Divisable by 3"
//If the number is divisable by 5, print "Divisable by 5"
//If the number is divisable by 3 and 5, print "Divisable by 3 and 5"
//If the number is not devisable by either 3 or 5, print only the number
//Example 1->1
// 2 -> 2
// 3 -> Divisable by 3
// 5 -> Divisable by 5
// 15 -> Divisable by 3 and 5


for(let i = 1; i <= 20; i++){
    if(i%3 === 0 && i%5 === 0){
        console.log(i + " Divisable by 3 and 5")
    }
    else if(i%3 === 0){
        console.log(i + " Divisable by 3")
    }
    else if(i%5 === 0){
        console.log(i + " Divisable by 5")
    }
    else{
        console.log(i)
    }
}

console.log("--------------------")


//Print out evert character from the string: Coding Rocks!

const word = "Coding Rocks!"

for(let i = 0; i < word.length; i++){
    console.log(word[i]);
}





