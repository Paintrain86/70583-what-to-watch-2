import startMovies from './mocks/films.js';
import {reducer} from './reducer.js';

describe(`Reducer should work correctly`, () => {
  it(`Returns initialState when null is passed`, () => {
    expect(reducer(null, {}))
      .toEqual({
        currentGenre: ``,
        currentMovies: startMovies
      });
  });

  it(`Returns correct state when genre is changed to "horror"`, () => {
    expect(reducer({
      currentGenre: ``,
      currentMovies: startMovies
    }, {
      type: `FILTER_CHANGED`,
      payload: `horror`
    }))
    .toEqual({
      currentGenre: `horror`,
      currentMovies: startMovies
    });
  });

  it(`Returns correct movies when genre is changed to "horror"`, () => {
    expect(reducer({
      currentGenre: ``,
      currentMovies: startMovies
    }, {
      type: `GET_MOVIES`,
      payload: `horror`
    }))
    .toEqual({
      currentGenre: ``,
      currentMovies: []
    });
  });
});
