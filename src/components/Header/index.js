import "../../sass/components/header/index.scss";
import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <Link to="/">
            <h1>Quizz-Meteo</h1>
          </Link>
          <Link to="/quizz">
            <div className="nav-item">Quizz</div>
          </Link>
        </nav>
      </header>
    );
  }
}

export default Header;
