const findLargestNumber = (val) => {
  let tempString = val.replace(" ", "");
  const numList = tempString.split(",");
  console.log(numList);
  try {
    let largestNumber = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < numList.length; i++) {
      let tempNum = parseInt(numList[i]);

      if (!isNaN(tempNum)) {
        if (tempNum > largestNumber) {
          largestNumber = tempNum;
        }
      } else {
        throw new Error("Invalid entry: " + numList[i] + ". Try again.");
      }
    }

    isError = false;
    return "Largest number is: " + largestNumber;
  } catch (error) {
    isError = true;
    return error.message;
  }
};

let isError = false;

function main() {
  const stringMessage = prompt(
    "Enter a list of number separated by ',' \n Example: 2, 4, 20, 50"
  );
  console.log("input numbers: " + stringMessage);
  console.log(findLargestNumber(stringMessage));

  if (isError) {
    main();
  }
}

main();
