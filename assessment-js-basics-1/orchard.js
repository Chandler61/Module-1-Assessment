///////////////////
// Apple Orchard //
///////////////////

/*
    The data below has been collected over the 
    last week at an apple orchard. You will be 
    using your coding skills to gain insights 
    into its daily operations.

    Below are three arrays each containing 7
    numbers. You will use them and the price
    variables to complete the problems in 
    this file.

    The indexes of the arrays correspond with a 
    day of the week. The associated number value 
    represents the number of acres that were picked 
    that day.

    The first array is named fujiAcres. Notice 
    that the first item in this array is 2, 
    meaning that 2 acres of Fuji apples were 
    picked on Monday of this week.

    The prices are per pound and are written
    in cents. 
*/

const fujiAcres = [2, 3, 3, 2, 2, 2, 1]
const galaAcres = [5, 2, 4, 3, 6, 2, 4]
const pinkAcres = [1, 5, 4, 2, 1, 5, 4]

const fujiPrice = .89 
const galaPrice = .64
const pinkPrice = .55



// PROBLEM 1

/*
    Using for loop, calculate the total number
    of acres picked for the entire week.

    Save the number to a variable called 
    `totalAcres`.

    Log `totalAcres` to the console.
*/
let totalAcres = []
fujiAcres.addall(galaAcres, pinkAcres)
totalAcres.push(fujiAcres)
const initialvalue = 0
const totalAcres1 = totalAcres.reduce(
    (accumulator, currentvalue) => accumulator + currentvalue,
    initialvalue
)
console.log(totalAcres1)
// CODE HERE

///Comments: reason i did the addall key was to combine all the acres together and then
///called it total acres. then I needed to comnbine all of them together. so i used the 
/// reduce key to combine all of them together to get the total acres. 



// PROBLEM 2

/*
    Using `totalAcres`, calculate the average 
    number of acres picked per day. 

    Save the answer to a variable called 
    `averageDailyAcres`. 

    Log `averageDailyAcres` to the console.
*/
function getavg(totalAcres) {
    const total = totalAcres.reduce((acc, c) => acc + c, 0)
    return total / totalAcres.length
}
const average = getavg(totalAcres)

console.log(average)


//COMMENT: EX: console.log(eval(totalAcres.join('+'))/totalAcres.length)
///so here i console logged the average by having it add all the numbers inside total acres
///and then divid it by how many numbers were in the array.
//I also did another solution where i addeded all the acres then divided it by how many were
//in the array then got my average that way.





// PROBLEM 3

/*
    We have provided 2 variables below. 
    
    The `acresLeft` variable is the number 
    of acres that still have apples left. 
    
    The `days` variable represents how 
    many more days of work are left. It's 
    initialized at 0 because we're going 
    to be using it as a counter.
    
    Write a while loop that will continue to run
    while `acresLeft` is above 0. 
    
    On each iteration of the loop:
    - add 1 to the `days` variable
    - subtract your daily average from the number of acres left

    Outside the loop, log `days` to the console.

    Note: This is not the most efficient way to
    calculate this number. But! It is a great
    way to get a whole number without using 
    any Math methods. 

*/

let acresLeft = 174 
let days = 0

// CODE HERE
while (acresLeft <= 174) {
    console.log(acresLeft - average)
    acresLeft += 1
    days += 1
}

consonle.log(days)
///COMMENT: okay so this one i used the while loop and had it count up to 174 and while its running
// through the loop its subtracting acres left from average and while its doing that the days
// are going up as well so it will tell you how many days they have left until they are finished
//with everything

// PROBLEM 4

/*
    Your next task is to create 3 arrays
    that list the daily amount of apples 
    picked, in tons, for each variety. 
    
    Each acre yields 6.5 tons of apples.

    Use the variables below to store 
    your new arrays. Make sure that you
    don't modify the original arrays 
    on lines 36 - 38.

    Log each of your arrays to the console.

    Hint: you can use the slice method 
    to make copies of the arrays and 
    then loop the copies. You could also
    make empty arrays, loop the old ones
    and use the push method to add new 
    values to the new arrays.
*/

// CODE HERE

let fujiTons =[6.5]
let galaTons =[6.5]
let pinkTons =[6.5]
for (let i = 0; i < fujiAcres.length; i++){
    fujiTons = fujiTons * fujiAcres[i]
    fujiTons.push(fujiTons)
}

console.log(fujiTons)

for (let i = 0; i < galaAcres.length; i++){
    galaTons = galaTons * galaAcres[i]
    galaTons.push(galaTons)
}

consonle.log(galaTons)

for (let i = 0; i < pinkAcres.length; i++){
    pinkTons = pinkTons * pinkAcres[i]
    pinkTons.push(pinkTons)
}

console.log(pinkTons)

//COMMENT: so i did a for loop so it keeps running throught the length of the array and then i had
//the result from that multiply the tons of fruit and the push it up to the array at the begginging
//that way it updates the array with the new multiplied answer






// PROBLEM 5

/*
    Next, calculate the total number of 
    pounds picked per variety.

    You'll need to add up the tons per
    each variety and convert the number 
    into pounds -- store that number in
    the variables given below. 

    Log each of the values to the console.

    Hint: there are 2000 pounds in a ton.
*/
const totalfuji = fujiTons.reduce(
    (acc, c) => acc + c,
    initialvalue 
)
let fujipounds = totalfuji * 2000

console.log(fujipounds)

const totalgala = galaTons.reduce(
    (acc, c) => acc + c,
    initialvalue 
)

let galapounds = totalgala * 2000


console.log(galapounds)

const totalpink = pinkTons.reduce(
    (acc, c) => acc + c,
    initialvalue 
)
let pinkpounds = totalpink * 2000

console.log(pinkpounds)

//COMMENT: so here i combined all of the tons fron the previous exercise and the multiplied it by 2000
//to get the total amount of pounds



// CODE HERE 
//const initialvalue = 0
//const totalAcres1 = totalAcres.reduce(
 //   (accumulator, currentvalue) => accumulator + currentvalue,
 //   initialvalue
//)
//console.log(totalAcres1)
// let fujiPounds =
// let galaPounds =
// let pinkPounds =






// PROBLEM 6

/*
    Now that you know the total pounds
    per variety, use the prices given 
    at the beginning of this file to 
    figure out how much you'll make 
    from selling each type of apple. 

    The prices are per pound and are 
    written in cents. 

    Log each of the profits to the 
    console. 
*/

// CODE HERE

let fujiProfit = fujipounds * fujiPrice
let galaProfit = galapounds * galaPrice
let pinkProfit = pinkpounds * pinkPrice
console.log(fujiProfit)
console.log(galaProfit)
console.log(pinkProfit)

//const fujiPrice = .89 
//const galaPrice = .64
//const pinkPrice = .55




// PROBLEM 7

/*
    Add up all your profits and save 
    the number to a variable called 
    `totalProfit`.

    Log `totalProfit` to the console.
*/
let totalprofit = fujiProfit + galaProfit + pinkProfit

console.log(totalprofit)

// CODE HERE
