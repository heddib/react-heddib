import React, { Component } from "react";
import { Link } from 'react-router-dom';

class QuizzCard extends Component {
  render() {
    return (
      <>
        <p>Thème du quizz : <b>{this.props.quizz.name}</b></p>

        <Link to={{ pathname: `/quizz/${ this.props.index }` }}>Commencer le quizz</Link>
      </>
    );
  }
}

export default QuizzCard;
