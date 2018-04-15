import { combineReducers } from 'redux';

import designersReducer from './designers_reducer';
import backendLoadingReducer from './backend_loading_reducer';

const AppReducer = combineReducers({
  designers: designersReducer,
  loading: backendLoadingReducer
});

export default AppReducer;
