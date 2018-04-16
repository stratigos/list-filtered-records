import { BE_API_DONE } from '../constants/action_types';

/**
 * Dispatch this Action to let application know a request to the Phoenix app
 *  back end request has responded.
 */
 const backendApiDone = () => ({
   type: BE_API_DONE
 });

 export default backendApiDone;
