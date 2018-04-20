import { SET_SORT_STYLE } from "../constants/action_types";

/**
 * Dispatch Action to set how the DesignersList should sort data.
 */
const setSortStyle = (sortParam) => ({
  type: SET_SORT_STYLE,
  payload: {
    sortStyle: sortParam
  }
});

export default setSortStyle;
