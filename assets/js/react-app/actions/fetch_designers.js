import { FETCH_DESIGNERS, FORMAT_DESIGNERS, SET_DESIGNERS } from '../constants/action_types';
import { API_ENDPOINT_DESIGNERS } from '../constants/api_endpoints';

const fetchDesigners = () => ({
  type: FETCH_DESIGNERS,
  payload: {
    url: API_ENDPOINT_DESIGNERS,
    success: FORMAT_DESIGNERS,
    apiResponseFormatAction: SET_DESIGNERS
  }
});

export default fetchDesigners;
