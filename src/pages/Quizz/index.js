import data from "../../data/quizz.json";
import QuizzCard from "../../components/QuizzCard";

import React, { Component } from "react";

const AllQuizz = data.map((el, index) => <QuizzCard key={index} quizz={el} index={index + 1} />);

class DisplayAllQuizz extends Component {
  render() {
    return (
      <div>
        <p>Bienvenue sur la page d'affichage de tous les quizz</p>
        {AllQuizz}
      </div>
    );
  }
}

export default DisplayAllQuizz;
