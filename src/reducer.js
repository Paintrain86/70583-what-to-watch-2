import api from './api.js';

const initialState = {
  movies: [],
  currentGenre: ``,
  currentMovies: []
};

const actionCreator = {
  chooseGenre: (genre) => ({
    type: `FILTER_CHANGED`,
    payload: genre
  }),
  chooseMovies: (genre) => ({
    type: `GET_MOVIES`,
    payload: genre
  }),
  loadMovies: (movies) => ({
    type: `LOAD_MOVIES`,
    payload: movies
  })
};

const operation = {
  loadMovies: () => (dispatch) => {
    return api.get(`/films`)
      .then((response) => {
        dispatch(actionCreator.loadMovies(response));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `FILTER_CHANGED`:
      return Object.assign({}, state, {
        currentGenre: action.payload
      });

    case `GET_MOVIES`:
      return Object.assign({}, state, {
        currentMovies: initialState.movies.filter((it) => (it.genre === action.payload || action.payload === ``))
      });

    case `LOAD_MOVIES`:
      return Object.assign({}, state, {
        movies: action.payload
      });

    default:
      return initialState;
  }
};

export {actionCreator, operation, reducer};
