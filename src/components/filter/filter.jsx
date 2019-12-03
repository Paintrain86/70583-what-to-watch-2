import React from "react";
import PropTypes from 'prop-types';

class Filter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      currentGenre: ``
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(value, evt) {
    evt.preventDefault();

    this.setState({
      currentGenre: value
    });
  }

  render() {
    const {
      filterItems
    } = this.props;
    return (
      <>
        <ul className="catalog__genres-list">
          {filterItems.map((it, i) => (
            <li className={(this.state.currentGenre === it.genre) ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`} key={`genre-${i}`}>
              <a href="#" className="catalog__genres-link" onClick={this.handleFilterChange.bind(this, it.genre)}>{it.name}</a>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

Filter.propTypes = {
  filterItems: PropTypes.arrayOf(PropTypes.shapeOf({
    genre: PropTypes.string,
    name: PropTypes.string.isRequired
  }))
};


export default Filter;
