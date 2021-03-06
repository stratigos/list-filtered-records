/******************************************************************************
 * List of Redux Action types.
 ******************************************************************************/

// Application state.
export const SET_DESIGNERS = "SET_DESIGNERS";
export const SET_TEXT_SEARCH = "SET_TEXT_SEARCH";
export const SET_GT_FILTER = "SET_GT_FILTER";
export const SET_LT_FILTER = "SET_LT_FILTER";
export const SET_FAV_FILTER = "SET_FAV_FILTER";
export const UPDATE_FAV_FILTER = "UPDATE_FAV_FILTER";
export const SET_SORT_STYLE = "SET_SORT_STYLE";

// Application utilities
export const FORMAT_DESIGNERS = "FORMAT_DESIGNERS";

// UI Feedback and errors
export const BROADCAST_ERRORS = "BROADCAST_ERRORS";
export const DISPLAY_ERROR = "DISPLAY_ERROR";

// Phoenix Backend API
export const FETCH_DESIGNERS = "FETCH_DESIGNERS";
export const BE_API_START = "BACKEND_API_START";
export const BE_API_DONE  = "BACKEND_API_DONE";
