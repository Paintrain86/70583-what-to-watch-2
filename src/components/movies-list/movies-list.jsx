import React from 'react';
import PropTypes from 'prop-types';

import MoviesItem from '../movies-item/movies-item.jsx';

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);
  }

  handleHover(id, isHover) {
    this.props.onActiveItemChange((isHover) ? id : -1);
  }

  render() {
    const {
      movies,
      onMoreClick = () => {},
      activeItem
    } = this.props;

    const items = movies.map((item) => (
      <MoviesItem
        movie={item}
        onMouseEnter={() => {
          this.handleHover(item.id, true);
        }}
        onMouseLeave={() => {
          this.handleHover(item.id, false);
        }}
        isActive={item.id === activeItem}
        key={`movie-${item.id}`}
      />
    ));

    return (<>
      <div className="catalog__movies-list">
        {items}
      </div>
      <div className="catalog__more">
        <button className="catalog__button" type="button" onClick={onMoreClick}>Show more</button>
      </div>
    </>);
  }
}

MoviesList.propTypes = {
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
  onMoreClick: PropTypes.func,
  activeItem: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]).isRequired,
  onActiveItemChange: PropTypes.func.isRequired
};

export default MoviesList;
