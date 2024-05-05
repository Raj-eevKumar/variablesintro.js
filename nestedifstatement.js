//Example 1: Let's validate username and password for login

// var username = "admin"
// var password = "admin"

// if(username==="admin"){
     
//     //validate the password
//     if(password==="admin"){
//         console.log("You're logged in successfully.")
//     }
//     else{
//         console.log("Invalid password")
//     }

// }
// else{
//     console.log("Invlid username")
// }


//Example 2: check job eligibility by following criteria
/*
1. CS: degree as MCA or BTECH: You're hired!
2. Non-CS: Full Stack and DSA: You're hired!
*/

var studentType = "noncs"
var degree = "mca"
var fullStack = true //hai
var dsa = false // nahi hai

//student type: cs  or non-cs
if(studentType==="cs"){
  
    //check degree
    if(degree==="mca"){
          console.log("You're hired!")
    }
    else if(degree==="btech"){
        console.log("You're hired!")
    }
    else{
        console.log("You're not hired!, come with mca or btech degree")
    }

}
else if(studentType==="noncs"){
     
    //student must have completed full stack and dsa
    if(fullStack){

        //dsa
        if(dsa){
            console.log("You're hired!")
        }
        else{
            console.log("Please complete dsa, you're not hired!")
        }
    }
    else{
        console.log("Please complete full stack first, you're not hired!")
    }

}
else{
    console.log("Invalid student type")
}
