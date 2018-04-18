import { SET_TEXT_SEARCH } from "../constants/action_types";

/**
 * Update state of text-search value.
 */
const filterTextReducer = (searchQuery = "", action) => {
  switch (action.type) {
    case SET_TEXT_SEARCH:
      return action.payload.searchQuery;
  }

  return searchQuery;
};

export default filterTextReducer;
