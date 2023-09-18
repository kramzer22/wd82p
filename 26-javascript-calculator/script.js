const btnDel = document.getElementById("delete");
const btnEqual = document.getElementById("equals");
const btnClear = document.getElementById("clear");
const btnClearAll = document.getElementById("clear-all");

const btnNum = document.querySelectorAll(".num");
const btnOperator = document.querySelectorAll(".operator");

const txtEntry = document.getElementById("entry");

const divHistory = document.getElementById("history-container");

const btnSelect = document.getElementById("select");

let currentNum = 0.0;
let previousNum = 0.0;
let result = 0.0;
let lastNum = 0.0;
// let operation = "";

const operationList = "+/*-";

const calculateHistory = () => {
  let currentOperation = "";
  pHistory.forEach((item, index) => {
    if (operationList.includes(item.pElement.textContent)) {
      currentOperation = item.pElement.textContent;
      console.log(currentOperation);
    } else {
      if (index === 0) {
        result = parseFloat(item.pElement.textContent);
      } else {
        if (currentOperation === "+") {
          result += parseFloat(item.pElement.textContent);
        } else if (currentOperation === "-") {
          result -= parseFloat(item.pElement.textContent);
        } else if (currentOperation === "*") {
          result *= parseFloat(item.pElement.textContent);
        } else {
          result /= parseFloat(item.pElement.textContent);
        }
        console.log(result);
      }
    }
  });

  setPreviousInput(result);
  clearDisplayInput(result);
  setCurrentInput(0);
};

btnSelect.addEventListener("click", function (e) {
  if (activeHistory != null) {
    activeHistory.style.border = "none";
    activeHistory.style.background = "transparent";

    activeHistory.textContent = txtEntry.value;

    activeHistory = null;

    calculateHistory();
  }
});

btnDel.addEventListener("click", function (e) {
  if (txtEntry.value.length > 0) {
    let entryValue = txtEntry.value;
    entryValue = entryValue.substr(0, entryValue.length - 1);
    setCurrentInput(entryValue.length === 0 ? 0 : entryValue);
    txtEntry.value = entryValue;
  }
});

btnEqual.addEventListener("click", function (e) {
  if (
    operationList.includes(pHistory[pHistory.length - 1].value) &&
    txtEntry.value != ""
  ) {
    let prevOperation = pHistory[pHistory.length - 1].value;
    addHistory(currentNum);
    calculateOperation(prevOperation);
  }
});

btnClearAll.addEventListener("click", function (e) {
  console.log(e.target.textContent);
  clearAll();
});

btnNum.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    displayInput(e.target.textContent);
  });
});

const pHistory = [];

btnOperator.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    setOperation(e.target.textContent);
  });
});

btnClear.addEventListener("click", function (e) {
  if (activeHistory != null) {
    activeHistory.style.border = "none";
    activeHistory.style.background = "transparent";
    activeHistory = null;
  } else {
    clearCurrentInput();
    clearDisplayInput();
  }
});

const displayInput = (val) => {
  txtEntry.value += val;
  setCurrentInput(txtEntry.value);
  console.log("Current input: " + currentNum);
};

const setCurrentInput = (val) => {
  currentNum = parseFloat(val);
};

const clearCurrentInput = () => {
  currentNum = 0.0;
};

const clearDisplayInput = (placeHolderValue = 0) => {
  txtEntry.value = "";
  txtEntry.placeholder = placeHolderValue;
};

const setPreviousInput = (val) => {
  previousNum = parseFloat(val);
};

const setOperation = (method) => {
  operation = method;

  if (pHistory.length === 0) {
    previousNum = currentNum;
    lastNum = currentNum;
    console.log("new previous input: " + previousNum);

    addHistory(previousNum);
    addHistory(operation);

    clearCurrentInput();
    clearDisplayInput();
  } else {
    if (
      operationList.includes(pHistory[pHistory.length - 1].value) &&
      txtEntry.value === ""
    ) {
      pHistory[pHistory.length - 1].value = operation;
    } else if (operationList.includes(pHistory[pHistory.length - 1].value)) {
      let prevOperation = pHistory[pHistory.length - 1].value;
      addHistory(currentNum);
      addHistory(operation);

      calculateOperation(prevOperation);
    } else {
      addHistory(operation);
    }
  }
};

const calculateOperation = (opt) => {
  if (opt === "+") {
    result = parseFloat(previousNum) + parseFloat(currentNum);
  } else if (opt === "-") {
    result = parseFloat(previousNum) - parseFloat(currentNum);
  } else if (opt === "*") {
    result = parseFloat(previousNum) * parseFloat(currentNum);
  } else {
    result = parseFloat(previousNum) / parseFloat(currentNum);
  }
  setPreviousInput(result);
  clearDisplayInput(result);
  setCurrentInput(0);
};

const clearPreviousInput = () => {
  previousNum = "";
};

const clearAll = () => {
  clearCurrentInput();
  clearPreviousInput();
  operation = "";
  result = 0.0;

  pHistory.forEach((element, i) => {
    element.sampleMethod();
    element.dispose();
    pHistory[i] = null;
  });

  pHistory.splice(0);
  activeHistory = null;

  clearDisplayInput();
};

const addHistory = (val) => {
  const newHistory = new computationHistory(val, pHistory.length);
  pHistory.push(newHistory);

  divHistory.appendChild(newHistory.pElement);
  divHistory.scrollLeft = divHistory.scrollWidth;
};

let activeHistory = null;

class computationHistory {
  constructor(val, index) {
    console.log(val + "" + index);
    this.p = document.createElement("p");
    this.p.textContent = val;
    this.index = index;
    this.initializeObjEvent();
  }

  get pElement() {
    return this.p;
  }

  get value() {
    return this.p.textContent;
  }

  set value(val) {
    this.p.textContent = val;
  }

  initializeObjEvent() {
    this.sampleMethod = (e) => {
      this.p.style.background = "white";
      this.p.style.border = "1px solid black";

      if (activeHistory != null) {
        activeHistory.style.border = "none";
        activeHistory.style.background = "transparent";
      }

      activeHistory = this.p;
      console.log(activeHistory.textContent);

      if (!operationList.includes(this.p.textContent)) {
        txtEntry.value = this.p.textContent;
      } else {
        txtEntry.value = "";
      }
    };

    this.p.addEventListener("click", this.sampleMethod);
  }

  clearObjEvent() {
    this.p.removeEventListener("click", this.sampleMethod);
  }

  dispose() {
    this.clearObjEvent();
    this.p.remove();
  }
}
