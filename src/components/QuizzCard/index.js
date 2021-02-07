import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../../sass/components/quizzCard/index.scss";

class QuizzCard extends Component {
  render() {
    return (
      <div className="quizz-wrapper--card-container">
        <Link to={{ pathname: `/quizz/${this.props.index}` }}>
          <div className="quizz-wrapper--card">
            <h2>{this.props.quizz.name}</h2>
            <p>Commencer le quizz</p>
          </div>
        </Link>
      </div>
    );
  }
}

export default QuizzCard;
