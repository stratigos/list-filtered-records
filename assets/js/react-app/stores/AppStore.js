import { createStore, applyMiddleware } from "redux";

import AppReducer from "../reducers/AppReducer";
import backendApiMiddleware from "../middlewares/backend_api_middleware";
import backendResponseFormatMiddleware from "../middlewares/backend_response_format_middleware";
import resetFavStatusMiddleware from "../middlewares/reset_fav_status_middleware";

const middleWares = [
  backendApiMiddleware,
  backendResponseFormatMiddleware,
  resetFavStatusMiddleware
];

const AppStore = createStore(
  AppReducer,
  applyMiddleware(...middleWares)
);

export default AppStore;
