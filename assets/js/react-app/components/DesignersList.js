import React from "react";
import Designer from "./Designer";

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

const DesignersList = (props) => {

  let filteredDesigners = ltFilterDesigners(
    gtFilterDesigners(
      searchDesigners(
        props.designers,
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
