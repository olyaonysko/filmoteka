import refs from './refs';
import activeDetailsPage from './3navigation'

const libraryList = document.querySelector('.libraryPage-list');

export function drawWatchedFilmList() {
    refs.btnToWatchList.classList.add('libraryPage__btn--active');
    refs.btnToQueueList.classList.remove('libraryPage__btn--active');
    libraryList.innerHTML = "";
    const localStorageArray = JSON.parse(localStorage.getItem('filmsWatched'));
    let fragment = document.createDocumentFragment();
    localStorageArray.forEach(film =>
        fragment.append(createLibraryCardFunc(film.title, film.backdrop_path, film.id, film.vote_average)),
    );
    libraryList.append(fragment);
//  refs.libraryList.classList.add('visually-hidden');
}

export function drawQueueFilmList() {
    refs.btnToWatchList.classList.remove('libraryPage__btn--active');
    refs.btnToQueueList.classList.add('libraryPage__btn--active');
    libraryList.innerHTML = "";
    const localStorageArray = JSON.parse(localStorage.getItem("filmsQueue"));
    let fragment = document.createDocumentFragment();
    localStorageArray.forEach(film => fragment.append(createLibraryCardFunc(film.title, film.backdrop_path, film.id, film.vote_average)));
    libraryList.append(fragment);
    // refs.libraryList.classList.add('visually-hidden');
}

function createLibraryCardFunc(name, imgPath, movieId, voteAverage) {
    const listItem = document.createElement('li');
    listItem.classList.add('libraryPage__filmItem');
  
    const img = document.createElement('img');
    img.classList.add('libraryPage__img');
    img.setAttribute('src', `https://image.tmdb.org/t/p/w500${imgPath}`);
  
    const movieName = document.createElement('p');
    movieName.classList.add('libraryPage__movieName');
    movieName.textContent = name;

    const voteFilm = document.createElement('p');
    voteFilm.classList.add('libraryPage__vote');
    voteFilm.textContent = voteAverage;
  
    listItem.append(img, movieName, voteFilm);
  
    listItem.addEventListener('click', () => activeDetailsPage(movieId, true));
  
    return listItem;
}
  
