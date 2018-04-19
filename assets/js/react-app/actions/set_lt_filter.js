import { SET_LT_FILTER } from "../constants/action_types";

/**
 * Dispatch Action to update state for "less than" length of item name
 * value for the search filter.
 */
const setLtFilter = (ltValue) => ({
  type: SET_LT_FILTER,
  payload: {
    lessThanLength: ltValue
  }
});

export default setLtFilter;
