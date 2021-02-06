import React from "react";
import Router from "./router/Router";

import Header from "./components/Header";
import Footer from "./components/Footer";

import "./sass/global.scss";

function App() {
  return (
    <React.Fragment>
      <Header />
      <div className="content">
        <Router />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
