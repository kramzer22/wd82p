// const fruits = ["Apple", "Orange", "Banana"];

// console.log(fruits[0]);

const cars = ["honda", "toyota", "mitsubishi"];

for (var car of cars) {
  console.log(car);
}

for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

cars.forEach((car) => {
  console.log(car);
});
