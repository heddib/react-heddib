import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
  <div>
    <h1>404 - Page non trouvée</h1>
    <Link to="/" title="Revenir sur la page d'accueil">
      Revenir sur la page d'accueil
    </Link>
  </div>
);

export default NotFound;
