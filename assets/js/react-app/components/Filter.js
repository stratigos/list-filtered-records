import React from "react";
import Designer from "./Designer";

const Filter = () => {
  return(
    <div className="container filter-container">
      <div className="row">

        <div className="col-sm">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text" id="btnGroupAddon">
                <i className="fa fa-search"></i>
              </div>
            </div>
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </div>

        <div className="col-sm">
          <button type="button" className="btn btn-light">Favorited</button>
          <span class="mx-2"></span>
          <button type="button" className="btn btn-dark">Unfavorited</button>
        </div>

        <div className="col-sm">
          <div className="btn-group" role="group">
            <button id="btnGroupDrop1" type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown">
              <i className="fa fa-sort"></i> Sort Designers
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                <i className="fa fa-sort-alpha-asc"></i> Alpha Asc
              </a>
              <a className="dropdown-item" href="#">
                <i className="fa fa-sort-alpha-desc"></i> Alpha Desc
              </a>
              <a className="dropdown-item" href="#">
                <i className="fa fa-sort-amount-asc" aria-hidden="true"></i> Shortest
              </a>
              <a className="dropdown-item" href="#">
                <i className="fa fa-sort-amount-desc"></i> Longest
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Filter;
