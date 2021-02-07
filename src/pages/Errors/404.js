import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../sass/pages/errors/404.scss";

class NotFound extends Component {
  render() {
    return (
      <div className="error-container">
        <h1>404</h1>
        <h3>Page non trouvée</h3>
        <Link to="/" title="Revenir sur la page d'accueil">
          Revenir sur la page d'accueil
        </Link>
      </div>
    );
  }
}

export default NotFound;
