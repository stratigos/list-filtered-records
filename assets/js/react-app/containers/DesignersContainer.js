import React from "react";
import { connect } from "react-redux";

import DesignersList from "../components/DesignersList";

const mapStateToProps = (state) => ({
  designers: state.designers,
  searchQuery: state.searchQuery,
  greaterThanLength: state.greaterThanLength,
  lessThanLength: state.lessThanLength,
  favStatus: state.favStatus,
  sortStyle: state.sortStyle
});

const DesignersContainer = connect(mapStateToProps)(DesignersList);

export default DesignersContainer;
