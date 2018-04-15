import { SET_DESIGNERS } from "../constants/action_types";

const designersReducer = (designers = [], action) => {
  switch (action.type) {
    case SET_DESIGNERS:
      return action.payload.data;
  }

  return designers;
};

export default designersReducer;
