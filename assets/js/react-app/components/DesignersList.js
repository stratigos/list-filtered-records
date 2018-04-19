import React from "react";
import Designer from "./Designer";

import { FAV_STATUS_DEFAULT } from "../constants/defaults";

/**
 * Select designer data to display based on application filter state.
 */
export const searchDesigners = (designers, searchQuery) => {

  if ( (searchQuery == undefined) || (searchQuery.length < 1) ) {
    return designers;
  }

  return( designers.filter( designerRecord => designerRecord.designer.name.indexOf(searchQuery) !== -1 ) );
};

/**
 * Select designer data where name is greater than a certain length.
 */
export const gtFilterDesigners = (designers, greaterThanLength) => {

  if (greaterThanLength == undefined || (greaterThanLength.length == 0) || greaterThanLength < 1) {
    return designers;
  }

  return( designers.filter( designerRecord => designerRecord.designer.name.length > greaterThanLength ) );
};

/**
 * Select designer data where name is less than a certain length.
 */
export const ltFilterDesigners = (designers, lessThanLength) => {

  if (lessThanLength == undefined || (lessThanLength.length == 0) || lessThanLength < 1) {
    return designers;
  }

  return( designers.filter( designerRecord => designerRecord.designer.name.length < lessThanLength ) );
};

/**
 * Select designer data where the designer's favorite status matches the
 *  current app fav-filter state.
 */
export const favFilterDesigners = (designers, favStatus) => {

  if (favStatus === FAV_STATUS_DEFAULT) {
    return designers;
  }

  return ( designers.filter( designerRecord => designerRecord.designer.favorite === favStatus ) );

};

/**
 * Produce a grid of Designer Components, filtered and sorted according to
 *  the current application state. 
 */
const DesignersList = (props) => {

  let filteredDesigners = ltFilterDesigners(
    gtFilterDesigners(
      searchDesigners(
        favFilterDesigners(
          props.designers,
          props.favStatus),
        props.searchQuery),
      props.greaterThanLength),
    props.lessThanLength);

  return(
    <div className="designers-list-container d-flex flex-wrap justify-content-around">
      {filteredDesigners.map( (designerRecord) => {
        return(<Designer key={designerRecord.designer.id} designer={designerRecord.designer} />);
      })}
    </div>
  );
};

export default DesignersList;
