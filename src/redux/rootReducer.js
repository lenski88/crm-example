import { combineReducers } from "redux";
import { navigationReducer } from "./reducers/navigationReaducer";

export const rootReducer = combineReducers({
  navigation: navigationReducer,
});
