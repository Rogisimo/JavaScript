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


console.log("--------------------")

//FUNCTIONS (Block of code for performing a specific task anywhere where its called)

//Function definition
function welcomePerson(name, level){
    console.log("Welcome " + name + "!" + " You were assigned a level of " + level)
}

//Calling a function
welcomePerson("Robertas", 15);
welcomePerson("Gandalf", 20);


function fn(){
    return "My return"
    console.log("My return")
}

console.log(fn())

function sumOfTwoNumbers(a, b){
    return a + "+" + b + " is" + " " + (a+b)
}

console.log(sumOfTwoNumbers(10,6))


//Create a fucntion that converts Celsius to Fahrenheit
// F = C x 1.8 + 32

function celsiusToFahrenheit(celsius){
    let fahrenheit = celsius * 1.8 + 32
    return celsius + " celsius is " + fahrenheit + " fahrenheit"
}

console.log(celsiusToFahrenheit(1))
console.log(celsiusToFahrenheit(12))
console.log(celsiusToFahrenheit(32))

//Another way of defining a fucntion 
const convertCelsiusToFahrenheit2 = (celsius) => {
    let fahrenheit = celsius * 1.8 + 32
    return celsius + " celsius is " + fahrenheit + " fahrenheit"
}


console.log(convertCelsiusToFahrenheit2(0))


console.log("--------------------")



//ARRAYS (data structure that can hold multiple data values in one variable)

let arr = [20,"Hello", true]

let prices = [5, 15, 30, 50]
console.log(prices[0])
console.log(prices[prices.length-1]) 
console.log(prices)
//Adding new element to array
prices.push(200)
console.log(prices)

//Callback function
//Function filters trough the array and makes a new array of prices higher than 20
let newPrices = prices.filter((element) => element > 20)

console.log(newPrices)

//Filter out all the "Fail" elements in an array
// Example ['A+', 'A', 'Fail'] => ['A+', 'A']

let grades = ["A+", "A", "Fail"]

let newGrades = grades.filter((element) => element !== "Fail")
console.log(newGrades)


//Perform the same task above but without array.filter method

let newGrades2 = []

for(let i = 0; i < grades.length; i++){
    if(grades[i] !== "Fail"){
        newGrades2.push(grades[i])
    }
}

console.log(newGrades2)

//Array.map method

let array = [1, 4, 9, 16]

let newArray = array.map((element) => "cat")

console.log(newArray)



//Turn each element in an array of dollars into cents
// Example [1,2,3] => [100,200,300]

let dollars = [1,2,3]

let cents = dollars.map((element) => element * 100)

console.log(cents)

//Perform the same task abovewithout array.map method

let cents2 = []

for(let i = 0; i < dollars.length; i++){
    cents2.push(dollars[i] * 100)
}

console.log(cents2)



//OBJECTS (used to store multiple properties in one variable)

let users = [
{
    userName: "Robert",
    email: "Robert@gmail.com",
    password: "test123",
    age: 23,
},
{
    userName: "Bob",
    email: "Bob@gmail.com",
    password: "test321",
    age: 50,
}
];
console.log(users[0])
console.log(users[1])
console.log("My name is " + users[0].userName + " and i am " + users[0].age + " years old."
 + " You can contact me at: " + users[0].email)
 console.log("My name is " + users[1].userName + " and i am " + users[1].age + " years old."
 + " You can contact me at: " + users[1].email)

 function logIn(email, password){
    for(let i = 0; i < users.length; i ++){
        if(users[i].email === email){
            if(users[i].password === password){
                console.log("User " + email + " logged in") 
            }
            else{
                console.log("Incorect password")
            }
            return
        }
    }
    console.log("Could not find an email that matches" + email)
 }

 logIn("Robert@gmail.com", "test123")
 logIn("Bob@gmail.com", "test321")

 //Create a register function that accepts:
 // username, email, password, age
 // add registered users to users array

 function registerUser(user){
    users.push(user)
    console.log("User " + user.email + " registered")
    console.log("All users:")
    console.log(users)
 }

 registerUser({
    userName: "Tom",
    email: "Tom@gmail.com",
    password: "12345",
    age: 31,
 })

 

 //DOM (Document object model allows you to acces the styling and content of elements on your website)

 //First way to acces an element (BEST WAY) this can also acces classes with .
console.log(document.querySelector('#title'))

//Second way
console.log(document.getElementById('title'))

//Change html with this
document.querySelector("#title").innerHTML = "Magic!"

//Change css
document.querySelector(".secondTitle").style.color = "red"


function changeColorToBlue(){
    document.querySelector(".secondTitle").style.color = "blue"
}

function toggleDarkMode(){
    document.querySelector("body").classList.toggle("dark-theme")
}



