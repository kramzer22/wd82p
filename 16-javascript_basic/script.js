let age = 36;
let tempInCelcius = 30.1;

let grade = prompt("What is your grade?");

if (grade <= 75) {
  console.log("Try again next semester.");
} else if (grade >= 76 && grade <= 80) {
  console.log("Pass! Exert more effort.");
} else if (grade >= 81 && grade <= 85) {
  console.log("Good! Keep it up.");
} else if (grade >= 86 && grade <= 90) {
  console.log("Very good! A job well done.");
} else if (grade >= 91 && grade <= 100) {
  console.log("Exellent!");
} else {
  console.log("Good Lord! It's over 100.");
}
