const addNumbers = (a, b) => {
  try {
    const numOne = parseInt(a);
    const numTwo = parseInt(b);

    if (!isNaN(numOne) && !isNaN(numTwo)) {
      isError = false;
      return "Result is: " + (numOne + numTwo);
    } else {
      throw new Error("Both input must be integer. Try again.");
    }
  } catch (error) {
    isError = true;
    return error.message;
  }
};

let isError = false;

function main() {
  const valOne = prompt("Enter value number one: ");
  console.log(valOne);
  const valTwo = prompt("Enter value number two: ");
  console.log(valTwo);
  console.log(addNumbers(valOne, valTwo));

  if (isError) {
    main();
  }
}

main();
