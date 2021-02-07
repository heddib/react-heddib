import "../../sass/components/footer/index.scss";
import React, { Component } from "react";

import Weather from "../../hooks/Weather"

class Footer extends Component {
  render() {
    return (
      <footer>
        <Weather/>
      </footer>
    );
  }
}

export default Footer;
