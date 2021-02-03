import React from "react";
import Router from "./router/Router";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./sass/helpers/_variables.scss"
import "./sass/helpers/_grid.scss"

function App() {
  return (
    <React.Fragment>
      <Header />
      <Router />
      <Footer />
    </React.Fragment>
  );
}

export default App;
