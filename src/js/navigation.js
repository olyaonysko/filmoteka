
import { renderFilms } from './initialHomePage';
import refs from './refs';
import { drawWatchedFilmList, drawQueueFilmList } from './libraryPage';
import {
  showDetails,
  toggleToQueue,
  toggleToWatched,
} from './filmDetailsPage';
let selectFilm = [];

refs.libraryPage.classList.add('hidden');
refs.detailsSectionBlock.classList.add('visually-hidden');

function activeLibraryPage() {
  refs.homePage.classList.add('hidden');
  refs.detailsSectionBlock.classList.add('visually-hidden');
  refs.libraryPage.classList.remove('hidden');
  refs.backToTopBtn.classList.remove('hidden');

  refs.linkLibrary.classList.add('und1');
  refs.linkHomePage.classList.remove('und');

  drawQueueFilmList();
  refs.btnToQueueList.classList.add('undreline');
  refs.btnToQueueList.addEventListener('click', drawQueueFilmList);
  refs.btnToWatchList.addEventListener('click', drawWatchedFilmList);
}

function activeHomePage() {
  refs.homePage.classList.remove('hidden');
  refs.movieList.classList.remove('hidden');
  refs.backToTopBtn.classList.remove('hidden');
  refs.detailsSectionBlock.classList.add('visually-hidden');
  refs.libraryPage.classList.add('hidden');

  refs.linkHomePage.classList.add('und');
  refs.linkLibrary.classList.remove('und1');

  refs.btnToQueueList.removeEventListener('click', drawQueueFilmList);
  refs.btnToWatchList.removeEventListener('click', drawWatchedFilmList);
}

export default function activeDetailsPage(movieId, itsLibraryFilm) {
  refs.homePage.classList.add('hidden');
  refs.movieList.classList.add('hidden');
  refs.backToTopBtn.classList.add('hidden');

  refs.detailsSectionBlock.classList.remove('visually-hidden');

  if (itsLibraryFilm) {
    let allLocalStorageFilms = [
      ...JSON.parse(localStorage.getItem('filmsQueue')),
      ...JSON.parse(localStorage.getItem('filmsWatched')),
    ];
    selectFilm = allLocalStorageFilms.find(film => film.id === movieId);
  } else {
    selectFilm = renderFilms.find(film => film.id === movieId);
  }
  showDetails(selectFilm);


 

  const buttonBack = document.querySelector('#back-button');
  buttonBack.addEventListener('click',()=>{
    activeHomePage()

  })

 


  document
    .querySelector('.js-details__queue')
    .addEventListener('click', toggleToQueue);
  document
    .querySelector('.js-details__watched')
    .addEventListener('click', toggleToWatched);

  refs.btnToQueueList.removeEventListener('click', drawQueueFilmList);
  refs.btnToWatchList.removeEventListener('click', drawWatchedFilmList);
}

refs.linkHomePage.addEventListener('click', activeHomePage);
refs.linkLibrary.addEventListener('click', activeLibraryPage);
refs.linkLogotype.addEventListener('click', activeHomePage);



export { selectFilm };
