// // document.getElementById("count").innerText = 6


// let firstBatch = 6
// let secondBatch = 8
// let count0 =  firstBatch + secondBatch
// console.log(count0)



// //1. create a variable, myAge and set is value's  to your age
// // let myAge = 20

// //2. Log myAge variable to the console
// // console.log(myAge)


// // 1. Create two variable, myAge and humanDogRatio
// let myAge = 20
// let humanDogRatio = 7
// // 2. Multiply the two together and store  the result in myDogAge
// let myDogAge = myAge * humanDogRatio 
// // 3. Log the myDogAge to the console
// console.log(myDogAge)

// //reasigning and incrementing

// let count1 = 5
// //count1 + 1
// count1 = count1 + 1 //5 +  = 6

// console.log(count1)


// //1. Create a variable bonusPoints. Initialze it at as 50. Increase it to 100
// let bonusPoints = 50
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// //2. Decrease it down 25, and then  finally it to 70
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)

// bonusPoints = bonusPoints + 45
// console.log(bonusPoints)
// //3. console.log() the value after each step


// //the onclick event listener

// //intialize the count as 0
// //listen for click on the  increment button
// //Increment the count variable when the button is clicked(log it out)
// //change the cout-el in the HTML to reflect the new count
// //camelCase
// grab the save-el paragraph and store it in a variable called saveEl
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

// console.log(countEl)
// console.log(saveEl)
let count = 0
function increment() {
    count += 1
    countEl.textContent = count
    // console.log(count) 
    
}
// create the fuction save(), wich log outs the count when it's called
function save(){
// create a variable that contains  both the the count and the dash separator , i.e "12- "
let countStr = count+" - "
// render the variable using the innerText
saveEl.textContent += countStr
    console.log(count)
    //merubah angaka yan tampil menjadi 0
    countEl.textContent = 0
    //mengubah nilai dari count menjadi 0
    count = 0
}


// function countDown() {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
    
// }

// //Setting up the race

// countDown()
// //Go!!!!
// //Players are running the race
// //Race Finished
// //Get ready for new race
// countDown()


// function myLogger(){
//     console.log (45)
// }

// myLogger()


// let laps = 23
// let laps1 = 20
// let laps2 = 40
// //create the function that logs out the sum of all the lap  time

// function logLapTime() {
//     let totaTime = laps + laps1 + laps2
//     console.log(totaTime)
// }

// logLapTime()
// // console.log(totaTime)

// let lapsCompleted = 0

// function incrementLap(){
//     lapsCompleted += 1
// }

// incrementLap()
// incrementLap()
// console.log(lapsCompleted)