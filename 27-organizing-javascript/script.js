// const person = {
//   name: "mark",
//   age: 36,

//   getLastName: function () {
//     // add code here for getLastName function
//   },
// };

// function PersonConst(name, age) {
//   this.name = name;
//   this.age = age;
// }

// const playerOne = new PersonConst("Mark", 36);

// let playerTwo = PersonConst;

// console.log(playerTwo);

// playerTwo = new PersonConst("Mark", 36);

// console.log(playerTwo);

function createPlayer(name, age) {
  let _name = name;
  let _age = age;

  return {
    getName() {
      return _name;
    },
  };
}

const player = createPlayer("Mark David", 36);

player._name = "Alvin";

console.log(player.getName());
// const playerThree = playerFactory("April", 33);
// console.log(playerThree.name);

// class playerSpecial {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   getName() {
//     return this.name;
//   }
// }

// const playerBest = new playerSpecial("Mark David", 36);

// console.log(playerBest);
// playerBest.name = "Alvin";
// console.log(playerBest.name);
