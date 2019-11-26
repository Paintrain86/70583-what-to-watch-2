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

    const items = movies.map((item) => {
      return <MoviesItem
        movie={item}
        onMouseEnter={() => {
          this.hoverHandler(item.id, true);
        }}
        onMouseLeave={() => {
          this.hoverHandler(item.id, false);
        }}
        isActive={this.state.activeCard === item.id}
        key={`movie-${item.id}`}
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
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previews: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      type: PropTypes.string
    }))
  })).isRequired,
  onMoreClick: PropTypes.func
};

export default MoviesList;
