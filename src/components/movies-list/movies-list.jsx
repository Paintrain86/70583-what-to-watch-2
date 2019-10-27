import React from 'react';
import PropTypes from 'prop-types';

import MoviesItem from '../movies-item/movies-item.jsx';

const MoviesList = (props) => {
  const {movies, onMoreClick = () => {}} = props;
  const items = movies.map((item, i) => {
    return <MoviesItem
      name={item}
      onNameClick={() => {}}
      key={`movie-${i}`}
    />;
  });

  return <React.Fragment>
    <div className="catalog__movies-list">
      {items}
    </div>
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={onMoreClick}>Show more</button>
    </div>
  </React.Fragment>;
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.string).isRequired,
  onMoreClick: PropTypes.func
};

export default MoviesList;
