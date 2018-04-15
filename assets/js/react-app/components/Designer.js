import React from "react";
import PropTypes from "prop-types";

/**
 * Functional component for composing `Designer` data.
 *   - A `Designer` is a data model, or "schema" of the backend Phoenix
 *     application.
 */
const Designer = (props) => {

  return(
    <div className="designer-card-container card border-secondary bg-dark">
      <div className="card-body">
        <h5 className="card-title text-info">{props.designer.name}</h5>
        <p>{props.designer.favorite ? "Favorite" : "Not Favorite"}</p>
      </div>
    </div>
  );

};

Designer.defaultProps = {
  designerId: 0,
  designer: {
    id: 0,
    name: "",
    favorite: false
  }
};

Designer.propTypes= {
  designerId: PropTypes.number.isRequired,
  designer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired
  }).isRequired
};

export default Designer;
