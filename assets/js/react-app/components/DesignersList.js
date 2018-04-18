import React from "react";
import Designer from "./Designer";

/**
 * Select designer data to display based on application filter state.
 */
export const filterDesigners = (designers, searchQuery) => {

  if ( (searchQuery == undefined) || (searchQuery.length < 1) ) {
    return designers;
  }

  return( designers.filter( designerRecord => designerRecord.designer.name.indexOf(searchQuery) !== -1 ) );
};

const DesignersList = (props) => {

  let filteredDesigners = filterDesigners(props.designers, props.searchQuery);

  return(
    <div className="designers-list-container d-flex flex-wrap justify-content-around">
      {filteredDesigners.map( (designerRecord) => {
        return(<Designer key={designerRecord.designer.id} designer={designerRecord.designer} />);
      })}
    </div>
  );
};

export default DesignersList;
