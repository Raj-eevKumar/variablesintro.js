//if else if else statement: if we have multiple condtions to check which one is true then proceed with this statement.
//if any of the condtion is true the code inside that block will execute otherwise code inside else block will execute.

//Example 1: Print day name with the help day number.

//Solution with if-else statement
//var dayNumber = 5

// if(dayNumber==1){
//     console.log("Monday")
// }else{
//     if(dayNumber==2){
//         console.log("Tuesday")
//     }else{
//         if(dayNumber==3){
//             console.log("Wednesday")
//         }else{
//             if(dayNumber==4){
//                 console.log("Thursday")
//             }else{
//                 if(dayNumber==5){
//                     console.log("Friday")
//                 }else{
//                     if(dayNumber==6){
//                         console.log("Saturday")
//                     }else{
//                         if(dayNumber==7){
//                             console.log("Sunday")
//                         }else{
//                             console.log("Invalid day number")
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

//Solution with if-else if-else statement

// var dayNumber = 5

// if(dayNumber==1){
//     console.log("Monday") 
// }
// else if(dayNumber==2){
//     console.log("Tuesday")
// }
// else if(dayNumber==3){
//     console.log("Wednesday")
// }
// else if(dayNumber==4){
//     console.log("Thursday")
// }
// else if(dayNumber==5){
//     console.log("Friday")
// }
// else if(dayNumber==6){
//     console.log("Saturday")
// }
// else if(dayNumber==7){
//     console.log("Sunday")
// }
// else{
//     console.log("Invalid day number")
// }


//Example 2: check if a character is vowel or consonant, and character is given in lowercase always.

var character = 'r'

if(character==='a'){
    console.log(character, " is vowel")
}
else if(character==='e'){
    console.log(character, " is vowel")
}
else if(character==='i'){
    console.log(character, " is vowel")
}
else if(character==='u'){
    console.log(character, " is vowel")
}
else if(character==='o'){
    console.log(character, " is vowel")
}
else{
    console.log(character, " is consonant")
}