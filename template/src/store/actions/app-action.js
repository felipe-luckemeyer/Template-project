import { createTypes } from "reduxsauce";

export const appTypes = createTypes(
  `
  SET_INITIALIZED
`,
  { prefix: "APP/" }
);

const initialize = () => {
  return async (dispatch) => {
    dispatch({
      type: appTypes.SET_INITIALIZED,
      initialized: true,
    });
  };
};

export const appActions = {
  initialize
};
