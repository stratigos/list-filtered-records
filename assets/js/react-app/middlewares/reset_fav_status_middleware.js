/******************************************************************************
 * Handle reset of the fav/unfav filter status.
 ******************************************************************************/

import { UPDATE_FAV_FILTER } from "../constants/action_types";
import { FAV_STATUS_DEFAULT } from "../constants/defaults";
import setFavFilter from "../actions/set_fav_filter";

/**
 * Check the current state of the fav-filter status. If the same const is
 *  passed in, then reset the fav status to its original state. Else,
 *  pass through and set the fav-filter status.
 */
const resetFavStatusMiddleware = ({ dispatch, getState }) => next => action => {

  if( action.type != UPDATE_FAV_FILTER) {
    next(action);
    return;
  }

  const { payload } = action;
  const { favStatus } = getState();

  // Either turn the current favorite-filter off, or switch a new one on.
  favStatus == payload.favStatus ?
    dispatch( setFavFilter(FAV_STATUS_DEFAULT) ) :
    dispatch( setFavFilter(payload.favStatus) );
};

export default resetFavStatusMiddleware;
