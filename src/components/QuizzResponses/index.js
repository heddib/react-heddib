import React, { Component } from "react";

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

function getResponses(responses) { // Séléctionne trois mauvaises réponses parmis celles disponibles sur le json
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
        <p>{this.question.name}</p>
        <div>
          {getResponses(this.question.responses).map((response, i) => {
            return (
              <div key={i}>
                <div onClick={() => this.props.onNext()} style={{ height: "50px", color: "red", cursor: "pointer" }}>
                  <p>{response.response}</p>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

export default QuizzResponses;
