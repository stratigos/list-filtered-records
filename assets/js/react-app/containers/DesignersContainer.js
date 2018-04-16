import React from "react";
import { connect } from "react-redux";

import DesignersList from "../components/DesignersList";

const mapStateToProps = (state) => ({
  designers: state.designers
});

const DesignersContainer = connect(mapStateToProps)(DesignersList);

export default DesignersContainer;
