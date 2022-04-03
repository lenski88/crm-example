import { CURRENT_DEVELOPER } from "../actions/actions";

const initialState = null;

export const currentDeveloperReducer = (state = initialState, action) => {
  switch (action.type) {
    case CURRENT_DEVELOPER: {
      return action.developer;
    }
    default: {
      return state;
    }
  }
};
