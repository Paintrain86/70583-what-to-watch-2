import React from "react";
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {ActionCreator} from '../../reducer';

import Main from "../main/main.jsx";

class App extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      movies
    } = this.props;

    return <Main
      movies={movies}
    />;
  }
}

App.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    genre: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    previews: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
      type: PropTypes.string
    }))
  })).isRequired
};

const mapStateToProps = (storeState, appProps) => Object.assign({}, appProps, {
  movies: storeState.movies
});
const mapDispatchToProps = () => {};

export {App};
export default connect(mapStateToProps, mapDispatchToProps)(App);
