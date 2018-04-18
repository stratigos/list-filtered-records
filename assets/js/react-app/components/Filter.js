import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { SORT_ASC, SORT_DESC, SORT_LENGTH_LONG, SORT_LENGTH_SHORT } from "../constants/defaults";
import setTextSearch from "../actions/set_text_search";

/**
 * Provide a wrapper to the Redux store's `dispatch` method, such that the
 *  input field's value can be passed to an ActionCreator.
 */
let createSearchTextHandler = (dispatch) => {
  let searchTextHandler = (event) => {
    dispatch(setTextSearch(event.target.value));
  };

  return searchTextHandler;
};

/**
 * Dispatch "search name is greater than length" Action.
 */
let createSearchGreaterThanHandler = (dispatch) => {
  let searchGtHandler = (event) => {
    console.log("SEARCH ~gt~ HANDLER CALLED: " + event.target.value);
    // dispatch(updateGtSearchState(event.target.value)); // TODO MAKE THIS FSA
  };

  return searchGtHandler;
};

/**
 * Dispatch "search name is less than length" Action.
 */
let createSearchLessThanHandler = (dispatch) => {
  let searchLtHandler = (event) => {
    console.log("SEARCH ~lt~ HANDLER CALLED: " + event.target.value);
    // dispatch(updateLtSearchState(event.target.value)); // TODO MAKE THIS FSA
  };

  return searchLtHandler;
};

/**
 * Dispatch "show only favorites" Action.
 */
let createUpdateFavHandler = (dispatch) => {
  let searchFavHandler = () => {
    console.log("LIST ~FAV~ORITED CALLED");
    // dispatch(updateListFavState()); // TODO MAKE THIS FSA
  };

  return searchFavHandler;
};

/**
 * Dispatch "show only not-yet-favorited" Action.
 */
let createUpdateUnFavHandler = (dispatch) => {
  let searchUnFavHandler = () => {
    console.log("LIST ~UN~FAVORITED CALLED");
    // dispatch(updateListUnFavState()); // TODO MAKE THIS FSA
  };

  return searchUnFavHandler;
};

/**
 * Dispatch sort-by-param Action.
 */
 let createSortHandler = (dispatch) => {
   let sortListHandler = (sortParam) => {
     console.log("~SORT~ LIST CALLED: " + sortParam);
     // dispatch(updateListSortState(sortParam)); // TODO MAKE THIS FSA
   };

   return sortListHandler;
 };

/**
 * Create a toolbar of search, sort, and filter options. Changes to state result
 *  in issuing Redux Actions, which in turn determine which of the Designer
 *  Components are displayed.
 */
class Filter extends React.Component {

  constructor(props) {
    super();

    // `dispatch` is provided by Redux `connect` wrapper.
    this.updateSearch = createSearchTextHandler(props.dispatch);
    this.updateGt = createSearchGreaterThanHandler(props.dispatch);
    this.updateLt = createSearchLessThanHandler(props.dispatch);
    this.updateFav = createUpdateFavHandler(props.dispatch);
    this.updateUnFav = createUpdateUnFavHandler(props.dispatch);
    this.sortList = createSortHandler(props.dispatch);
  };

  render() {
    // Enhance this by extracting each button group and input into individual,
    // composable Components. Carry over each state updating function to each
    // new component.
    return(
      <div className="container filter-container">
        <div className="row">

          <div className="col-sm mb-1">
            <div className="input-group">
              <div className="input-group-prepend">
                <div className="input-group-text" id="btnGroupAddon">
                  <i className="fa fa-search"></i>
                </div>
              </div>
              <input type="text" className="form-control" placeholder="Search" onChange={this.updateSearch} />
            </div>
          </div>

          <div className="col-sm mb-1">
            <div className="row">

              <div className="col-sm-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text" id="btnGroupAddon">
                      <i className="fa fa-chevron-right"></i>
                    </div>
                  </div>
                  <input
                    type="number"
                    min="1" step="1"
                    className="form-control"
                    placeholder="gt"
                    onChange={this.updateGt}
                  />
                </div>
              </div>

              <div className="col-sm-6">
                <div className="input-group">
                  <div className="input-group-prepend">
                    <div className="input-group-text" id="btnGroupAddon">
                      <i className="fa fa-chevron-left"></i>
                    </div>
                  </div>
                  <input
                    type="number"
                    min="1"
                    step="1"
                    className="form-control"
                    placeholder="lt"
                    onChange={this.updateLt}
                  />
                </div>
              </div>

            </div>
          </div>

          <div className="col-sm mb-1">
            <button type="button" onClick={this.updateFav} className="btn btn-light">Favorited</button>
            <span className="mx-2"></span>
            <button type="button" onClick={this.updateUnFav} className="btn btn-dark">Unfavorited</button>
          </div>

          <div className="col-sm mb-1">
            <div className="btn-group" role="group">
              <button
                id="btnGroupDrop1"
                type="button"
                className="btn btn-secondary dropdown-toggle"
                data-toggle="dropdown"
              >
                <i className="fa fa-sort"></i> Sort Designers
              </button>
              <div className="dropdown-menu">
                <a className="dropdown-item" onClick={() => this.sortList(SORT_ASC)} href="#">
                  <i className="fa fa-sort-alpha-asc"></i> Alpha Asc
                </a>
                <a className="dropdown-item" onClick={() => this.sortList(SORT_DESC)} href="#">
                  <i className="fa fa-sort-alpha-desc"></i> Alpha Desc
                </a>
                <a className="dropdown-item" onClick={() => this.sortList(SORT_LENGTH_LONG)} href="#">
                  <i className="fa fa-sort-amount-asc" aria-hidden="true"></i> Shortest
                </a>
                <a className="dropdown-item" onClick={() => this.sortList(SORT_LENGTH_SHORT)} href="#">
                  <i className="fa fa-sort-amount-desc"></i> Longest
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  };
};

// Redux's `dispatch` is always passed to the component wrapped in `connect`.
export default connect()(Filter);
