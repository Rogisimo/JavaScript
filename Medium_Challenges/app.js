//1.Falsy or Thruthy?
// Given two values, return the first one if it is falsy, otherwise return the second one


function filterOutFalsy(value1, value2){
    return !value1 ? value1 : value2
}

console.log(filterOutFalsy(0,500))
console.log("-----------------------------")

//2. Return the lenght of any given array

function findArrayLenght(array){
    return array.length
}

console.log(findArrayLenght([1,2,3]))
console.log("-----------------------------")

//3. Get the last element in any array

function findLastElementInArray(array){
    return array[array.length-1]
}

console.log(findLastElementInArray([1,2,3]))
console.log("-----------------------------")


//4. Find the sum of any array

function arraySum(array){
    let sum = 0
    for(let i = 0; i < array.length; i++){
        sum+= array[i]
    }
    return sum
}

console.log(arraySum([1,2,3]))
console.log("-----------------------------")

//5.Add up numbers from a single number
// Example 4 - > 1+2+3+4 = 10

function addUpNumbers(number){
    let sum = 0
    while(number !== 0){
        sum += number
        number--
    }
    return sum
}

console.log(addUpNumbers(4))
console.log("-----------------------------")

//6. Calculate Time
//Given a number in seconds, return this number in mm:ss format


function calcTime(seconds){
    let timerMinutes = Math.floor(seconds / 60)
    let timerSeconds = seconds % 60;
    if(timerMinutes.toString().length === 1){
        timerMinutes = "0" + timerMinutes
    }

    return timerMinutes + ":" + timerSeconds
}

console.log(calcTime(130))
console.log("-----------------------------")

//7. Find the largest number in an array

function getLargestNumber(array){
    let largestNumber = array[0]
    for(let i = 0; i < array.length; i++){
        if(largestNumber < array[i]){

            largestNumber = array[i]
        }
    }
    return largestNumber
}


console.log(getLargestNumber([1,25,3]))
console.log("-----------------------------")


//8. Reverse a string

//With a incrementing loop
function reverseString(str){
    let stringReversed = "";
    for(let i = 0; i < str.length; i++){
        stringReversed = str[i] + stringReversed
    }
    return stringReversed
}

console.log(reverseString("This is cool"))
console.log("-----------------------------")

//decrementing loop
function reverseString2(str){
    let stringReversed = "";
    for(let i = str.length - 1; i >= 0; i--){
        stringReversed += str[i]
    }
    return stringReversed
}

console.log(reverseString2("This is cool"))
console.log("-----------------------------")

//With array reverse property

function reverseString3(str){
    //SPlit makes a string to array, reverse reverses it and join turns it back to a string
    return str.split("").reverse().join("");
}

console.log(reverseString3("This is cool"))
console.log("-----------------------------")


//9. Turn every element in an array into 0


//For loop

function convertToZeroes(array){
    let newArr = []
    for(let i = 0; i < array.length; i ++){
        newArr[i] = 0
    }
    return newArr
}

console.log(convertToZeroes([1,2,3]))
console.log("-----------------------------")

//Array fill

function convertToZeroes2(array){
    return new Array(array.length).fill(0)
}

console.log(convertToZeroes2([1,2,3]))
console.log("-----------------------------")

//Array Map

function convertToZeroes3(array){
    return array.map(element => {
        return 0
    })
}

console.log(convertToZeroes3([1,2,3]))
console.log("-----------------------------")

//10. Filter out all the apples from array of fruits

//For loop
function removeApples(array){
    let newArray = []
    for(let i = 0; i < array.length; i ++){
        if(array[i] !== "Apples"){
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(removeApples(["Apples", "Bananas", "Kiwi"]))
console.log("-----------------------------")

//Filter
function removeApples2(array){
    return array.filter(element => element !== "Apples")
}

console.log(removeApples2(["Apples", "Bananas", "Kiwi"]))
console.log("-----------------------------")


//11.Filter out falsy values from array


//For loop

function filterOutFalsy(array){
    let newArray = []
    for(let i = 0; i < array.length; i ++){
        if(!!array[i] === true){
            newArray.push(array[i])
        }
    }
    return newArray
}

console.log(filterOutFalsy([1,false,2,null,0]))
console.log("-----------------------------")

//Array filter

function filterOutFalsy2(array){
    return array.filter(element => !!element === true)
}

console.log(filterOutFalsy2([1,false,2,null,0]))
console.log("-----------------------------")


//12. Thruthy to true, falsy to false
// Convert values to its boolean value (double ! check if its truthy or falsy)

function convertToBoolean(array){
    return array.map(element => !!element === true)
}

console.log(convertToBoolean([0,1,null,5,false]))
console.log("-----------------------------")

