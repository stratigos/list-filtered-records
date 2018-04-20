import { SET_SORT_STYLE } from "../constants/action_types";

/**
 * Update state for DesignersList sort style.
 */
const sortStyleReducer = (sortStyle = "", action) => {
  switch (action.type) {
    case SET_SORT_STYLE:
      return action.payload.sortStyle;
  }

  return sortStyle;
};

export default sortStyleReducer;
