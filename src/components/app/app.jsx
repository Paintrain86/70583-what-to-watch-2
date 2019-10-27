import React from "react";

import Main from "../main/main.jsx";

const App = () => {
  const movies = [`Big Bang Theory`, `Joker`, `Matrix`, `Gorbataya gora`, `House M.D.`, `50 first kisses`, `Антикиллер`, `Папины дочки`];

  return <Main
    movies={movies}
  />;
};

export default App;
