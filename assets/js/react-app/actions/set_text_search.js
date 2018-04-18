import { SET_TEXT_SEARCH } from "../constants/action_types";

const setTextSearch = (searchQuery) => ({
  type: SET_TEXT_SEARCH,
  payload: {
    searchQuery: searchQuery
  }
});

export default setTextSearch;
