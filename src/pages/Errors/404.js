import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <>
        <h1>404 - Page non trouvée</h1>
        <Link to="/" title="Revenir sur la page d'accueil">
          Revenir sur la page d'accueil
        </Link>
      </>
    );
  }
}

export default NotFound;
