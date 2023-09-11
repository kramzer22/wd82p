const isPalindrome = (val) => {
  if (val.length % 2 === 1) {
    const validChars = "abcdefghijklmnopqrstuvwxyz";
    const lowerString = val.toLowerCase();
    console.log(lowerString);
    const arrayString = lowerString.split("");
    let cleanString = [];
    console.log(cleanString);
    for (let i = 0; i < arrayString.length; i++) {
      if (validChars.includes(arrayString[i])) {
        cleanString.push(arrayString[i]);
        console.log(cleanString);
      }
    }

    for (let i = 0; i < cleanString.length - i - 1; i++) {
      if (cleanString[i] != cleanString[cleanString.length - i - 1]) {
        console.log(
          cleanString[i] + " " + cleanString[cleanString.length - i - 1]
        );
        return false;
      }
    }

    return true;
  } else {
    return false;
  }
};

let isError = false;

function main() {
  const stringMessage = prompt("Enter a string or message: ");
  console.log("input message: " + stringMessage);
  console.log(isPalindrome(stringMessage));

  if (isError) {
    main();
  }
}

main();
