//Example 1: 

var gendar = "female"
var age = 17

if(gendar==="male"){
    
    //age eligibility
    if(age>=21){
        
        //age limitation
        if(age<=30){
            console.log("Male: You're eligible for marriage")
        }
    }else{
        console.log("Male: you're chhotu now")
    }
}
else if(gendar==="female"){
    
    //age eligibility
    if(age>=18){
        
        //age limitation
        if(age<=30){
            console.log("Female: You're eligible for marriage")
        }
    }else{
        console.log("Female: you're are chhoti now")
    }
}else{
    console.log("Invalid gender")
}