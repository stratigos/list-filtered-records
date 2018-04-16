import "phoenix_html"

import React from "react"
import ReactDOM from "react-dom"

import DesignersContainer from "../containers/DesignersContainer";

class RealDesignersApp extends React.Component {
  render() {
    return(
      <div id="react-app-container h-100">
        <div id="designers-list">
          <DesignersContainer />
        </div>
      </div>
    )
  }
};

export default RealDesignersApp;
