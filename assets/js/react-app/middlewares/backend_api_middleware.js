/******************************************************************************
 * Load data from the Phoenix backend app.
 ******************************************************************************/

import { FETCH_DESIGNERS } from "../constants/action_types";
import { BASE_URL } from "../constants/api_endpoints";
import backendApiError from "../actions/backend_api_error";
import backendApiStart from "../actions/backend_api_start";
import backendApiDone from "../actions/backend_api_done";

/**
 * Make API calls to backend CMS/JSON API. Expect `action` to be a
 *  Flux Standard Action.
 */
const backendApiMiddleWare = ({ dispatch }) => next => action => {

  // Pass through if not an API call.
  if( [ FETCH_DESIGNERS ].indexOf(action.type) === -1 ) {
    next(action);
    return;
  }

  const { payload } = action;

  dispatch( backendApiStart() );

  fetch(BASE_URL + payload.url)
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
              payload: { success: payload.apiResponseFormatAction, data: response.data }
            });

          })
      }
    })
    .catch(() => {

      dispatch( backendApiDone() );
      dispatch( backendApiError() );

    });

};

export default backendApiMiddleWare;
