import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import "../../sass/pages/quizz/index.scss";
class QuizzResults extends Component {
  render() {
    return (
      <>
        {this.props.location.state !== undefined ? (
          <div>
            <h1>🤔 Résultats 🤔</h1>
            <h3>Thème : { this.props.location.state.quizz.name }</h3>
            <p>Votre score est de : { this.props.location.state.score }</p>
          </div>
        ) : (
          <Redirect to="/quizz" />
        )}
      </>
    );
  }
}

export default QuizzResults;
