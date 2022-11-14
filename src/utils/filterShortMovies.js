import { SEARCH_OPTIONS } from "./constants";

export function filterShortMovies(movies, request, isShort) {

  // let filteredMovies = movies;
  // let result;

  // if (isShort) {
  //   filteredMovies = filteredMovies.filter((movie) => movie.duration <= SEARCH_OPTIONS.SHORT_DURATION);
  // }

  // result = filteredMovies.filter((movie) => {
  // return movie.nameRu.toLowerCase().includes(request.toLowerCase());
  // })

  // return result;

  function filterMovies (movie) {
    if (
      movie.nameRU.toLowerCase().includes(request.toLowerCase()) &&
      ((isShort && movie.duration <= SEARCH_OPTIONS.SHORT_DURATION) || !isShort)
    ) {
      return true;
    }
    return false;
  }
  const result = movies.filter(filterMovies);
  return result;
}
