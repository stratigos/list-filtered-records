import { SET_FAV_FILTER } from "../constants/action_types";
import { FAV_STATUS_DEFAULT } from "../constants/defaults";

/**
 * Update state of filter by name length greater-than value.
 */
const filterFavReducer = (favStatus = FAV_STATUS_DEFAULT, action) => {
  switch (action.type) {
    case SET_FAV_FILTER:
      return action.payload.favStatus;
  }

  return favStatus;
};

export default filterFavReducer;
