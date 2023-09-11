const reverseString = (val) => {
  if (val.length === 0) {
    isError = true;
    return "Please enter a valid string/message.";
  } else {
    let arrayString = val.split("");
    console.log(arrayString);
    for (let i = 0; i < val.length - i; i++) {
      const tempValue = arrayString[val.length - i];
      arrayString[val.length - i] = arrayString[i];
      arrayString[i] = tempValue;
    }
    isError = false;
    return "reverse message: " + arrayString.join("");
  }
};

let isError = false;

function main() {
  const stringMessage = prompt("Enter a string or message: ");
  console.log("input message: " + stringMessage);
  console.log(reverseString(stringMessage));

  if (isError) {
    main();
  }
}

main();
