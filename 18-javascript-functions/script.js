const addSeven = (a) => a + 7;

console.log(addSeven(3));

const multipleValue = (a, b) => a * b;

console.log(multipleValue(3, 3));

const fullName = "mark david panganiban";
console.log(changeToProperCase(fullName));

function changeToProperCase(value) {
  let splitItem = value.split(" ");

  let result = "";

  splitItem.forEach((word, index) => {
    let properWord = "";

    for (let i = 0; i < word.length; i++) {
      if (i === 0) {
        properWord += word.charAt(i).toUpperCase();
      } else {
        properWord += word.charAt(i).toLowerCase();
      }
    }

    if (index === 0) {
      result = properWord;
    } else {
      result = result + " " + properWord;
    }
  });

  return result;
}

console.log(returnLastLetter("abcd"));

function returnLastLetter(word) {
  lastIndex = word.length - 1;
  //console.log(lastIndex);
  return word.charAt(lastIndex);
}
