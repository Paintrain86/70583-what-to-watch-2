import React from 'react';
import PropTypes from 'prop-types';

import Videoplayer from '../videoplayer/videoplayer.jsx';

class MoviesItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: props.isActive,
      isMuted: true
    };

    this.handleClickMore = this.handleClickMore.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.toggleActiveState = this.toggleActiveState.bind(this);
    this.toggleMutedState = this.toggleMutedState.bind(this);
  }

  handleClickMore(evt) {
    evt.preventDefault();

    const {onNameClick} = this.props;

    if (typeof onNameClick === `function`) {
      onNameClick();
    }
  }

  toggleActiveState(value) {
    this.setState({
      isActive: value
    });
  }

  toggleMutedState(value) {
    this.setState({
      isMuted: value
    });
  }

  handleMouseEnter() {
    const {onMouseEnter} = this.props;

    if (typeof onMouseEnter === `function`) {
      onMouseEnter();
    }

    this.toggleActiveState(true);
  }

  handleMouseLeave() {
    const {onMouseLeave} = this.props;

    if (typeof onMouseLeave === `function`) {
      onMouseLeave();
    }

    this.toggleActiveState(false);
  }

  render() {
    const {
      movie: {title, poster, previews},
      isActive
    } = this.props;

    const {
      isMuted
    } = this.state;

    const classNames = `small-movie-card catalog__movies-card ${(isActive) ? `active` : ``}`;

    return (<article className={classNames} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
      <div className="small-movie-card__image" onClick={this.toggleMutedState.bind(this, !isMuted)}>
        <Videoplayer
          poster={poster}
          title={title}
          previews={previews}
          isNeedPlaying={isActive}
          isMuted={isMuted}
        />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={this.handleClickMore}>{title}</a>
      </h3>
    </article>);
  }
}

MoviesItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previews: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      type: PropTypes.string
    }))
  }),
  isActive: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onNameClick: PropTypes.func
};

export default MoviesItem;
