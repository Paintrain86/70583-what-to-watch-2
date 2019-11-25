import React from 'react';
import PropTypes from 'prop-types';

class MoviesItem extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isActive: props.isActive
    };

    this.clickMoreHandler = this.clickMoreHandler.bind(this);
    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
  }

  clickMoreHandler(evt) {
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

  mouseEnterHandler() {
    const {onMouseEnter} = this.props;

    if (typeof onMouseEnter === `function`) {
      onMouseEnter();
    }

    this.toggleActiveState(true);
  }

  mouseLeaveHandler() {
    const {onMouseLeave} = this.props;

    if (typeof onMouseLeave === `function`) {
      onMouseLeave();
    }

    this.toggleActiveState(false);
  }

  render() {
    const {
      movie: {title},
      movie: {picture},
      isActive
    } = this.props;

    const classNames = `small-movie-card catalog__movies-card ${(isActive) ? `active` : ``}`;

    return (<article className={classNames} onMouseEnter={this.mouseEnterHandler} onMouseLeave={this.mouseLeaveHandler}>
      <div className="small-movie-card__image">
        <img src={picture} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html" onClick={this.clickMoreHandler}>{title}</a>
      </h3>
    </article>);
  }
}

MoviesItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }),
  isActive: PropTypes.bool.isRequired,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  onNameClick: PropTypes.func
};

export default MoviesItem;
