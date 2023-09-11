const factorial = (a) => {
  try {
    const val = parseInt(a);

    if (!isNaN(val)) {
      isError = false;
      let factorialVal = val;
      let count = 0;
      for (let i = val - 1; i >= 1; i--) {
        let factor = factorialVal;
        factorialVal *= i;
        count += 1;
        console.log(factor + " * " + i + ": " + factorialVal);
      }

      return "Factorial result: " + factorialVal;
    } else {
      throw new Error("Input must be integer. Try again.");
    }
  } catch (error) {
    isError = true;
    return error.message;
  }
};

let isError = false;

function main() {
  const factorialVal = prompt("Enter a number: ");
  console.log("input value: " + factorialVal);
  console.log(factorial(factorialVal));

  if (isError) {
    main();
  }
}

main();
