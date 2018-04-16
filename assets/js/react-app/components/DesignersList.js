import React from "react";
import Designer from "./Designer";

const DesignersList = ({ designers }) => {
  return(
    <div className="designers-list-container d-flex flex-wrap justify-content-around">
      {designers.map( (designerRecord) => {
        return(<Designer key={designerRecord.designer.id} designer={designerRecord.designer} />);
      })}
    </div>
  );
};

export default DesignersList;
