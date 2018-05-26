/******************************************************************************
 * Load data from the Phoenix backend app.
 ******************************************************************************/

import {
  FETCH_DESIGNERS, 
  UPDATE_DESIGNER_FAV
} from "../constants/action_types";
import { BASE_URL } from "../constants/api_endpoints";
import backendApiError from "../actions/backend_api_error";
import backendApiStart from "../actions/backend_api_start";
import backendApiDone from "../actions/backend_api_done";

/**
 * Make API calls to backend CMS/JSON API. Expect `action` to be a
 *  Flux Standard Action.
 */
const backendApiMiddleWare = ({ dispatch }) => next => action => {

  if( [ FETCH_DESIGNERS, UPDATE_DESIGNER_FAV ].indexOf(action.type) === -1 ) {
    next(action);
    return;
  }

  const { payload } = action;

  dispatch( backendApiStart() );

  fetch(BASE_URL + payload.url, { method: getVerbFromPayload(payload) })
    .then(response => {
      if (response.status >= 300) {

        dispatch( backendApiDone() );
        dispatch( backendApiError(response.status) );

      } else {

        response.json()
          .then(response  => {

            dispatch( backendApiDone() );
            dispatch({
              type: payload.success,
              payload: {
                success: payload.apiResponseFormatAction,
                data: response.data
              }
            });

          })
      }
    })
    .catch(() => {

      dispatch( backendApiDone() );
      dispatch( backendApiError() );

    });

};

export const getVerbFromPayload = (payload) => {
  return payload.http_verb == undefined ? "GET" : payload.http_verb;
};

export default backendApiMiddleWare;
