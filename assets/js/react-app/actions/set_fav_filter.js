import { SET_FAV_FILTER } from "../constants/action_types";

/**
 * Dispatch Action to set state favorite-filter status.
 */
const setFavFilter = (favValue) => ({
  type: SET_FAV_FILTER,
  payload: {
    favStatus: favValue
  }
});

export default setFavFilter;
