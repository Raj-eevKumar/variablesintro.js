//Conditonal Statement: On the basis of specific condition, we take decision/print statement.
//If Statement: It has one condition, if this condition is true, then code inside block{} will be printed.
/*
Syntax
if(condtion){
    //code/statement
}
*/
//Example 1: Basic
// var x = 5
// var y = 7

// let condtion = x > y //false

// if(condtion){
//     console.log("X is greater Than Y")
// }


//Example 2: print "go to movie" if day is friday.

//var dayName = "tuesday"

//var condition = dayName=="friday" //true

// if(dayName=="friday"){
//     console.log("go to movie")
// }

//Example 3: print eligible for voting if age is greater than or equal to 18

var age = 17

if(age>=18)  // false
{
    console.log("You're eligible for voting")
}