import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

/**
 * Provide a wrapper to the Redux store's `dispatch` method, such that the
 * designer's fav value can be passed to an ActionCreator.
 */
let createToggleFavHandler = (dispatch) => {
  let toggleFavHandler = (designer_id, designer_fav) => {
    // dispatch(updateDesignerFav(designer_id, designer_fav));
    console.log(`TOGGLING FAVORITE STATUS FOR ${designer_id} TO ${designer_fav}`);
  };

  return toggleFavHandler;
};

/**
 * Classy component for composing `Designer` data.
 *   - A `Designer` is a data model, or "schema" of the backend Phoenix
 *     application.
 */
class Designer extends React.Component {

  constructor(props) {
    super(props);
    this.toggleFav = createToggleFavHandler(this.props.dispatch);
  };

  render() {
    return(
      <div
        className="designer-card-container card border-secondary bg-dark mt-4 \
          text-center"
      >
        <img
          className="card-img-top"
          src={`https://robohash.org/${this.props.designer.id}`}
          alt="designer image"
        />
        <div className="card-body">
          <h5 className="card-title text-info">{this.props.designer.name}</h5>
          <p className="card-text">
            <button
              type="button"
              className="btn btn-lg btn-block favorite-button"
              onClick={
                () => this.toggleFav(
                  this.props.designer.id,
                  !this.props.designer.favorite
                )
              }
            >
              {this.props.designer.favorite ?
                <i className="fa fa-star" title="Favorite" /> :
                <i className="fa fa-star-o" title="Not Favorite" />
              }
            </button>
          </p>
        </div>
      </div>
    );
  };

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

export default connect()(Designer);

