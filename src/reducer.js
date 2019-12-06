import movies from './mocks/films.js';

const initialState = {
  currentGenre: ``,
  currentMovies: movies
};

const actionCreator = {
  chooseGenre: (genre) => ({
    type: `FILTER_CHANGED`,
    payload: genre
  }),
  chooseMovies: (genre) => ({
    type: `GET_MOVIES`,
    payload: genre
  })
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case `FILTER_CHANGED`:
      return Object.assign({}, state, {
        currentGenre: action.payload
      });
    case `GET_MOVIES`:
      return Object.assign({}, state, {
        currentMovies: movies.filter((it) => (it.genre === action.payload || action.payload === ``))
      });
    default:
      return initialState;
  }
};

export {actionCreator, reducer};
