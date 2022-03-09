//EXERCICE

// #
// ##
// ###
// ####
// #####
// ######
// #######
let stars = "";
for (let i = 0; i <= 7; i++) {
  for (let j = 0; j < i; j++) {
    stars += "#";
  }
  stars += "\n";
}

//console.log(stars);
let message = "";
for (let number = 1; number <= 100; number++) {
  if (number % 3 == 0 && number % 5 == 0) {
    message += "FizzBuzz\n";
  }
  if (number % 3 == 0) {
    message += "Fizz\n";
  }
  if (number % 5 == 0) {
    message += "Buzz\n";
  }
}

//console.log(message);
let response = "";
for (let initialisation = 0; initialisation < 8; initialisation++) {
  if (initialisation % 2 == 0) {
    response += " # # # #\n";
  } else {
    response += "# # # #\n";
  }
}

console.log(response);
