import {
  FORMAT_DESIGNER,
  SET_DESIGNER,
  UPDATE_DESIGNER_FAV
} from "../constants/action_types";

/**
 * Dispatch Action to hit the Elixir/Phoenix backend to toggle the specified
 * Designer's `favorite` status.
 */
const updateDesignerFav = (designerId, favStatus) => ({
  type: UPDATE_DESIGNER_FAV,
  payload: {
    url: `/designers/${designerId}/fav/${favStatus}`,
    success: FORMAT_DESIGNER,
    apiResponseFormatAction: SET_DESIGNER,
    designerId,
    favStatus
  }
});

export default updateDesignerFav;
