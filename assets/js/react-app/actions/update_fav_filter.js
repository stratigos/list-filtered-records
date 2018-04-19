import { UPDATE_FAV_FILTER } from "../constants/action_types";

/**
 * Dispatch Action to update the state of favorite-filter status.
 * @see resetFavStatusMiddleware
 */
const updateFavFilter = (favValue) => ({
  type: UPDATE_FAV_FILTER,
  payload: {
    favStatus: favValue
  }
});

export default updateFavFilter;
