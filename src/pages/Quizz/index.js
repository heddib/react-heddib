import data from "../../data/quizz.json";
import QuizzCard from "../../components/QuizzCard";

import React, { Component } from "react";

import "../../sass/pages/quizz/index.scss";

const AllQuizz = data.map((el, index) => <QuizzCard key={index} quizz={el} index={index + 1} />);

class DisplayAllQuizz extends Component {
  render() {
    return (
      <>
        <h1>Bienvenue sur la page d'affichage de tout les quizz</h1>
        <div className="quizz-wrapper">{AllQuizz}</div>
      </>
    );
  }
}

export default DisplayAllQuizz;
