import { BE_API_START } from '../constants/action_types';

/**
 * Dispatch this Action to let application know Phoenix app / back end data
 *  request has been made.
 */
 const backendApiStart = () => ({
   type: BE_API_START
 });

 export default backendApiStart;
