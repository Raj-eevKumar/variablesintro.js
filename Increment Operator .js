//Increment Operator: (++): It increses the value by 1
//Decrement Operator: (--): It decreses the value by 1
//Increment and Decrement have two types: Post, and Pre
//Post: in the post increment or decrement it doesn't change tha value by 1 in the same line, and we add operator(++,--) after variable
//variable_name ++/--
//Pre: in the case of pre increment or decrement, it changes the value by 1 in the same line itself, we add operator(++,--) before variable
//--/++variable_name


//Example 1: Basic Example for Post Increment and Decrement

//Post Increment

//var x = 20
//console.log(x++)  // 20
//console.log(x) //21

//Post Decrement
//console.log(x--) //
//console.log(x) // 20

//Example 2: Basic Example for Pre Increment and Decrement

//Pre-Increment
//var x = 40
//console.log(++x) //41
//console.log(x) //41

//Pre-Decrement
//console.log(--x) //40


//Example 3: Good Example

var x = 10
var y = 20

var result = --x + y++ + 2*(y--)*(--x) //

console.log(result)








