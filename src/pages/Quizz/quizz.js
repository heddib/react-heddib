import React, { Component } from "react";
import data from "../../data/quizz.json";
import { Redirect } from "react-router-dom";
import QuizzResponses from "../../components/QuizzResponses";

let thisQuizz;

class DisplayOneQuizz extends Component {
  state = {
    done: false,
    currentQuestion: 0,
    score: 0,
  };

  updateQuestion(goodAnswer) {
    this.setState({ currentQuestion: this.state.currentQuestion + 1 });
    if (goodAnswer) {
      this.setState({ score: this.state.score + 1 });
    }
  }

  // ComponentWillMount est deprecated et React suggère de déplacer le code dans componentDidMount avec l'utilisation de State
  componentDidMount() {
    const {
      match: { params },
    } = this.props;
    thisQuizz = data[params.id - 1];
    this.setState({ done: true, score: 0 });
  }

  render() {
    if (this.state.done === false) return null; // Besoin d'attendre le state done à true car on change une variable dans le componentDidMount

    return (
      <>
        <p>Bienvenue sur la page d'affichage d'un unique quizz</p>
        <p>{thisQuizz.name}</p>
        <div>
          {this.state.currentQuestion === thisQuizz.questions.length ? (
            <Redirect
              to={{
                pathname: "/results",
                state: { score: this.state.score, quizz: thisQuizz },
              }}
            />
          ) : (
            this.state.currentQuestion < thisQuizz.questions.length ? (
              <QuizzResponses
                key={this.state.currentQuestion}
                question={thisQuizz.questions[this.state.currentQuestion]}
                onNext={(goodAnswer) => this.updateQuestion(goodAnswer)}
              />
            ) : (
              <Redirect to="/quizz" />
            )
          )}
        </div>
      </>
    );
  }
}

export default DisplayOneQuizz;
