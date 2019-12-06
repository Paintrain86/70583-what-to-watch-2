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

    this.props.onFilterChange(value);

    this.setState({
      currentGenre: value
    });
  }

  render() {
    const {
      filterItems
    } = this.props;
    return (
      <ul className="catalog__genres-list">
        {filterItems.map((it) => (
          <li className={(this.state.currentGenre === it.genre) ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`} key={`genre-${it.genre}`}>
            <a href="#" className="catalog__genres-link" onClick={this.handleFilterChange.bind(this, it.genre)}>{it.name}</a>
          </li>
        ))}
      </ul>
    );
  }
}

Filter.propTypes = {
  filterItems: PropTypes.arrayOf(PropTypes.shape({
    genre: PropTypes.string,
    name: PropTypes.string.isRequired
  })),
  onFilterChange: PropTypes.func.isRequired
};


export default Filter;
