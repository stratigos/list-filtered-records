/******************************************************************************
 * Format a response payload from the backend Phoenix app.
 ******************************************************************************/

import { FORMAT_DESIGNERS } from "../constants/action_types";

/**
 * Format the Phoenix app's Designers API response into corresponding React
 *  component props.
 */
export const formatDesignersResponse = (backendResponseData) => {

  if (!Array.isArray(backendResponseData)) {
    backendResponseData = [backendResponseData];
  }

  return (
    backendResponseData.map( (designer) => {
      return (
        {
          designerId: designer.id,
          designer: {
            id: designer.id,
            name: designer.name,
            favorite: designer.favotire
          }
        }
      );
    })
  );

};

/**
 * Format responses from the Phoenix API.
 */
const backendResponseFormatMiddleware = ({ dispatch }) => next => action => {

  if( [ FORMAT_DESIGNERS ].indexOf(action.type) === -1 ) {
    next(action);
    return;
  }

  const { payload } = action;

  switch (action.type) {
    case FORMAT_DESIGNERS:
      dispatch({
        type: payload.success,
        payload: { data: formatDesignersResponse(payload.data) }
      });
  };

};

export default backendResponseFormatMiddleware;
