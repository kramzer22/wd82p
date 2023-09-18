// const person = {
//   name: "Mark David",
//   age: 36,
//   gender: "male",
// };

// console.log(person);

// delete person.age;

// console.log(person);

// person.profession = "programmer";
// person.age = 36;

// console.log(person);

// function human(name, age, gender) {
//   return { name, age, gender };
// }

// const human1 = human("Mark David", 36, "male");
// const human2 = human("April Marie", 33, "female");

// console.log(human1);
// console.log(human2);

// for (let key in human1) {
//   console.log(human1[key]);
// }

const isEmpty = (obj) => (Object.keys(obj).length === 0 ? true : false);

const user = {};

console.log(isEmpty(user));

user.name = "John";
user["surname"] = "Smith";

console.log(isEmpty(user));

console.log(user);

user.name = "Peter";

console.log(user["name"]);

delete user.name;

console.log(user);

const salaries = {
  mark: 130,
  john: 140,
  april: 100,
};

const sumSalaries = (obj) =>
  Object.keys(obj).reduce((val, key) => val + obj[key], 0);

console.log(sumSalaries(salaries));
