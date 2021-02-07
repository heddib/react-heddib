import React, { Component } from "react";
import { Redirect, Link } from "react-router-dom";

import "../../sass/pages/quizz/results.scss";

// En fonction du score en pourcentage de l'utilisateur, on affiche une phrase personnalisée
function resultCommentary(score, maximum) {
  let quote = "";
  let accuracy = (score / maximum) * 100;
  console.log(accuracy);

  if (accuracy === 0) { 
    quote = "Même en faisant exprès on aurait pas fait mieux.";
  } else if (accuracy < 50) {
    quote = "C'est dommage, mais on a vu pire.";
  } else if (accuracy === 50) {
    quote = "Pas mal, 50/50 !";
  } else if (accuracy < 100) {
    quote = "Solide, ton score est presque parfait.";
  } else {
    quote = "Score parfait, quel boss 😎";
  }

  return quote;
}
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
            <p>{resultCommentary(this.props.location.state.score, this.props.location.state.questionsAmount)}</p>
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
