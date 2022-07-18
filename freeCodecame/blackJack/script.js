//create two variable, firstCard and secondCard
//set their values to a random number between 2-11
let firstCard = 10
let secondCard = 4
let cards = [firstCard,secondCard]//array - order list of items
let hasBlackJack = false
//2. Create a variable, sum, and set it to the sum off
//two cards

let sum = firstCard + secondCard 
//Create a variable called isAlive and assign it to true
let isAlive = true
//Flip its variable to false  in the appropriate code block

//Declare a variable the message variable and assign its value to an Empty String
let message = ""
//reassign the message variable to the string we're logging out
//Store the message-el paragraph in a variable called messageEl
let messageEl = document.getElementById("message-el")
//Store the card paragraph in a variable cards-el
let cardsEl = document.getElementById("cards-el")
//Store the sum paragraph in a variable sum-el
let sumEl = document.getElementById("sum-el")
// let sumEl = document.querySelector(".sum-el")
// let sumEl = document.querySelector("#sum-el")
// let sumEl = document.querySelector("body")

//id = #
//class = .
console.log(sumEl)
console.log(cardsEl)
//Create a startGame() funtion. Move the conditonal bellow(line 20 - 28) inside the body of funtion

function renderGame(){
    console.log("button is clicked")
    //render out firstCard anf secondCard
    //render the cards on the page using this format "Cards: 4 10"
    // cardsEl.textContent = "Cards "+firstCard+" "+secondCard
    cardsEl.textContent = "Cards :"+ cards[0]+" "+cards[1]
    //render out ALL card the cards we have

    //render the sum on the page using this format "Sum: 14"
    sumEl.textContent = "Sum: "+sum

    if (sum <= 20){
        message = "Do you want to draw a new card? 😉 "
    }else if (sum === 21){
        message = "Wohoooo! you've got Blackjack! 🥳 "
        hasBlackJack = true
    }else if(sum > 21){
        message = "you're out of the game! 😌 "
        isAlive = false
    }

//Log it out to check that your're doing it right
// console.log(isAlive)
// //CASH OUT!
// console.log(hasBlackJack)

// console.log(4 === 3)//false
// console.log(5 > 2)//true
// console.log(12 > 12)//false
// console.log(3 < 0)//false
// console.log(3 >= 3)//true
// console.log(11<= 11)//true
// console.log(3 <= 2)//false

// log it out!
    console.log(message)

//Display the message in the messageEl using messageEl.textContent
messageEl.textContent = message
}

//Create a new funtion called startGame that calls renderGame() "
function startGame(){
    renderGame()
}
//Create funtion newCard()  that logs out " Drawing a new card from the deck!"

function newCard(){
    console.log("Drawing a new card form the deck!")
    //Create a card variable, and hard code its value to a number
    let card = 8
    //add the new card to the sum variable
    sum += card
    //call startGame()
    renderGame()
}
 


















//check if the person is old enough to enter the night club (21)
//log a suibtable message to the console in both cases
let age = 22
// if less than 21 -> "you can not enter the club!"
//else -> "Welcome!"

if (age < 21){
    console.log("You can not enter the club!")
}else{
    console.log("Welcome!")
} 

//Check if the person is elegible for a birthday card form the king! (100)
let age1 = 100

//if less than 100 -> "Not elegible"
if (age1 < 100){
    console.log("Not elegible")
}
//else if exactly 100 -> "Here is your birthday card from the King!"
else if(age1 === 100){
    console.log("Here is your birthday card from the King!")
}
//else -> "Not elegible, you have already gotten one"
else{
    console.log("Not elegible, you have already gotten one")
}