// import apiService from './apiService'
// import renderMarkup from './1initialHomePage'
// import './1initialHomePage'
// const refs = {
//     searchForm: document.querySelector('#search-form'),
//     input: document.querySelector('.input-js'),
//     movieList: document.querySelector('.js-movieList'),
//     buttonContainer: document.querySelector('.homePage__button'),
//     prevBtn: document.querySelector('[data-action="prev"]'),
//     nextBtn: document.querySelector('[data-action="next"]'),
//     pageValue: document.querySelector('.homePage__value'),
//     errorRef: document.querySelector('.error-message'),
//     titleRef: document.querySelector('.title'),
// }

// let pageNumber = 1;
// // let inputValue = '';

// function searchFilms(event) {
//     event.preventDefault();
//     apiService.query = refs.input.value;
//     apiService.page = pageNumber;
//     console.log(apiService.page);
//     if (!apiService.query || !apiService.query.trim()) {
//          console.log('error');
//          return;
//     }
//     clearInput();
//     clearCardList()
//     apiService.resetPage();
//     fetchFilms();
//     // form.reset();
// }

// function generatePopularFilmList() {
//      apiService.fetchPopularMoviesList().then(data => {
//          console.log(data);
//          renderMarkup.generateMarkup(data);
//          plaginationNavigation(data.total_pages, data.page);
//     })
// }

// refs.searchForm.addEventListener('submit', searchFilms);
// refs.buttonContainer.addEventListener('click', plaginationNavigation);

// function fetchFilms() {
//     apiService.searchFilms().then(data => {
//         if (data.results.length === 0) {
//             refs.buttonContainer.classList.add('hidden')
//             refs.titleRef.classList.add('hidden');
//             refs.errorRef.classList.remove('hidden');
//             return;
//         }
//         refs.errorRef.classList.add('hidden');
//         renderMarkup.generateMarkup(data);
//         refs.titleRef.classList.add('hidden');
//         plaginationNavigation(data.total_pages, data.page);
//         refs.pageValue.textContent = apiService.page;
//     })
// }

// function onButtonClick() {
//     refs.pageValue.textContent =
//         apiService.page;
//     clearCardList();
//     if (apiService.query !== '') {
//         fetchFilms();
//     } else {
//         generatePopularFilmList();
//     }
// }

// onButtonClick();


// function plaginationNavigation(event) {
//     if (event.target === refs.nextBtn) {
//         apiService.page += 1;
//         refs.prevBtn.disabled = false;
// //         window.scroll({
// //             top: 500,
// //             behavior: "auto",
// //   });
//         onButtonClick();
//     }
//     if (event.target === refs.prevBtn) {
//          if (refs.pageValue.textContent === '1') {
//              refs.prevBtn.disabled = true;
//              return;
//          }
//         apiService.page -= 1;
//         refs.prevBtn.disabled = false;
//         onButtonClick();
//     }
// }

// function clearInput() {
//     refs.input.value = '';
// }

// function clearCardList() {
//     refs.movieList.innerHTML = '';
// }