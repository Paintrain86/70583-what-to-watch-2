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
    this._toggleActiveState = this._toggleActiveState.bind(this);
    this._toggleMutedState = this._toggleMutedState.bind(this);
  }

  handleClickMore(evt) {
    evt.preventDefault();

    const {onNameClick} = this.props;

    if (typeof onNameClick === `function`) {
      onNameClick();
    }
  }

  _toggleActiveState(value) {
    this.setState({
      isActive: value
    });
  }

  _toggleMutedState(value) {
    this.setState({
      isMuted: value
    });
  }

  handleMouseEnter() {
    const {onMouseEnter} = this.props;

    if (typeof onMouseEnter === `function`) {
      onMouseEnter();
    }

    this._toggleActiveState(true);
  }

  handleMouseLeave() {
    const {onMouseLeave} = this.props;

    if (typeof onMouseLeave === `function`) {
      onMouseLeave();
    }

    this._toggleActiveState(false);
  }

  render() {
    const {
      movie: {title},
      movie: {poster},
      movie: {previews},
      isActive
    } = this.props;

    const classNames = `small-movie-card catalog__movies-card ${(isActive) ? `active` : ``}`;

    return (<article className={classNames} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
      <div className="small-movie-card__image" onClick={() => this._toggleMutedState(!this.state.isMuted)}>
        <Videoplayer
          poster={poster}
          title={title}
          previews={previews}
          isNeedPlaying={isActive}
          isMuted={this.state.isMuted}
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
