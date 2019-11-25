import React from 'react';
import PropTypes from 'prop-types';

import MoviesItem from '../movies-item/movies-item.jsx';

class MoviesList extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeCard: -1
    };

    this.hoverHandler = this.hoverHandler.bind(this);
  }

  hoverHandler(index, isHover) {
    this.setState({
      activeCard: (isHover) ? index : -1
    });
  }

  render() {
    const {
      movies,
      onMoreClick = () => {}
    } = this.props;

    const items = movies.map((item, i) => {
      return <MoviesItem
        movie={item}
        onMouseEnter={() => {
          this.hoverHandler(i, true);
        }}
        onMouseLeave={() => {
          this.hoverHandler(i, false);
        }}
        isActive={this.state.activeCard === i}
        key={`movie-${i}`}
      />;
    });

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
    title: PropTypes.string,
    picture: PropTypes.string
  })).isRequired,
  onMoreClick: PropTypes.func
};

export default MoviesList;
