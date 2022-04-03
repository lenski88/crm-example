import { DEVELOPERS_LIST } from "../actions/actions";

const { team } = require("../../data/data.json");
const initialState = null;

export const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEVELOPERS_LIST: {
      return team.developers;
    }
    default: {
      return state;
    }
  }
};
