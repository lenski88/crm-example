import { DEVELOPERS_LIST } from "../actions/actions";

const { team } = require("../../data/data.json");
const initialState = [];

export const navigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEVELOPERS_LIST: {
      let developers = team.developers;
      return {
        developers,
      };
    }
    default: {
      return state;
    }
  }
};
