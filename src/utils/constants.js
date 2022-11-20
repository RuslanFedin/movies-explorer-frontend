// Пути
export const PATHS = {
  MAIN_PAGE: '/',
  REGISTRATION:'/signup',
  AUTHORIZATION: '/signin',
  USER_PAGE: '/users/me',
  MOVIES: '/movies',
  SAVED_MOVIES: '/saved-movies',
  NOT_FOUND: '*'
}

// Ссылки
export const GITHUB_PAGE = 'https://github.com/RuslanFedin';
export const YA_PRACTICUM_PAGE = 'https://practicum.yandex.ru/profile/web/';
export const HOW_TO_LEARN = 'https://github.com/RuslanFedin/how-to-learn';
export const RUSSIAN_TRAVEL = 'https://ruslanfedin.github.io/russian-travel';
export const REACT_MESTO_API_FULL = 'https://github.com/RuslanFedin/react-mesto-api-full';

export const BASE_URL = 'https://movies-explorer.api.nomorepartiesxyz.ru';
export const MOVIES_API_URL = 'https://api.nomoreparties.co/beatfilm-movies';
export const MAIN_DB_URL = 'https://api.nomoreparties.co/'

// Параметры поиска
export const SEARCH_OPTIONS = {
  SHORT_DURATION: 40,
  SEARCH_ERROR: 'Введите ключевое слово',
}

// Ошибки
export const RESPONSE_CODE = {
  INTERNAL_SERVER_ERROR: 'ERROR: 500',
  UNAUTHORIZED: 'ERROR: 401',
  CONFLICT: 'ERROR: 409',
};

export const SEARCH_ERROR = {
  NOT_FOUND: 'Ничего не найдено',
  REQUEST_ERROR: 'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
}

export const ERROR_MESSAGE = {
  SERVER_500: 'На сервере произошла ошибка, попробуйте позже',

  REGISTER_409: 'Пользователь уже существует.',
  REGISTER_DEFAULT: 'При регистрации пользователя произошла ошибка.',

  LOGIN_401: 'Вы ввели неправильный логин или пароль.',
  LOGIN_DEFAULT: 'При входе произошла ошибка.',

  UPDATE_409: 'Пользователь уже существует.',
  UPDATE_DEFAULT: 'При обновлении профиля произошла ошибка.',
};

// Размеры экрана
export const SCREEN_WIDTH = {
  MAX: 1280,
  MED: 768,
  MIN: 480
}

// Отображаемое количество карточек и подгружаемое количество карточек
export const QTY_CARD = {
  MAX: 12,
  MED: 8,
  MIN: 5,
  MORE_MAX: 3,
  MORE_MED: 2,
  MORE_MIN: 2
}

export const NAME_REGEX = /^[a-zа-я/s-]{2,30}$/i;
export const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
export const EMPTY_INPUT = 'Заполните поле';
export const INVALID_EMAIL = 'Неверный email';
export const INVALID_NAME = 'Неверное имя';
