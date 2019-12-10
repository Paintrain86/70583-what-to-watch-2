import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {actionCreator} from '../../reducer.js';

import MoviesList from '../movies-list/movies-list.jsx';
import Filter from '../filter/filter.jsx';

import withActiveItem from '../../hocs/with-active-item/with-active-item.js';

const FilterWrapped = withActiveItem(Filter);

const filters = [
  {
    genre: ``,
    name: `All genres`
  },
  {
    genre: `comedy`,
    name: `Comedies`
  },
  {
    genre: `crime`,
    name: `Crime`
  },
  {
    genre: `documentary`,
    name: `Documentary`
  },
  {
    genre: `drama`,
    name: `Dramas`
  },
  {
    genre: `horror`,
    name: `Horror`
  },
  {
    genre: `family`,
    name: `Kids & Family`
  },
  {
    genre: `romance`,
    name: `Romance`
  },
  {
    genre: `sci-fi`,
    name: `Sci-Fi`
  },
  {
    genre: `thriller`,
    name: `Thrillers`
  }
];

class Main extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      movies
    } = this.props;

    return (<>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <FilterWrapped
            filterItems={filters}
            onFilterChange={this.props.onFilterChanged}
          />

          <MoviesList
            movies={movies}
            onMoreClick={() => {}}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </>);
  }
}

Main.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previews: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      type: PropTypes.string
    }))
  })).isRequired,
  onFilterChanged: PropTypes.func.isRequired
};

const mapStateToProps = (storeState, mainProps) => Object.assign({}, mainProps, {
  movies: storeState.currentMovies
});
const mapDispatchToProps = (dispatch) => ({
  onFilterChanged: (value) => {
    dispatch(actionCreator.chooseGenre(value));
    dispatch(actionCreator.chooseMovies(value));
  }
});

export {Main};
export default connect(mapStateToProps, mapDispatchToProps)(Main);
