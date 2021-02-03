import data from "../../data/quizz.json";
import QuizzCard from "../../components/QuizzCard";

import React, { Component } from "react";

const AllQuizz = data.map(el => <QuizzCard quizz={el} />);

class DisplayAllQuizz extends Component {
  render() {
    return (
      <div>
        <p>Bienvenue sur la page d'affichage de tout les quizz</p>
        {AllQuizz}
      </div>
    );
  }
}

export default DisplayAllQuizz;
