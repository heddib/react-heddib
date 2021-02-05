import React, { Component } from "react";
import data from "../../data/quizz.json";
import { Redirect } from "react-router-dom";
import QuizzResponses from "../../components/QuizzResponses";

let thisQuizz;

class DisplayOneQuizz extends Component {
  state = {
    done: false,
    currentQuestion: 0
  };

  updateQuestion() {
    this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    console.log(this.state.currentQuestion);
  }

  // ComponentWillMount est deprecated et React suggère de déplacer le code dans componentDidMount avec l'utilisation de State
  componentDidMount() {
    const {
      match: { params }
    } = this.props;
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
          {
            // TODO : Page conclusion quizz
          }
          {this.state.currentQuestion < thisQuizz.questions.length ? (
            <QuizzResponses key={this.state.currentQuestion} question={thisQuizz.questions[this.state.currentQuestion]} onNext={() => this.updateQuestion()} />
          ) : (
            <Redirect to="/quizz" />
          )}
        </div>
      </>
    );
  }
}

export default DisplayOneQuizz;
