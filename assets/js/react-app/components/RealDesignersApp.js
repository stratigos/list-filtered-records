import React from "react";
import ReactDOM from "react-dom";

import Header from "./Header";
import DesignersContainer from "../containers/DesignersContainer";

class RealDesignersApp extends React.Component {
  render() {
    return(
      <div id="react-app-container h-100">
        <Header />
        <div id="designers-list">
          <DesignersContainer />
        </div>
      </div>
    )
  }
};

export default RealDesignersApp;
