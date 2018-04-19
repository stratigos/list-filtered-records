import { SET_GT_FILTER } from "../constants/action_types";

/**
 * Dispatch Action to update state for "greater than" length of item name
 * value for the search filter.
 */
const setGtFilter = (gtValue) => ({
  type: SET_GT_FILTER,
  payload: {
    greaterThanLength: gtValue
  }
});

export default setGtFilter;
