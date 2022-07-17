//create two variable firstName and lastName
let firstName = "Aufal"
let lastName= "Marom"

//Concatenate the two variables into third variable called fullName

let  fullName = firstName + " " +lastName
//log fullName to the console
console.log(fullName)


//create the funtion that logs out "Hi there, Aufal!"

let name = "Aufal"
let gretting = "Hi there"

function greetingAufal(){
    console.log(gretting + ", " + name +"!")
}

greetingAufal()



let myPoints = 3

// create two funtion , add3Points() and remove1point, and have them  add/remove points to/form the myPoints variable

function add3Points(){
    myPoints += 3
}


function remove1point(){
    myPoints -= 1
}
add3Points()
add3Points()
add3Points()
remove1point()
remove1point()
console.log(myPoints)


//Try too predict what each of the lines will log out 

console.log("2"+2)//22
console.log(11 + 7)//18
console.log(6 + "5")//65
console.log("My Points: "+ 5 + 9)//My points: 59
console.log(2 + 2)//4
console.log("11" + "14")//1114


//when the user clicks the pusrchase button, render out "something went wrong, please try again" in the praragraph that has the id="error" 
let errorParagraph = document.getElementById("error")
function purchase(){
    console.log("button is clicked")
        errorParagraph.textContent = "Something went wrong, please try again"
}

//practice-2

let num1 = 8
let num2 = 2

document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sum =document.getElementById("sum-el")



//create four functions: add(),subtract(),devide(),multiply()
function add(){
    console.log("button is clicked")
    result = num1 + num2
    sum.textContent = "Sum: "+result
}
function subtract(){
    result = num1 - num2
    sum.textContent = "Sum: "+result
}
function devide(){
    result = num1 / num2
    sum.textContent = "Sum: "+result
}
function multiply(){
    result = num1 * num2
    sum.textContent = "Sum: "+result
}
//call the correct functions when the user clicks one of the buttons
//perform the given calculation using num1 and num2
// render the result of calculation in the paragraph with id="sum-el"



//E.g. if the user click on the "plus" button, you should render
//"Sum: 10" (since inside the paragraph with id="sum ")