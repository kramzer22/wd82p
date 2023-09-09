// const container = document.querySelector("#container");
// const display = document.querySelector(".display");

// const newDiv = document.createElement("div");
// newDiv.classList.add("red-box");

// container.appendChild(newDiv);

// container.style.height = "100px";
// container.style.width = "100px";
// container.style.backgroundColor = "red";
// container.style.margin = "0 auto";

// // Will set the style depending on the content will ignore previous styling
// container.style.cssText =
//   "height: 200px; width: 200px; background-color:red; margin:0 auto;";

// // Apply style using setAttribute
// container.setAttribute(
//   "style",
//   "height: 150px; width: 100vw; background-color:blue; margin:0 auto;"
// );

const container = document.querySelector(".container");

const pContent = document.createElement("p");
pContent.style.cssText = "color: red;";
pContent.textContent = "Hey I'm red!";

const hThreeContent = document.createElement("h3");
hThreeContent.style.cssText = "color: blue;";
hThreeContent.textContent = "Hey I'm blue!";

const divPanel = document.createElement("div");
divPanel.style.cssText = "border:black 1px solid; background-color:pink;";

const hOneInDivPanel = document.createElement("h1");
hOneInDivPanel.textContent = "I'm in a div!";

const pInDivPanel = document.createElement("p");
pInDivPanel.textContent = "ME TOO!";

divPanel.appendChild(hOneInDivPanel);
divPanel.appendChild(pInDivPanel);

container.appendChild(pContent);
container.appendChild(hThreeContent);
container.appendChild(divPanel);

const button = document.getElementById("button");

// button.onclick = () => alert("Hello World!");

const b = "Hello World!";

button.addEventListener("click", function () {
  buttonClicked(b);
});

const buttonClicked = (a) => {
  alert(a);
};
