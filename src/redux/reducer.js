import * as actions from "./action-types";

const initialState = {};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    default:
      return { ...state };
  }
};

export default rootReducer;
