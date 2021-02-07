import React, { Component } from "react";

import "../../sass/pages/main/index.scss";

class Main extends Component {
  render() {
    return (
      <>
        <h1>Bienvenue sur le site Quizz-Meteo</h1>
        <p className='mt-2'>
          Ici, vous pourrez mettre au défi votre culture tout en ayant la possibilité de consulter la météo de la ville de votre choix depuis n'importe que page
          ! <br/> Ceci est une feature inédite, raison supplémentaire pour revenir sur le site régulièrement et améliorer notre référencement. <br/> Merci 😃
        </p>
      </>
    );
  }
}

export default Main;
