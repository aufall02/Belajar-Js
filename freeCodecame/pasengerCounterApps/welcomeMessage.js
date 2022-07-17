//grab welcome-el paragraph and store it in a variable calles welcomeEl
let welcomeEl = document.getElementById("welcome-el")
//create two variables (name,gratting) that contains your name 
//and the gretting we want to render on the page
let name = "Aufal Marom"
let greeting = "Welcome Back "

//Render the welcome message using welcomeEl.innertext

welcomeEl.innerText = greeting + name

//Add an emoji to the end!🥳
//Write your code bellow here
//HINT : count = count + 1

welcomeEl.innerText += "🥳"