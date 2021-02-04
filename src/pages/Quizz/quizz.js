import React, { Component } from "react";
import data from "../../data/quizz.json";

import QuizzResponses from '../../components/QuizzResponses/'

let thisQuizz;

class DisplayOneQuizz extends Component {
  state = {
    done: false,
  };

  // ComponentWillMount est deprecated et React suggère de déplacer le code dans componentDidMount avec l'utilisation de State
  componentDidMount() {
    const { match: { params } } = this.props;
    thisQuizz = data[params.id - 1];
    this.setState({ done: true });
  }

  render() {
    if (this.state.done === false) return null; // Besoin d'attendre le state done à true car on change une variable dans le componentDidMount
    return (
      <>
        <p>Bienvenue sur la page d'affichage d'un unique quizz</p>
        <p>{thisQuizz.name}</p>
        <div>
          {thisQuizz.questions.map((question, i) => {
            return (
              <QuizzResponses key={i} question={question}/>
            );
          })}
        </div>
      </>
    );
  }
}

export default DisplayOneQuizz;
