import React from "react";
import PropTypes from 'prop-types';

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
    title: PropTypes.string,
    picture: PropTypes.string
  })).isRequired
};

export default App;
