const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");

const backdrop = document.getElementById("backdrop");
const cancelModalButton = document.getElementById("cancel-modal");
const addModalButton = document.querySelector("#add-button");
const userInput = addMovieModal.querySelectorAll("input");
const entryText = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];
const updateUI = () => {
  if (movies.length === 0) {
    entryText.style.display = "block";
  } else {
    entryText.style.display = "none";
  }
};
const deleteMovie = (movieId) => {
  let movieIndex = 0;
  for (const movie of movies) {
    if (movie.id === movieId) {
      break;
    }
    movieIndex++;
  }
  movies.splice(movieIndex, 1);

  const moviesList = document.getElementById("movie-list");
  moviesList.children[movieIndex].remove();
};
const cancelMovieDeletion = () => {
  deleteMovieModal.classList.remove("visible");
};

deleteMovieModal
  .querySelector(".btn--passive")
  .addEventListener("click", () => {
    deleteMovieModal.classList.remove("visible");

    //   cancelMovieDeletion();
  });

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();

  deleteMovieModal
    .querySelector(".btn--danger")
    .addEventListener("click", () => {
      deleteMovie(movieId);
      cancelMovieDeletion();
      backdrop.classList.remove("visible");
    });

  //  deleteMovie(movieId);
};

const renderNewMovieElement = (id, title, imageUrl, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.classList.add("movie-element");
  newMovieElement.innerHTML = `
    <div class="movie-element__image">
    <img src="${imageUrl}" alt="${title}"/>
    </div>
<div class="movie-element__info">
<h2>${title}</h2>
<h2>${rating}/5 stars</h2>
</div>
    `;

  newMovieElement.addEventListener("click", deleteMovieHandler.bind(null, id));

  const moviesList = document.getElementById("movie-list");
  moviesList.append(newMovieElement);
};
const clearInputMovie = () => {
  userInput[0].value = "";
  userInput[1].value = "";
  userInput[2].value = "";
};
const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};
const addMovieHandler = () => {
  const titleValue = userInput[0].value;
  const imageUrlValue = userInput[1].value;
  const ratingValue = userInput[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    +ratingValue < 1 ||
    +ratingValue > 5
  ) {
    alert("please enter the valid value (rating between 1 and 5 )");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    titleValue: titleValue,
    imageUrlValue: imageUrlValue,
    ratingValue: ratingValue,
  };
  movies.push(newMovie);
  console.log(movies);
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
  clearInputMovie();
  renderNewMovieElement(
    newMovie.id,
    newMovie.titleValue,
    newMovie.imageUrlValue,
    newMovie.ratingValue
  );
  updateUI();
};

startAddMovieButton.addEventListener("click", () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
});
backdrop.addEventListener("click", () => {
     addMovieModal.classList.toggle("visible");
  toggleBackdrop();
  cancelMovieDeletion();
  clearInputMovie();

 
});
cancelModalButton.addEventListener("click", () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
  clearInputMovie();
});

addModalButton.addEventListener("click", addMovieHandler);
