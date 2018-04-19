import { SET_GT_FILTER } from "../constants/action_types";

/**
 * Update state of filter by name length greater-than value.
 */
const filterGtReducer = (greaterThanLength = "", action) => {
  switch (action.type) {
    case SET_GT_FILTER:
      return action.payload.greaterThanLength;
  }

  return greaterThanLength;
};

export default filterGtReducer;
