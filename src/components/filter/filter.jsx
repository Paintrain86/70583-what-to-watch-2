import React from "react";
import PropTypes from 'prop-types';

class Filter extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      activeItem: -1
    };

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(value, evt) {
    evt.preventDefault();

    this.props.onFilterChange(value);

    this.setState({
      activeItem: value
    });
  }

  render() {
    const {
      filterItems
    } = this.props;
    return (
      <ul className="catalog__genres-list">
        {filterItems.map((it) => (
          <li className={(this.state.activeItem === it.id) ? `catalog__genres-item catalog__genres-item--active` : `catalog__genres-item`} key={`genre-${it.id}`}>
            <a href="#" className="catalog__genres-link" onClick={this.handleFilterChange.bind(this, it.id)}>{it.name}</a>
          </li>
        ))}
      </ul>
    );
  }
}

Filter.propTypes = {
  filterItems: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    genre: PropTypes.string,
    name: PropTypes.string.isRequired
  })),
  onFilterChange: PropTypes.func.isRequired
};


export default Filter;
