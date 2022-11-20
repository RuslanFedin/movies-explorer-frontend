import { SEARCH_OPTIONS } from "./constants";

export function filterShortMovies(movies, request, isShort) {

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
