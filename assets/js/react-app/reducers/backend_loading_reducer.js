import { BE_API_START, BE_API_DONE } from "../constants/action_types";

const backEndloadingReducer = (loading = false, action) => {
  switch (action.type) {
    case BE_API_START:
      return loading = true;
    case BE_API_DONE:
      return loading = false;
  }

  return loading;
};

export default backEndloadingReducer;
