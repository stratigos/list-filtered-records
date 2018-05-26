import { SET_DESIGNERS, SET_DESIGNER } from "../constants/action_types";

const designersReducer = (designers = [], action) => {
  switch (action.type) {
    case SET_DESIGNERS:
      return action.payload.data;
    case SET_DESIGNER:
      // DO SOMETHING WITH designers.map() TO UPDATE THE NEW RECORD
      // WITH action.payload.data
      // TODO DEBUG!
      return designers; // DEBUG

  return designers;
};

export default designersReducer;
