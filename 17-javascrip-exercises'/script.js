// execise 01

let balance = 1000;
let transaction1 = 500;
let transaction2 = -200;
let transaction3 = -1000;

balance += transaction1;

balance += transaction2;

balance += transaction3;

console.log(balance);

// exercise 02

let testrScore1 = 75;
let testrScore2 = 80;
let testrScore3 = 82;

let averageScore = (testrScore1 + testrScore2 + testrScore3) / 3;

console.log(Math.round(averageScore));

// exercise 03

let temperature = 17;

if (temperature > 30) {
  console.log("It's hot outside.");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("The weather is pleasant.");
} else if (temperature < 20) {
  console.log("It's a bit chilly.");
}
