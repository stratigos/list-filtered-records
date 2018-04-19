import { SET_LT_FILTER } from "../constants/action_types";

/**
 * Update state of filter by name length less-than value.
 */
const filterLtReducer = (lessThanLength = "", action) => {
  switch (action.type) {
    case SET_LT_FILTER:
      return action.payload.lessThanLength;
  }

  return lessThanLength;
};

export default filterLtReducer;
