import { appTypes } from "../actions";

const INITIAL_STATE = {
  initialized: false
};

export const app = (state = INITIAL_STATE, action) => {
  if (action.type === appTypes.SET_INITIALIZED) {
    return { ...state, initialized: action.initialized };
  } else if (action.type === appTypes.SET_INIT) {
    return {
      initialized: false,
    };
  } else {
    return state;
  }
};
