import React, { Component } from "react";

class QuizzCard extends Component {
  render() {
    return (
      <>
        <p>
          Thème du quizz : <b>{this.props.quizz.name}</b>
        </p>
        {/* Temporaire */}
        <p>
          Solution : <b>{this.props.quizz.questions[0].responses[0].response}</b>{" "}
        </p>
        {/* ***** */}
      </>
    );
  }
}

export default QuizzCard;
