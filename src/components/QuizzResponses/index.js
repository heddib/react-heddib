import React, { Component } from "react";

import "../../sass/components/quizzResponses/index.scss";

function shuffleArray(array) {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function getResponses(responses) {
  // Séléctionne trois mauvaises réponses parmis celles disponibles sur le json
  let goodAnswerArray = responses.filter(response => response.validate);
  let badAnswersArray = shuffleArray(responses.filter(response => !response.validate));
  badAnswersArray.splice(3);
  return shuffleArray(badAnswersArray.concat(goodAnswerArray));
}

class QuizzResponses extends Component {
  question = this.props.question;

  render() {
    return (
      <>
        <h1>{this.question.name}</h1>
        <div className="responses-wrapper">
          {getResponses(this.question.responses).map((response, i) => {
            return (
              <div key={i} onClick={() => this.props.onNext(response.validate)} className="responses-wrapper--response-container">
                <p>{response.response}</p>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default QuizzResponses;
