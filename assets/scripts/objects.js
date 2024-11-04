// const person = {
//   name: "ali",
//   age: 24,
//   hobbies: ["coding", "traveling"],
//   greet: () => {
//     alert("hi there");
//   },
// };

// person.isAdmin = true;

// console.log(person['age']);

// const propKey = 'field 12';
// const person = {
//     [propKey]: 'Max'
// };
// console.log(person['field 12']);

const addMovieBtn = document.getElementById("add-movie-btn");
const searchBtn = document.getElementById("search-btn");

const movies = [];
const renderMovie = (filterTitle = "") => {
  const movieList = document.getElementById("movie-list");

  if (movies.length === 0) {
    movieList.classList.remove("visible");
  } else {
    movieList.classList.add("visible");
  }

  movieList.innerHTML = "";

  const filterMovie = !filterTitle ? movies : movies.filter((movie)=>movie.info.title.includes(filterTitle));


  for (const movie of filterMovie) {
    const createElementLi = document.createElement("li");
    // createElementLi.textContent = movie.info.title;
    let text = movie.info.title + " - ";
    for (const key in movie.info) {
      if (key !== "title") {
        text = text + `${key} : ${movie.info[key]}`;
      }
    }
    createElementLi.textContent = text;
    movieList.append(createElementLi);
  }
};

const addMovieHandler = () => {
  const title = document.getElementById("title").value;
  const extraName = document.getElementById("extra-name").value;
  const extraValue = document.getElementById("extra-value").value;

  if (
    title.trim() === "" ||
    extraName.trim() === "" ||
    extraValue.trim() === ""
  ) {
    return;
  }

  const newMovie = {
    info: {
      title: title,
      [extraName]: extraValue,
    },
    id: Math.random(),
  };

  movies.push(newMovie);
  console.log(newMovie);

  renderMovie();
};

const searchMovieHandler = () => {
  const filterTitle = document.getElementById("filter-title").value;
  renderMovie(filterTitle);
};

addMovieBtn.addEventListener("click", addMovieHandler);
searchBtn.addEventListener("click", searchMovieHandler);
