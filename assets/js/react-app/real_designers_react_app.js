/******************************************************************************
 * The "Real Designers" Single Page Application (React / Redux)
 ******************************************************************************/

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import fetchDesigners from "./actions/fetch_designers";
import AppStore from "./stores/AppStore";
import RealDesignersApp from "./components/RealDesignersApp";

// Initialize application state.
AppStore.dispatch( fetchDesigners() );

ReactDOM.render(
  <Provider store={AppStore}>
    <RealDesignersApp />
  </Provider>,
  document.getElementById("real-designers-react-app")
);
