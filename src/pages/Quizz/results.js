import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import "../../sass/pages/quizz/results.scss";

class QuizzResults extends Component {
  render() {
    return (
      <>
        {this.props.location.state !== undefined ? ( // Redirige l'utilisateur sur la page de séléction d'un quizz s'il tente de se rendre manuellement sur /results
          <div className="results-container">
            <h1>🤔 Résultats 🤔</h1>
            <h3>{this.props.location.state.quizz.name}</h3>
            <div className="results-container--display-score">
              <p>
                {this.props.location.state.score} / {this.props.location.state.questionsAmount}
              </p>
            </div>
            <Link to="/quizz" title="Revenir sur la page de séléction des quizz">
              Revenir sur la page de séléction des quizz
            </Link>
          </div>
        ) : (
          <Redirect to="/quizz" />
        )}
      </>
    );
  }
}

export default QuizzResults;
