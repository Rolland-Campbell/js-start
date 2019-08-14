// let snack = {
//   type: "granola bar",
//   manufacturer: "quaker",
//   consistency: "chewy",
//   flavor: "chocolate",
//   calorieCount: "100",
//   weight: "0.84 oz",
//   ingredients: [
//     {
//       name: "sugar",
//       amount: 20,
//     },
//     {
//       name: "chocalate chips",
//       amount: "30",
//     }
//   ]
// };

// let ingredientsOne = snack.ingredients[0]

// //console.log("ingredients: ", snack.ingredients[0])




// for (let num = 0; num <= 10; num++) {

//   console.log(num) //called 10 times (num < 10)
// }


function numberGuess() {
  //ask user for their guess and retain guess
  let guess = +prompt("Pick a number between 1 and 10")
  //pick a number
  let number = 10
  //see if guess matches the number
  if (number == guess) {
    console.log("You are amazing!")
  } else {
    console.log("You suck!")
  }
}