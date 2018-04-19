import { combineReducers } from "redux";

import designersReducer from "./designers_reducer";
import backendLoadingReducer from "./backend_loading_reducer";
import filterTextReducer from "./filter_text_reducer";
import filterGtReducer from "./filter_gt_reducer";
import filterLtReducer from "./filter_lt_reducer";

const AppReducer = combineReducers({
  designers: designersReducer,
  searchQuery: filterTextReducer,
  greaterThanLength: filterGtReducer,
  lessThanLength: filterLtReducer,
  loading: backendLoadingReducer
});

export default AppReducer;
