//1.Show rating
// Given a rating diplay a star for each full rating and a full-stop
// for each half rating.
// 3 -> "***"    4.5 -> "****."  0.5 -> "."

function ratingToStars(number){
    let rating = []
    for(let i = 0; i < number; i++){
        rating.push("* ")
    }
    if(number%1 !== 0){
        rating.splice(rating.length - 1)
        rating.push(".")
    }
    

    return rating.join("")
}

console.log(ratingToStars(3.5))
console.log("----------------------------")


//2. Sort by lowest to highest price
// [20,40,10,30,50,10] -> [10,10,20,30,40,50]

function sortLowestToHighest(array){
    return array.sort((a,b) => a - b)
}

console.log(sortLowestToHighest([20,40,10,30,50,10]))

//3. Sort by highest to lowest price
//Given an array of objects return the prices sorted by high and low

prices = [{
    id : 1,
    price : 50,
},
{
    id : 2,
    price : 30,
},
{
    id : 3,
    price : 60,
},
{
    id : 4,
    price : 10,
},
];

function sortHighToLow(array){
    return array.sort((a,b) => b.price - a.price)
}

console.log(sortHighToLow(prices))
console.log("----------------------------")

