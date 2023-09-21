const divMain = document.getElementById("content");

const btnShowForm = document.getElementById("add-item");
const btnCancel = document.getElementById("cancel");
const btnAdd = document.getElementById("add");
const frmContainer = document.getElementById("form-container");
const txtInput = document.querySelectorAll(".text-input");

const libraryList = [];

const genreItemList = [];

class GenObject {
  constructor(genre, element) {
    this.genre = genre;
    this.element = element;
  }
}

btnShowForm.addEventListener("click", () => {
  frmContainer.style.display = "block";
  clearInput();
});

btnCancel.addEventListener("click", () => {
  frmContainer.style.display = "none";
});

btnAdd.addEventListener("click", () => {
  if (checkInputValue()) {
    createBook(
      txtInput[0].value,
      txtInput[1].value,
      txtInput[2].value,
      txtInput[3].value
    );

    addBookToLibrary(libraryList[libraryList.length - 1]);

    frmContainer.style.display = "none";
  }
});

const clearInput = () => {
  txtInput.forEach((element) => {
    element.value = "";
  });
  txtInput[0].focus();
};

const addBookToLibrary = (b) => {
  const g = b.getGenre().split(",");
  g.forEach((item) => {
    const trimItem = item.trim();
    if (genreItemList.length === 0) {
      addGenreToMain(trimItem);
    } else if (!genreItemList.some((item) => item.genre === trimItem)) {
      addGenreToMain(trimItem);
    } else {
      for (const item of genreItemList) {
        if (item.genre === trimItem) {
          addBookToGenre(item.element);
          console.log("book added.");
          break;
        }
      }
    }
  });
};

const addGenreToMain = (g) => {
  const divGenre = document.createElement("article");
  const hTwoGenreTitle = document.createElement("h2");
  const divGenreList = document.createElement("section");

  divGenre.className = "genre-container";
  divGenreList.className = "genre-list";

  hTwoGenreTitle.textContent = g.toUpperCase();

  const gen = new GenObject(g, divGenreList);

  genreItemList.push(gen);

  divGenre.appendChild(hTwoGenreTitle);
  divGenre.appendChild(genreItemList[genreItemList.length - 1].element);
  divMain.appendChild(divGenre);

  addBookToGenre(genreItemList[genreItemList.length - 1].element);
};

const addBookToGenre = (g) => {
  const divBook = document.createElement("div");
  const hBookTitle = document.createElement("h3");
  const pAuthor = document.createElement("p");
  const pPages = document.createElement("p");

  divBook.className = "book";

  hBookTitle.textContent = libraryList[libraryList.length - 1].getTitle();
  pAuthor.textContent = libraryList[libraryList.length - 1].getAuthor();
  pPages.textContent = libraryList[libraryList.length - 1].getPages();

  divBook.appendChild(hBookTitle);
  divBook.appendChild(pAuthor);
  divBook.appendChild(pPages);

  g.appendChild(divBook);
};

const checkInputValue = () => {
  let index = 0;
  let result = true;
  for (const element of txtInput) {
    if (index < 3) {
      element.value = element.value.trim();

      if (element.value.length < 3) {
        element.style.border = "2px solid red";
        element.focus();
        result = false;

        break;
      } else {
        element.style.border = "1px solid black";
      }
    } else {
      element.value = element.value.replace(" ", "");
      const pageValue = Math.floor(parseInt(element.value));

      if (isNaN(pageValue) || pageValue < 1) {
        element.style.border = "2px solid red";
        element.focus();
        result = false;

        break;
      } else {
        element.style.border = "1px solid black";
      }
    }
    index++;
  }

  return result;
};

const createBook = (t, a, g, p) => {
  const newBook = book(t, a, g, p);
  libraryList.push(newBook);
  console.log(libraryList[libraryList.length - 1].getTitle());
  console.log(libraryList[libraryList.length - 1].getAuthor());
  console.log(libraryList[libraryList.length - 1].getPages());
  console.log(libraryList.length);
};

const book = (t, a, g, p) => {
  let title = t;
  let author = a;
  let genre = g;
  let pages = p;

  return {
    getTitle() {
      return title;
    },

    getAuthor() {
      return author;
    },

    getPages() {
      return pages;
    },

    getGenre() {
      return genre;
    },
  };
};
