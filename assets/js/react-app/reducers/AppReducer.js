import { combineReducers } from "redux";

import designersReducer from "./designers_reducer";
import backendLoadingReducer from "./backend_loading_reducer";
import filterTextReducer from "./filter_text_reducer";

const AppReducer = combineReducers({
  designers: designersReducer,
  searchQuery: filterTextReducer,
  loading: backendLoadingReducer
});

export default AppReducer;
