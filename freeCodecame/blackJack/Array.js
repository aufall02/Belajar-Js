// // Arrays = ordered list of items-composite / commplex data tipe

// let featurPosts = [
//     "Check out my Netflix clone",// 0 index
//     "Here's the code for my project ",//1 index
//     "I've just relaunched my portfolio"//2 index
// ]

// console.log(featurPosts[2])


// //Create an array that lists your i.e. experience, education,licenses, skills or similar
// //the items of array should be strings

// let experience = [
//     "CEO at Scrimba",
//     "Frontend Developer at xeneta",
//     "people counter for Norst"
// ]

// //Make the following apper in the console:
// //Frontend developer at Xeneta
// //people counter for norst
// //CEO at Scrimba

// console.log(experience[1])
// console.log(experience[2])
// console.log(experience[0])
// console.log(experience.length)


// function testFor(n){
//     for (let i = 1;i <= n;i++){
//         console.log(i)
//     }
// }

// testFor(5)


function fizzBuzz(n) {
    // Write your code here
    for ( i = 1; i<= n ; i++ ){
        if (i%3 == 0 && i%5 == 0){
            // i = "FizzBuzz"
            console.log("FizzBuzz")
        }else if( i%3 == 0 && i%5 != 0 ){
            // i = "Fizz"
            console.log("Fizz")
        }else if(i%3 != 0 && i%5 == 0 ){
            // i = "Bluzz"
            console.log("Bluzz")
        }else if(i%3 != 0 && i%5 != 0){
            console.log(i)
        }
    }
    for (let i=1;i<=n;i++){
        if (i%3 === 0 && i%5 === 0){
            console.log("FizzBuzz")
        }else if(i%3 === 0 && i%5 !== 0){
            console.log("Fizz")
        }else if(i%3 !== 0 && i%5 === 0){
            console.log("Buzz")
        }else {
            console.log(i)
        }
    }


}

fizzBuzz(300)